const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/getFlights', require('./routes/api/flights'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));