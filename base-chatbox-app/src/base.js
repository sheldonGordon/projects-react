import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDc_1Mu1uNnG_6Cupmgfer9lFKLHET4j9Y",
    authDomain: "chatbox-app-9be32.firebaseapp.com",
    databaseURL: "https://chatbox-app-9be32.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base