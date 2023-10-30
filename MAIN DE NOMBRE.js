// ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = { 
  apiKey: "AIzaSyDvxIU9iSO01JHhaPCuuzDtXBjpsMBNd4o",
  authDomain: "clasificatoria-tron.firebaseapp.com",
  databaseURL: "https://clasificatoria-tron-default-rtdb.firebaseio.com",
  projectId: "clasificatoria-tron",
  storageBucket: "clasificatoria-tron.appspot.com",
  messagingSenderId: "517024219515",
  appId: "1:517024219515:web:7200493ec3764d1f853dde"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


function tron()
{
  window.location = "INDEX DE TRON.html";
}

