import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyATERU_BO15Tk7gxZnjBKosMancIYVzk8w",
  authDomain: "recette-app-4ac05.firebaseapp.com",
  databaseURL: "https://recette-app-4ac05.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
