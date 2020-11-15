
const camerabutton = document.getElementById("camera");

console.log(123);

var id = getUrlVars()["id"];

camerabutton.href = `camera.html?id=${id}`;

function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    alert(id);
    
     
