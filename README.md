# JSON Sharing App

A modern web app to easily share, edit, and manage your JSON data. Built with Next.js, Clerk authentication, Prisma/PostgreSQL, and a beautiful, accessible UI with full dark mode support.

## Features

- **User Authentication**: Secure sign-in/sign-up with Clerk.
- **JSON Data Management**: Add, view, and share JSON data with a clean dashboard.
- **Modern Editor**: Edit JSON with syntax highlighting using CodeMirror, with automatic dark/light theming.
- **Shareable Links**: Each JSON entry gets a unique URL for easy sharing.
- **Responsive UI**: Built with a custom modern theme, responsive design, and accessible components.
- **Dark Mode**: Toggle dark/light mode from the navbar, with persistent preference.
- **PostgreSQL Database**: Data is stored securely using Prisma ORM.



## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL database

### Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/mootezbh/jsonsharing.git
   cd jsonsharing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root with:
   ```
   POSTGRES_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. **Set up the database:**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Dashboard**: After signing in, add new JSON data, view your entries, and share them.
- **JSON Editor**: Add or edit JSON with syntax highlighting and validation.
- **Dark Mode**: Use the sun/moon toggle in the navbar to switch themes.
- **Share**: Click the share icon next to any entry to get a unique link.

## Project Structure

- `src/app/` - Next.js app directory (pages, API routes, layout)
- `src/components/` - UI components, dialogs, editors, theme provider
- `prisma/schema.prisma` - Database schema

## API Endpoints

- `POST /api/json` - Add new JSON data (authenticated)
- `GET /api/json` - List your JSON entries (authenticated)
- `GET /api/json/[id]` - Fetch a single JSON entry by ID

## Database Models

```prisma
model User {
  id          String     @id @default(cuid())
  clerkUserId String     @unique
  email       String     @unique
  name        String?
  imageUrl    String?
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
  JsonData    JsonData[]
}

model JsonData {
  id        String   @id @default(cuid())
  name      String
  content   String
  userId    String
  user      User     @relation(fields: [userId], references: [clerkUserId])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Theming & UI

- Modern color palette and rounded corners.
- Fully responsive and accessible.
- Dark mode toggle in the navbar (see `src/components/theme-provider.tsx`).

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Clerk](https://clerk.com/) (authentication)
- [Prisma](https://www.prisma.io/) (ORM)
- [PostgreSQL](https://www.postgresql.org/) (database)
- [Tailwind CSS](https://tailwindcss.com/) (styling)
- [CodeMirror](https://uiwjs.github.io/react-codemirror/) (JSON editor)
- [Lucide Icons](https://lucide.dev/) (icons)

