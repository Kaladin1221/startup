# Kotoba

[My Notes](notes.md)

A simple word game very similar to wordle but with extra funtionality.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable


For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Kotoba is a simple fun word game where everyday a random 6 letter word is chosen. Players then have 6 tries to guess the word. When they get the word wrong Kotoba will tell them if any letters were correct and in the correct spot or correct and in the wrong spot. Because the word is the same for everyone, players can compete against their friends to see who can guess the word in the least attempts.

### Design

![Design Sketch](https://github.com/user-attachments/assets/97bcbef5-208d-4bc4-ab74-285882a4b840)



### Key features

- Random six letter word chosen every day
- System to guess and show which letters are correct and in the right location for every guess
- Visual grid to show how many guesses are left
- Ability to track how many people have solved the daily word displayed in real time
- Tracks each player so refreshing the page keeps your guesses for the day
- Ability to do practice words that aren't the daily word

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - For structure of application. Two pages, one for the daily word and one for the practice words.
- **CSS** - For styling the page and displaying the correct colors for correct and incorrect letters.
- **React** - Displays how many people have solved the daily word. Use this to create the grid and show letters on the screen
- **Service** - Access a database of all words to keep track of what the daily word is and changes it to a new random word every day. Also keeps track of how many users have solved the daily word.
- **DB/Login** - Stores users and keeps track of users guesses for the day. Users can't refresh page to get new set of guesses.
- **WebSocket** - As more people solve the daily word the counter will increase for everyone.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I created 3 pages: A home page, a play page, and an about page
- [x] **Proper HTML element usage** - I did this
- [x] **Links** - Added a link to my github and links between the pages
- [x] **Text** - I did this
- [ ] **3rd party API placeholder** - The word of the day will be chosen from a 3rd party database and displayed when the user correctly guesses the word in the table
- [x] **Images** - I added an image but the final project won't need one
- [x] **Login placeholder** - I just added a name but for the finale project I don't want people to have to sign in
- [x] **DB data placeholder** - I did this with the random word being chosen every day behind the scenes 
- [x] **WebSocket placeholder** - The times solved today will update every time someone solves it and push it to everyones screen

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I did this
- [x] **Navigation elements** - I did this
- [x] **Responsive to window resizing** - I did this 
- [x] **Application elements** - I did this
- [x] **Application text content** - I did this
- [x] **Application images** - I did this

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I did this.
- [x] **Components** - I did this.
- [x] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - I made the reactive parts for the game, I created the logic for checking if a word is correct and if the letters are in the right position or not
- [x] **Hooks** - I did this

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** - Done
- [x] **Static middleware for frontend** - Done
- [x] **Calls to third party endpoints** - Gets defintions for the words from a third party api and displays them in about
- [x] **Backend service endpoints** - List with possible words to randomly choose from
- [x] **Frontend calls service endpoints** - Grabs one of the words and makes it the word of the day for the play section also displays what that word is in the about section.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
