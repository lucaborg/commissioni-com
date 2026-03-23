@AGENTS.md

# Progetto: commissioni.com

Piattaforma italiana per richiedere e offrire servizi di prossimità (spesa, dog sitting, accompagnamento bambini, pagamento bollette, assistenza fiscale). Sistema di reputazione, badge, specializzazioni, graduatorie.

## Stato attuale (2026-03-23)
- Homepage pubblica completata e su `main`
- Componenti: `Navbar`, `HeroSearch` (client), `CategoryGrid` (client), `CtaDual`, `TopProviders`
- Dati mock hardcodati — DB non ancora implementato

## Stack
- Next.js 16.2.1 + TypeScript + Tailwind CSS v4 + App Router
- Tailwind v4: config CSS-first via `@theme` in `globals.css`, nessun `tailwind.config.js`
- Colore primario: `#4f46e5` (indigo/viola) → `#7c3aed`
- Deploy target: Vercel (dominio su Aruba, punta via DNS)
- GitHub: https://github.com/lucaborg/commissioni-com

## Prossimi passi MVP
1. Database: PostgreSQL + Prisma ORM
2. Autenticazione: NextAuth.js (utenti possono essere sia richiedenti che fornitori)
3. Pagine: /registrati, /login, /dashboard, /richieste, /graduatorie
4. Pagamenti: Stripe
5. Geolocalizzazione: ricerca fornitori per città/CAP
6. Sistema reputazione: stelle, recensioni, badge, livelli, graduatorie (solo utenti registrati)

## Comandi utili
- `npm run dev` — avvia dev server su http://localhost:3000
- `npm run build` — build produzione (usare per verificare prima di ogni merge)
- `npx tsc --noEmit` — check TypeScript senza build
- Worktree dir: `.worktrees/` (gitignored)

## Note tecniche
- Pagine mancanti (`/richieste`, `/graduatorie`, ecc.) restituiscono 404 — atteso per MVP
- `npm test` non configurato — aggiungere vitest in fase futura
- Hamburger mobile nella Navbar è placeholder statico — da rendere interattivo con auth
