import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";
import faviconSrc from "@/assets/Foto profilo IG - Favicon.jpg";

// Draw a circular favicon via canvas so the browser tab shows a round avatar
const _img = new Image();
_img.onload = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 64; canvas.height = 64;
  const ctx = canvas.getContext("2d")!;
  ctx.beginPath();
  ctx.arc(32, 32, 32, 0, Math.PI * 2);
  ctx.clip();
  ctx.drawImage(_img, 0, 0, 64, 64);
  const link = (document.querySelector("link[rel='icon']") as HTMLLinkElement) ?? document.createElement("link");
  link.rel  = "icon";
  link.type = "image/png";
  link.href = canvas.toDataURL("image/png");
  document.head.appendChild(link);
};
_img.src = faviconSrc;

const router = getRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
