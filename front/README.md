# Feedback AI Dashboard

Next.js 16 + Tailwind CSS v4 project (home page → login → dashboard with
analytics, reports, settings).

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What was fixed

- Added the missing `package.json`, `tsconfig.json`, `next.config.ts`,
  `postcss.config.mjs` — the project had no build config at all.
- Removed the `next/font/google` (Geist) fetch, which fails to build in
  network-restricted environments; switched to system fonts.
- `app/page.tsx` was force-redirecting straight to `/dashboard`, so the
  built home page (Hero, Features, Footer) never showed. It now renders
  properly, with "Login" / "Open Dashboard" links.
- Login (`app/login/page.tsx`) now validates the email format and password
  length, shows inline errors instead of `alert()`, and stores a session
  (`localStorage`) on success.
- Login → dashboard redirect used `router.push()`, which can hit Next.js's
  client-side **Router Cache**: if `/dashboard` was ever rendered once
  without a session (e.g. visited directly, bounced to `/login`), that
  stale "not logged in" render could get reused after logging in,
  bouncing you straight back to `/login`. Fixed by using a full
  `window.location.href` navigation for login, logout, and the
  unauthenticated-dashboard redirect, so each of those always gets a
  fresh page load and a fresh session check.
- Dashboard routes (`/dashboard`, `/analytics`, `/reports`, `/settings`)
  are protected — if there's no session, they redirect to `/login`.
- Dark mode toggle (`ThemeToggle`) was wired to `next-themes` but had no
  `<ThemeProvider>` and Tailwind v4 wasn't configured for class-based dark
  mode, so it silently did nothing. Both are fixed now
  (`components/ThemeProvider.tsx` + `@custom-variant dark` in
  `globals.css`).
- `ProfileDropdown` now shows the logged-in email and its **Logout**
  button actually clears the session and redirects to `/login`.
- Upgraded `next` to the latest patched version (the pinned version had a
  known security advisory).

## Notes

- This is a frontend-only demo login: any syntactically valid email +
  password (4+ characters) is accepted since there's no backend/API here.
  If you want real authentication (hashed passwords, a database, etc.),
  that needs a backend — happy to help wire that up if needed.
- `npm run build` was run locally to confirm all 6 routes compile and
  render with zero errors.
