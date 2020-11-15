
    const btnCreate = document.getElementById("btnCreate");
    const btnUsers = document.getElementById("addUsers");
    var login = '00112233-4455-6677-8899-aabbccddeeff';

console.log(1111);
var encodedData = window.btoa("Hello, world");
let fileInBase64Format = window.btoa(unescape(encodeURIComponent("C:/Users/Alex/Desktop/au/Alexl.wav")));
console.log(fileInBase64Format);

console.log(123);
       // il = el.querySelectorAll('li.news > comment')
   /* btnCreate.addEventListener("click", async e=> {
                    const jsonRequest = {}
                    
                    jsonRequest.todo = prompt("News")
                    if(jsonRequest.todo != ""){
                    const result = await fetch("http://localhost:8080/news", {method: "POST", 
                    headers: {"content-type": "application/json"}, body: JSON.stringify(jsonRequest)})
                    const success = await result.json();
                    readTodos()
                    alert("CREATED! ")}

     })*/


     btnUsers.addEventListener("click", async e=> {
        const jsonRequest = {}
        
        jsonRequest.site = "B1";
        jsonRequest.type_order = "0";

        const result = await fetch("http://46.148.224.94:8080/order", {method: "POST", 
        headers: {"content-type": "application/json"}, body: JSON.stringify(jsonRequest)})
        const success = await result.json();
        alert(success.qrId);

})
     
