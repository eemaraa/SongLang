const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('SongLang API by Emarov is running!');
});

// Placeholder routes
// app.use('/api/users', require('./routes/users'));
// app.use('/api/songs', require('./routes/songs'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
