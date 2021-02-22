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


// Read/Write Files w/fs
app.post('/api/notes', (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let newNote = req.body;
    let uniqueID = (savedNotes.length).toString();
    newNote.id = uniqueID;
    savedNotes.push(newNote);


    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    console.log("Your note has been saved to db.json. Content: ", newNote);
    res.json(savedNotes);

});
// function writeToFile(path, data) {
//     fs.writeFile(path, data, err => {
//         if(err){
//             console.log(err)
//         }
//         else{console.log('Your README has generated successfully!')}
//     })
// }

// async function init() {
//     await inquirer
//     .prompt(questions)
//     .then(response => {
//         writeToFile(path, generateMarkdown(response));
//         console.log("Thank you for using the MissNG README generator! :)");
//     });    
// }

// BONUS: Delete Capabilities

// Starts server to begin listening fopr requests
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}. Test server at http://localhost:${PORT}`));