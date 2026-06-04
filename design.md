# Design & Dev Principles

## Regola generale
Parti sempre dalla soluzione CSS più semplice. Solo se non è sufficiente, aggiungi JavaScript/React.

**Ordine di preferenza:**
1. CSS puro (classi Tailwind, proprietà inline)
2. CSS con piccole variazioni di classi React
3. Stato React minimo solo se strettamente necessario

**Da evitare:**
- Scale trick con wrapper overflow-hidden per ridurre elementi → usa semplicemente `w-[x]` o una colonna più stretta
- `useState` per calcolare posizioni che si possono derivare da una prop
- Doppi wrapper, ref + forceUpdate, o altre soluzioni complesse quando basta una classe CSS
