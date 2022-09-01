function addroom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

        localStorage.setItem("room_name", room_name);

        window.location = "kwiter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  =
childSnapshot.key;
       room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
            });});}
       getData();
    
    user_name
    room_name
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });