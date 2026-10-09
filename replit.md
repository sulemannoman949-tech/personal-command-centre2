# Personal Command Centre

A self-contained personal productivity dashboard for managing tasks, goals, study, habits, notes, and focus time in the browser.

## Run & Operate

- `pnpm --filter @workspace/personal-command-centre run dev` — run the web app
- `pnpm --filter @workspace/personal-command-centre run typecheck` — typecheck the app
- `PORT=18982 BASE_PATH=/ pnpm --filter @workspace/personal-command-centre run build` — create a production build
- `pnpm run typecheck` — full workspace typecheck
- `pnpm run build` — full workspace build

The app does not require a backend, database, API key, or external service. User data is stored in browser localStorage.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React + Vite + TypeScript
- Tailwind CSS with a local theme
- Wouter for client-side routes
- Lucide React for icons
- Build: Vite

## Where things live

- `artifacts/personal-command-centre/src/App.tsx` — application shell, routes, pages, forms, and interaction logic
- `artifacts/personal-command-centre/src/lib/storage.ts` — typed localStorage store, starter data, and persistence helpers
- `artifacts/personal-command-centre/src/index.css` — theme tokens, responsive styling, textures, and motion
- `artifacts/personal-command-centre/vite.config.ts` — portable Vite development and production configuration

## Architecture decisions

- Browser-first persistence keeps the first version portable and usable offline without a service dependency.
- Starter content gives the first visit a useful dashboard while empty states support clearing everything and starting fresh.
- The shell uses route-local pages with shared typed store updates so every mutation is immediately reflected across the dashboard.
- Theme state is stored with the profile and applied to the document root for consistent dark/light rendering.

## Product

The app provides a daily overview plus focused areas for tasks, study sessions and Pomodoro focus time, habit streaks, short- and long-term goals, searchable notes, profile settings, theme switching, and a destructive reset flow with confirmation.

## User preferences

- Dark theme is the default.
- The interface should remain responsive, energetic, and professional without relying on external services.

## Gotchas

- Run Vite production builds with `PORT` and `BASE_PATH` set, or use the managed workflow, because the Vite config validates those environment variables.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
