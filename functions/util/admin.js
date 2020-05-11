const admin = require("firebase-admin")
const serviceAccount = require("./socialape-6851e-firebase-adminsdk-97wkd-3bdf9bef97.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-6851e.firebaseio.com",
})

const db = admin.firestore()

module.exports = { admin, db }
