
    const btnCreate = document.getElementById("btnCreate");
    const paybutton = document.getElementById("pay");
    var login = '00112233-4455-6677-8899-aabbccddeeff';

console.log(1111);
var encodedData = window.btoa("Hello, world");
let fileInBase64Format = window.btoa(unescape(encodeURIComponent("C:/Users/Alex/Desktop/au/Alexl.wav")));
console.log(fileInBase64Format);

var id = getUrlVars()["id"];

function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }


getCamera()

async function getCamera(){
    const jsonRequest = {}
        
    jsonRequest.site = id;
    jsonRequest.type_order = "0";

    const result = await fetch("http://192.168.1.66:8080/order", {method: "POST", 
    headers: {"content-type": "application/json"}, body: JSON.stringify(jsonRequest)})
    const success = await result.json();
    //alert(success.payload)
    paybutton.href = success.payload;
}
     


     
