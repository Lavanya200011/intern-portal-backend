
# Intern Portal Backend

This is the backend API for the Intern Portal project. It handles intern data and login validation using Express.js.

## 📁 Project Structure

```
server.js          # Main server file
package.json       # Node.js project metadata
```

## 🚀 Technologies Used

- Node.js
- Express.js
- CORS

## 📦 Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/your-username/intern-portal-backend.git
cd intern-portal-backend
```

2. Install dependencies:

```terminal
npm install
```

3. Start the server:

```terminal
npm start
```

By default, the server runs on `http://localhost:5000`.

## 📌 API Endpoints

- **GET /** – Health check: Returns a simple message.
- **GET /api/interns** – Returns a list of interns.
- **POST /api/login** – Validates intern login based on name.
  - Request body:
    ```json
    { "username": "Lavanya" }
    ```

## 🌐 Deployment

Use platform **Render** to deploy this server.

## 📄 License

MIT
