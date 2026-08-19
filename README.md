# Loop AI Feedback Platform

## Overview

Loop AI Feedback Platform is an AI-powered feedback management application designed to collect, manage, analyze, and generate insights from user feedback.

The project is organized around a frontend/application layer, database and authentication configuration, and an AI service. The environment files indicate the use of PostgreSQL with Prisma, NextAuth for authentication, and Groq for AI-powered functionality.

## Technology Stack

- **Frontend / Application:** Next.js
- **UI:** React
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** NextAuth
- **AI Service:** Groq API
- **AI Backend Service:** Local service running on port `8000`
- **Application URL:** `http://localhost:3000`

## Project Configuration

The project uses environment variables for database connectivity, authentication, and AI integration.

### Environment Variables

Create the required environment files locally and add the appropriate values:

```env
DATABASE_URL=your_postgresql_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_BACKEND_URL=http://localhost:3000
AI_SERVICE_URL=http://localhost:8000
AUTH_SECRET=your_auth_secret
GROQ_API_KEY=your_groq_api_key
```

> **Security:** Never commit real database passwords, authentication secrets, or API keys to GitHub. Add environment files such as `.env`, `.env.local`, or other secret-containing files to `.gitignore`.

## Database

The application uses a PostgreSQL database with Prisma ORM.

Before starting the application, make sure the PostgreSQL connection string is configured in `DATABASE_URL`.

Typical Prisma commands:

```bash
npx prisma generate
npx prisma migrate dev
```

If the project already contains migrations created by the team, use the migration workflow specified by the project instead of creating new migrations unnecessarily.

## AI Integration

The project uses a local AI service and Groq API configuration.

- Local AI service: `http://localhost:8000`
- Groq authentication: `GROQ_API_KEY`

Make sure the AI service is running before using features that depend on AI-generated feedback or insights.

## Authentication

Authentication is configured using NextAuth.

Required variables include:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

For local development, the application is expected to run on port `3000`.

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create the required `.env` / `.env.local` files and add your local configuration.

Do not copy production secrets into the repository.

### 4. Set up Prisma

```bash
npx prisma generate
```

If database migrations are required:

```bash
npx prisma migrate dev
```

### 5. Start the AI service

Make sure the AI backend/service is running on:

```text
http://localhost:8000
```

### 6. Start the Next.js application

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## Environment File Reference

The supplied environment configuration indicates these responsibilities:

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL database connection |
| `NEXTAUTH_URL` | NextAuth application URL |
| `NEXTAUTH_SECRET` | NextAuth session/security secret |
| `NEXTAUTH_BACKEND_URL` | Backend/application authentication URL |
| `AI_SERVICE_URL` | Local AI service endpoint |
| `AUTH_SECRET` | Authentication secret |
| `GROQ_API_KEY` | Groq AI API authentication |

## Project Structure

A recommended high-level structure is:

```text
project-root/
├── frontend/
├── backend/
├── ai/
├── prisma/
├── .env
├── .env.local
├── .gitignore
├── package.json
└── README.md
```

The exact folder structure should follow the team's existing repository and mentor/project requirements.

## Security Notes

- Do not upload `.env` files containing real secrets to GitHub.
- Do not expose `DATABASE_URL`, `NEXTAUTH_SECRET`, `AUTH_SECRET`, or `GROQ_API_KEY` in screenshots or documentation.
- If a secret has already been shared publicly, rotate/revoke it and replace it with a new secret.
- Use placeholder values in README examples.

## Troubleshooting

### Prisma cannot read environment variables

If Prisma does not load the environment variables automatically, follow the Prisma configuration required by the installed Prisma version and ensure the environment file is loaded before running Prisma commands.

### AI service connection error

Check that the AI service is running and that:

```env
AI_SERVICE_URL=http://localhost:8000
```

matches the actual service address.

### Authentication error

Check that the application URL and authentication secret are configured correctly:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

## Development

For local development:

```bash
npm install
npx prisma generate
npm run dev
```

Run the AI service separately if the application requires AI functionality.

## License

This project is intended for development and educational/project use. Add the project's official license here if one has been selected.
