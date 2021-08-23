const firebaseConfig = {
    apiKey: "AIzaSyDCehkjNgY2_9nKDupTi8spTzmMUMieIGs",
    authDomain: "lets-chat-web-app-621d5.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-621d5-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-621d5",
    storageBucket: "lets-chat-web-app-621d5.appspot.com",
    messagingSenderId: "11064495543",
    appId: "1:11064495543:web:438dc0ce2169f9cdf96c32",
    measurementId: "G-JCF4MEDW0G"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "add room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room_name " + Room_names);
                  row = "<div class = 'room_name' id = "+ Room_names + " onclick = 'redirect_to_room_name(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row ;
            });
      });
}
getData();

function redirect_to_room_name(name){
      console.log("name");
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}