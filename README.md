🗂️ Secure Kanban Board
📌 Description
A full-stack Kanban board application built with secure user authentication. This project was designed to follow Agile team practices, allowing authenticated users to manage and visualize their work tasks in a clean, user-friendly interface.

🎯 User Story
css
Copy
Edit
AS A member of an agile team  
I WANT a Kanban board with a secure login page  
SO THAT I can securely access and manage my work tasks  
✅ Acceptance Criteria
✅ Login Form:
When the login page loads, users are presented with input fields for a username and password.

✅ Valid Login:
When valid credentials are entered, the user is authenticated via JSON Web Tokens (JWT) and redirected to the Kanban board.

✅ Invalid Login:
When invalid credentials are entered, an error message is displayed to inform the user.

✅ Token Storage:
On successful login, a JWT is securely stored in the client's localStorage to support authenticated requests.

✅ Logout:
When the user logs out, the JWT is removed from localStorage and they are redirected to the login page.

✅ Protected Routes:
Accessing the Kanban board without a valid JWT redirects the user back to the login page.

✅ Session Expiration:
If the user remains inactive for a defined period, the JWT is invalidated, and any further action redirects them to the login page.

🔒 Authentication
This app uses JWT (JSON Web Tokens) for authentication. Tokens are issued upon successful login and are verified on every protected request. Tokens are stored in localStorage and automatically removed on logout or session expiration.

🚀 Features
🔐 Secure login with JWT

🗃️ Fully functional Kanban board UI

🔄 Automatic session handling and token expiration

🚫 Access control for protected routes

💡 Error handling for invalid login attempts

🛠️ Tech Stack
Frontend: React (with TypeScript or JavaScript)

Backend: Node.js / Express

Authentication: JWT (jsonwebtoken, bcrypt)

Storage: localStorage (for JWT)

Optional: MongoDB or SQL database for users and tasks

📂 Project Structure
bash
Copy
Edit
/client      # Frontend code  
/server      # Backend API & authentication logic  
📦 Setup Instructions
Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-username/secure-kanban-board.git
Navigate to the server folder and install dependencies:

bash
Copy
Edit
cd server
npm install
Start the backend server:

bash
Copy
Edit
npm run dev
In a new terminal, navigate to the client folder and install frontend dependencies:

bash
Copy
Edit
cd client
npm install
npm run dev
👤 Author
Jared Mindock
📧 jjmin94@gmail.com
