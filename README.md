# 11 Express.js: Note Taker

⋘ ──── ∗⋅◦∘◈\[[MissNG Notebooker](https://notebooker-00.herokuapp.com//)\]◈∘◦⋅∗ ──── ⋙

I have taken a starter code and created an application that would allow users to write & save notes. The application uses an Express.js back end and will retrieve note data from a JSON file.

As the application's front end was already built, my task included construction of the back end, connecting the two and deploying to Heroku.

Technologies utilised include...
+ [Bootstrap CSS](https://getbootstrap.com/)
+ Javascript
+ [GitBash](https://gitforwindows.org/)
+ [Node Environment](https://nodejs.org/en/about/)
+ [Express.js Framework](https://expressjs.com/)
+ [MySQL Database](https://www.mysql.com/)
+ [Heroku Platform](https://www.heroku.com/)

## ≫ ──── ≪•◦ Objectives ◦•≫ ──── ≪
```
+ Assist users in creating a 'notebook' of sorts
+ Allow users to write and save notes as needed
+ Provide an app which helps users organise thoughts & tasks clearly

```

## Mock-Up

The following images show the web application's appearance and functionality: 

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./public/assets/imgs/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./public/assets/imgs/11-express-homework-demo-02.png)

### ≫ ──── ≪•◦ Overview of Code Functionality ◦•≫ ──── ≪

1. Application deployed to both GitHub & Heroku and directs user to landing page upon opening.

2. When link on landing page is clicked, user is directed to the notes page consisting of notes in the left-hand column plus empty fields to enter a new note title w/text in the right-hand column.

3. Application presents user with a Save icon in the navigation at the top of the page and stores unique IDs in a JSON file in order to store notes.

4. Application accepts user response to save note which then updates left-hand column with existing notes.

5. User can select an existing note on the left-hand and application will re-open content to right-hand column.

6. User may also select the Write icon at the top of the page in order to enter a new note as needed.

7. **BONUS: Application additionally allows for user to delete notes via a Delete/Bin icon.

### ≫ ──── ≪•◦ Usability ◦•≫ ──── ≪

* Navigate to deployed application page on [Heroku](https://notebooker-00.herokuapp.com/).  
** _Alternatively, the application has also been deployed to GitHub [here](https://missng-git.github.io/Notebooker)_

* Click on "Get Started" button on landing page to be directed to Notebooker application (aka the notes page)

* Enter the Title & Text of your note and save via the *Save* icon at the top right corner of page (💾)

* Saved notes will appear on the left-hand side of the page and can revisited simply by selecting the desired note. Selecting an existing note will populate the right-side of the page with that note's title & text.

* To draft a new note, select the *Write* icon at the top right corner of the page (📝)

* To delete an existing note from the left-hand side, click the *Delete* icon to the right of the desired note (🗑️)

* To return to the landing page, click on the application name "MissNG Notebooker" in the top left corner of the page

===================================================================

## Getting Started

The application should have a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).


## Bonus

You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.