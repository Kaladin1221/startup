const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('kotoba');
const userCollection = db.collection('user');
const wordCollection = db.collection('wordList');


  let wordOfTheDay = "";
  let wordDate = "";



// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

function isDateToday(date){
    const today = new Date();

    return today.getDate() === date.getDate() && today.getMonth() === date.getMonth() && today.getYear() === date.getYear()
}


async function getWordOfTheDay(){
    const wordOfTheDay = "SPEAR"
    return wordOfTheDay
    if (wordDate === ""){
        wordDate = new Date();
        const wordOfTheDay = await wordCollection.aggregate([{ $sample: { size: 1 } }]).toArray();
        
    }
    if (!isDateToday(wordDate)){
        const wordOfTheDay = await wordCollection.aggregate([{ $sample: { size: 1 } }]).toArray();
        
        wordDate = new Date()
        
    }
    return wordOfTheDay;
    
    
}


module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  getWordOfTheDay,
  
};
