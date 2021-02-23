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
app.get('/api/notes', (req, res) => res.sendFile(__dirname, '/db/db.json'));

// Displays notes as JSON object 
app.get('/api/notes/', function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(savedNotes);
});

// Read/Write Files w/fs
app.post('/api/notes', (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let newNote = req.body;
    let uniqueID = savedNotes.length;
    newNote.id = uniqueID;
    savedNotes.push(newNote);

    console.log(savedNotes);

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes), function(err) {
        if (err) {
            throw err;
        }
    });
    console.log("Your note has been saved to db.json. Content: ", newNote);
    res.json(savedNotes);
});

// BONUS: Delete Capabilities
app.delete("/api/notes/:id", function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteID = req.params.id;
    let newID = 0;

    savedNotes = savedNotes.filter(currNote => {
        return currNote.id != noteID;
    })
    
    for (currNote of savedNotes) {
        currNote.id = newID.toString();
        newID++;
    }

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes), function(err) {
        if (err) {
            throw err;
        }
    });
    console.log(`Note ID ${noteID} has been deleted!`);    
    res.json(savedNotes);
})


// Starts server to begin listening fopr requests
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}. Test server at http://localhost:${PORT}`));