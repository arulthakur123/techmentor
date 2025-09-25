TechMentor - Stock Market Mentorship (Fancier Styled Version)

This monorepo contains a ready-to-deploy dynamic web app:
- /client -> React + Vite frontend (styled, responsive)
- /server -> Node + Express backend (API endpoints, MongoDB)

You do NOT need to install anything locally to deploy:
1. Fork this repo to your GitHub.
2. Deploy /client on Vercel (Import GitHub repo -> select /client as root directory).
3. Deploy /server on Render as a Web Service (Import repo -> set root to /server).
4. Create a MongoDB Atlas free cluster, get the connection string, and add it as MONGODB_URI env var in Render.
5. Add custom domain in Vercel for the frontend and in Render for API subdomain. Copy DNS records to your registrar.

See /server/README.md and /client/README.md for more details.
