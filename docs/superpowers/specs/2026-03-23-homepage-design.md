# commissioni.com — Homepage Design Spec

**Data:** 2026-03-23
**Stato:** Approvato dall'utente

---

## Panoramica

Homepage pubblica di commissioni.com, la piattaforma italiana per richiedere e offrire servizi di prossimità (spesa, dog sitting, accompagnamento bambini, pagamento bollette, assistenza fiscale).

---

## Stack

- **Framework:** Next.js 16.2.1 (App Router) + TypeScript
- **Stile:** Tailwind CSS v4 (configurazione CSS-first, no `tailwind.config.js`)
- **Colore primario:** Indigo/Viola `#4f46e5` → `#7c3aed`
- **Icone:** emoji come soluzione definitiva per il MVP; da valutare migrazione a Lucide in fasi successive

> ⚠️ Tailwind v4 è significativamente diverso da v3: nessun `tailwind.config.js`, configurazione in CSS, alcuni nomi di utility cambiati. Fare riferimento alla documentazione ufficiale v4.

---

## Metadata pagina

```ts
export const metadata: Metadata = {
  title: 'commissioni.com — Trova chi ti aiuta, vicino a te',
  description: 'La piattaforma italiana per richiedere e offrire servizi di prossimità: spesa, dog sitting, accompagnamento bambini, pagamento bollette, assistenza fiscale.',
}
```

---

## Layout scelto: A — Hero centrato + Categorie

### Sezioni (dall'alto verso il basso)

---

### 1. Navbar

**Componente:** `src/components/Navbar.tsx` — **Server Component** (no interattività diretta)

- Logo: `commissioni.com` (testo, bold, colore primario)
- Link desktop: Come funziona · Categorie · Graduatorie
- **Stato utente non loggato:** CTA `Accedi` (outline) + `Registrati` (filled viola)
- **Stato utente loggato:** link `Dashboard` + nome utente + avatar iniziale + dropdown con `Profilo` / `Esci`
- **Mobile:** hamburger icon (`☰`) → menu a dropdown verticale con tutti i link e CTA; solo logo visibile nella navbar collassata

> Nota: nella fase MVP, l'auth non è ancora implementata. La Navbar mostra sempre lo stato "non loggato" per ora. Sarà resa client component quando NextAuth.js sarà integrato.

---

### 2. Hero

**Componente:** `src/components/HeroSearch.tsx` — **`"use client"`** (gestisce state dei campi e navigazione)

- Background: gradiente viola `#4f46e5 → #7c3aed`
- Titolo: *"Trova chi ti aiuta, vicino a te"*
- Sottotitolo: *"Spesa, dog sitting, bambini, bollette, assistenza fiscale — e molto altro"*
- Barra di ricerca bianca con:
  - Campo 1: `città` — placeholder "La tua città o CAP" (icona 📍)
  - Campo 2: `categoria` — placeholder "Cosa ti serve?" (icona 🔍)
  - Bottone: `Cerca` → naviga a `/richieste?citta={value}&categoria={value}`
- Se la pagina `/richieste` non esiste ancora, il bottone naviga comunque all'URL corretto (che mostrerà 404 finché la pagina non è costruita)

---

### 3. Categorie principali

**Componente:** `src/components/CategoryGrid.tsx` — **`"use client"`** (gestisce stato selezione attiva)

- Griglia 5 colonne (desktop), 3 colonne (tablet), 2 colonne (mobile)
  - Mobile: `grid-cols-2` con la 5ª card che occupa `col-span-2` centrata
- Categorie: Spesa 🛒 · Dog Sitting 🐕 · Bambini 👶 · Bollette 📄 · Fiscale 💼
- Ogni card: icona + nome + contatore fornitori
- **Dati fornitori (MVP):** contatore hardcodato a `0` e non mostrato (nascosto per MVP); sostituito con query DB nelle fasi successive
- Click su categoria: popola il campo `categoria` in HeroSearch (via URL param o state condiviso)
- Hover / selezione attiva: bordo viola `#4f46e5` + sfondo lilla `#f5f3ff`

**Dati statici (MVP)** in `src/lib/categories.ts`:
```ts
export const CATEGORIES = [
  { id: 'spesa', label: 'Spesa', emoji: '🛒' },
  { id: 'dog-sitting', label: 'Dog Sitting', emoji: '🐕' },
  { id: 'bambini', label: 'Bambini', emoji: '👶' },
  { id: 'bollette', label: 'Bollette', emoji: '📄' },
  { id: 'fiscale', label: 'Fiscale', emoji: '💼' },
]
```

---

### 4. CTA doppia

**Componente:** `src/components/CtaDual.tsx` — **Server Component**

- **Sinistra** (filled viola):
  - Titolo: "Hai bisogno di aiuto?"
  - Testo: "Pubblica la tua richiesta e ricevi offerte da fornitori verificati nella tua zona"
  - Bottone: `+ Richiedi un servizio` → `/registrati?ruolo=richiedente` (MVP: `/registrati`)
- **Destra** (sfondo grigio chiaro, bordo sottile):
  - Titolo: "Vuoi guadagnare?"
  - Testo: "Registrati come fornitore, costruisci la tua reputazione e ricevi commissioni"
  - Bottone: `Diventa fornitore →` → `/registrati?ruolo=fornitore` (MVP: `/registrati`)

---

### 5. Top fornitori (teaser pubblico)

**Componente:** `src/components/TopProviders.tsx` — **Server Component**

- Titolo: "🏆 Top fornitori questa settimana"
- Griglia 3 colonne (desktop), 1 colonna (mobile)
- Ogni card: avatar iniziale + nome + stelle + categoria + n. servizi + medaglia (🥇🥈🥉)
- **Dati (MVP):** dati mock hardcodati (3 utenti fittizi); sostituiti con query DB reale nelle fasi successive
- **Stato vuoto (MVP):** la sezione usa dati mock, quindi non si verifica uno stato vuoto reale. In produzione, se < 3 fornitori: mostrare solo i disponibili; se 0: nascondere l'intera sezione
- Link "Vedi graduatoria completa →" → `/graduatorie` (richiede login; redirect a `/login` se non autenticato)

---

## Responsive

| Sezione | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Navbar | logo + hamburger | logo + hamburger | logo + link + CTA |
| Hero | stack verticale, ricerca full-width | idem | centrato, max-width |
| Categorie | 2 col (5ª col-span-2) | 3 col | 5 col |
| CTA doppia | stack verticale | stack verticale | 2 col |
| Top fornitori | 1 col | 2 col | 3 col |

---

## File da creare/modificare

| File | Tipo | Descrizione |
|------|------|-------------|
| `src/app/page.tsx` | Server Component | Homepage principale + metadata |
| `src/app/layout.tsx` | Server Component | Aggiornare title e description |
| `src/components/Navbar.tsx` | Server Component (MVP) | Barra di navigazione |
| `src/components/HeroSearch.tsx` | Client Component | Hero con barra ricerca e navigazione |
| `src/components/CategoryGrid.tsx` | Client Component | Griglia categorie con selezione |
| `src/components/CtaDual.tsx` | Server Component | Sezione doppia CTA |
| `src/components/TopProviders.tsx` | Server Component | Top fornitori con dati mock |
| `src/lib/categories.ts` | Utility | Dati statici categorie MVP |
