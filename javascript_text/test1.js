
//const classData = {
    //    roomNo: 1,
    //members: [
     //    { number: 1, name: 'a' },
      //   { number: 2, name: 'b' },
     //    { number: 3, name: 'c' },
      //   { number: 4, name: 'd' },
     //    { number: 5, name: 'e' }
   //  ]
 //};


const memberList = document.getElementById('member');
classData.members.forEach(member => {
    const listItem = document.createElement('li');
    listItem.textContent = `${member.number}: ${member.name}`;
    memberList.appendChild(listItem);
});


let xhr = new XMLHttpRequest();
xhr.open("GET", "./classRoom.json");
xhr.responseType = "json";

xhr.onload = function() {
    document.getElementById("roomNo").append(xhr.response.roomNo);

    xhr.response.members.forEach(function(member) {
        let p = document.createElement("p");
        p.append(member.id + ": " + member.name);
        document.getElementById("member").appendChild(p);
    });
};

xhr.send();

