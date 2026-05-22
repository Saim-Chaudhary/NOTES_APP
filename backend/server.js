const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const noteRoutes = require('./routes/noteRoutes');

dotenv.config();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/notes', noteRoutes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});