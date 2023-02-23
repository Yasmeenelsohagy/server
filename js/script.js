var btn = document.getElementById("btn1");
var body=document.getElementById("body");
btn.addEventListener("click", getUserData);
var i=1;
var len;

function getUserData() {
  do{
  var xhr = new XMLHttpRequest();


  
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var userData = JSON.parse(xhr.response);
        len=userData.length;
        var id=userData.id;
        var name=userData.name;
        var email=userData.email;
        /////////////
        var tr1 = document.createElement("tr");
       tr1.classList.add("success");
        var td1 = document.createElement("td");
        td1.innerHTML = id;
        tr1.appendChild(td1);
        var td2 = document.createElement("td");
        td2.innerHTML = name;
        tr1.appendChild(td2);
        var td3 = document.createElement("td");
        td3.innerHTML = email;
        tr1.appendChild(td3);
        body.appendChild(tr1);
        ///////////////
       
        console.log(len);
      }
    }
  };
  
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/"+i+"");
  
 // xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send("");
  i++;
} 
while(i<len)
}


