TechMentor - Client (React + Vite)

Deploy on Vercel (no local install):
1. Fork this repo to your GitHub.
2. In Vercel, create a New Project -> Import repo -> Set Root Directory to '/client'.
3. (Optional) Add Environment Variable:
   - VITE_API_URL = https://api.yourdomain.com
4. Deploy. After deployment, visit the Vercel site and add your custom domain.

Note: This client fetches API at /api/... which works when using a proxy or when the frontend and backend are served from the same domain. If deploying separately, configure rewrites or use absolute API URL in fetch calls.
