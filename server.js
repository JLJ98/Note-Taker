const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const app = express();
const PORT = process.env.PORT || 5001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the public directory

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Starts the server to begin listening
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
