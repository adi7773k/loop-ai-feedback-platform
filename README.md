# Loop AI Feedback Platform

This is the **frontend + backend merged into a single Next.js 14 app**, with the
authentication flow wired to the real backend (database-backed, not mocked).

## What's connected to the real backend

- **Login** (`components/auth/LoginForm.tsx`) → calls NextAuth's `signIn("credentials", ...)`,
  which hits `lib/auth.ts` → looks up the workspace + user in Postgres via Prisma and checks
  the bcrypt password hash.
- **Register** (`components/auth/RegisterForm.tsx`) → POSTs to `POST /api/auth/signup`
  (`app/api/auth/signup/route.ts`), which creates a real `Workspace` + admin `User` row.
- **Session** → `components/providers/AuthProvider.tsx` wraps the app in NextAuth's
  `SessionProvider`; the dashboard `Navbar` reads the real logged-in user's name/role and
  has a working **Sign Out** button.
- **Route protection** → `middleware.ts` blocks `/dashboard`, `/analytics`, `/feedback`,
  `/reports`, `/settings`, `/profile`, `/help` for anyone without a valid session/JWT and
  redirects to `/login`.

All `localStorage`-based mock auth from the original frontend has been removed.

## What's still using placeholder/mock data

The backend zip only implemented **auth** — there are no API routes yet for feedback,
themes, reports, or analytics (the Prisma models exist in `prisma/schema.prisma`, and
`lib/ai.ts` / `lib/search.ts` are empty stubs for that future work). So dashboard widgets,
the feedback table, analytics charts, and reports still render the sample/mock data that
shipped with the frontend components — there's nothing to connect them to yet. Once you
add API routes (e.g. `app/api/feedback/route.ts`) they can be swapped over the same way
auth was.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   Then fill in:
   - `DATABASE_URL` — a Postgres connection string
   - `NEXTAUTH_SECRET` — generate with `openssl rand -base64 32`
   - `NEXTAUTH_URL` — `http://localhost:3000` for local dev

3. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```
   The seed script creates a demo workspace and three demo users:

   | Workspace   | Role    | Email                  | Password  |
   |-------------|---------|-------------------------|-----------|
   | `loop-demo` | Admin   | admin@loop-demo.com     | Demo@123  |
   | `loop-demo` | Analyst | analyst@loop-demo.com   | Demo@123  |
   | `loop-demo` | Viewer  | viewer@loop-demo.com    | Demo@123  |

4. **Run the app**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000), then go to `/login` and sign in
   with the workspace slug `loop-demo` and any of the demo credentials above, or go to
   `/register` to create a brand new workspace + admin account.

## Project structure

```
app/
  (auth)/        Login / register / forgot-password pages
  (dashboard)/   Protected dashboard routes (guarded by middleware.ts)
  api/auth/      Real backend: NextAuth + signup route
components/
  auth/          Login & register forms (now call the real API)
  providers/     NextAuth SessionProvider wrapper
  dashboard/, analytics/, feedback/, reports/, settings/  UI (still sample data)
lib/
  auth.ts        NextAuth credentials provider (Prisma-backed)
  db.ts          Prisma client singleton
  ai.ts / search.ts   Empty stubs for future AI classification / search work
prisma/
  schema.prisma  Workspace / User / Feedback / Theme / Report models
  seed.ts        Demo data generator
middleware.ts    Session-based route protection
```
