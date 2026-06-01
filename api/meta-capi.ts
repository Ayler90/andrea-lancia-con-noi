import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createHash } from "crypto";

const PIXEL_ID = "1712759442574289";
const API_VERSION = "v19.0";

function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.META_CAPI_TOKEN;
  if (!token) {
    return res.status(500).json({ error: "Missing META_CAPI_TOKEN" });
  }

  const { event_name, event_id, email, name } = req.body ?? {};
  if (!event_name) {
    return res.status(400).json({ error: "Missing event_name" });
  }

  // Build user_data — hash PII if provided
  const user_data: Record<string, string> = {
    client_ip_address: (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ?? "",
    client_user_agent: (req.headers["user-agent"] as string) ?? "",
  };
  if (email) user_data.em = sha256(email);
  if (name)  user_data.fn = sha256(name);

  const payload = {
    data: [
      {
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event_id ?? crypto.randomUUID(),
        action_source: "website",
        event_source_url: req.headers.referer ?? "",
        user_data,
      },
    ],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    return res.status(response.ok ? 200 : 502).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Failed to reach Meta API" });
  }
}
