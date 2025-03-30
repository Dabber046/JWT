📱 Social Media API
A RESTful backend API for a simple social media application, where users can share their thoughts, react to friends' thoughts, and manage their friend lists. Built with Node.js, Express, and MongoDB using Mongoose ODM.

📦 Features
Full CRUD operations for Users and Thoughts

Reactions as nested subdocuments

Self-referencing friend system

Virtual properties for friendCount and reactionCount

Uses Mongoose for schema modeling and moment.js for date formatting

🛠️ Technologies
Node.js

Express.js

MongoDB & Mongoose

JavaScript (ES6+)

Moment.js

📂 Project Structure
bash
Copy
Edit
.
├── controllers/         # Route logic
├── models/              # Mongoose schemas
├── routes/              # API endpoints
│   └── api/
├── config/              # Database connection
├── server.js            # Entry point
└── README.md
📡 API Endpoints
/api/users
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:userId	Get a single user by ID
POST	/api/users	Create a new user
PUT	/api/users/:userId	Update a user by ID
DELETE	/api/users/:userId	Delete a user and their thoughts
POST	/api/users/:userId/friends/:friendId	Add a friend
DELETE	/api/users/:userId/friends/:friendId	Remove a friend
/api/thoughts
Method	Endpoint	Description
GET	/api/thoughts	Get all thoughts
GET	/api/thoughts/:thoughtId	Get a single thought by ID
POST	/api/thoughts	Create a new thought
PUT	/api/thoughts/:thoughtId	Update a thought by ID
DELETE	/api/thoughts/:thoughtId	Delete a thought
POST	/api/thoughts/:thoughtId/reactions	Add a reaction
DELETE	/api/thoughts/:thoughtId/reactions/:reactionId	Remove a reaction
⚙️ Installation
bash
Copy
Edit
git clone https://github.com/your-username/social-media-api.git
cd social-media-api
npm install
Make sure you have MongoDB running locally or update the connection string in config/connection.js to use MongoDB Atlas.

▶️ Running the Server
bash
Copy
Edit
npm start
Use an API testing tool like Insomnia or Postman to interact with the endpoints.

✅ Example User JSON
json
Copy
Edit
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
📖 Example Thought JSON
json
Copy
Edit
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
💬 Author
Jared Mindock
📧 jjmin94@gmail.com

