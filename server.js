const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // ⬅️ Required for POST data

const interns = [
  { name: "Lavanya", referalcode:"lavanya2025", amount: 1500 },
  { name: "Rahul", referalcode:"Rahul2025", amount: 1200 },
  { name: "Rohit", referalcode:"Rohit2025", amount: 900 }
];

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Intern Portal API is running....');
});

// ✅ Leaderboard data route
app.get('/api/interns', (req, res) => {
  res.json(interns);
});

// ✅ Login route
app.post('/api/login', (req, res) => {
  const { username } = req.body;
  const user = interns.find(intern => intern.name.toLowerCase() === username.toLowerCase());

  if (user) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
