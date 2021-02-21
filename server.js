// Dependencies
const express = require('express');
const path = require('path');
const fs = require("fs");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static assets
app.use(express.static('public'));

// ROUTES
const mainDir = path.join(__dirname, "/public");
app.get('/', (req, res) => res.sendFile(path.join(mainDir , 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(mainDir , 'notes.html')));
// Displays notes as JSON object 
app.get('/api/notes', (req, res) => res.json(__dirname, '/db/db.json'));

// Read/Write Files w/fs

// BONUS: Delete Capabilities

// Starts server to begin listening fopr requests
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}. Test server at http://localhost:${PORT}`));