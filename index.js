import express from 'express';
import path from 'path';

const app = express();

// ✅ Serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'home.html'));
});

// ✅ Serve login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'login.html'));
});

// ✅ Serve signup page
app.get('/signup', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'signup.html'));
});

// ✅ Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
