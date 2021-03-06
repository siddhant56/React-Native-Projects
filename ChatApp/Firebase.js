import firebase from "firebase";

class Firebase {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyBSz1bw_pQzGoUuYMHEXLJLd1iZIwxY7Js",
        authDomain: "reactbootcamp-739aa.firebaseapp.com",
        databaseURL: "https://reactbootcamp-739aa.firebaseio.com",
        projectId: "reactbootcamp-739aa",
        storageBucket: "reactbootcamp-739aa.appspot.com",
        messagingSenderId: "576353699269",
        appId: "1:576353699269:web:f8f3f663334fb11259f7ac",
        measurementId: "G-EM4N1550G4"
    });
  };

  observeAuth = () => {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  };

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {}
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref("message");
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);

    const message = {
      _id,
      timestamp,
      text,
      user
    };
    return message;
  };

  on = callback => {
    this.ref
      .limitToLast(50)
      .on("child_added", snapshot => callback(this.parse(snapshot)));
  };

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

  off() {
    this.ref.off();
  }
}

Firebase.shared = new Firebase();
export default Firebase;
