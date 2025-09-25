TechMentor - Server

How to deploy (Render):
1. Create a Render account and import this GitHub repository.
2. When creating a Web Service in Render, set the root directory to '/server'.
3. Environment variables:
   - MONGODB_URI = <your mongo atlas connection string>
4. Start Command: npm start
5. Render will build and run the service. Use the provided URL or add a custom domain (e.g., api.yourdomain.com).

Seed sample data:
POST /api/seed  -> call this once after DB is connected to populate sample mentors & courses.
