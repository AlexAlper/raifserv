const {Client} = require("pg");
const express = require ("express");
const uuidv1 = require('uuid/v1');//uuidv1()
const app = express();
const fetch = require('node-fetch');
const { removeAllListeners } = require("nodemon");
const e = require("express");
app.use(express.json());
app.use("/static", express.static('./static/'));


const client = new Client({
    "user": "postgres",
    "password" : "13",
    "host" : "localhost",
    "port" : 5432,
    "database" : "info"
})


app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`));

app.post("/order", async (req, res) => {

    console.log('lol')
    let result = {};
    try{
            const reqJson = req.body;
           // await createUser(reqJson.todo);   
        console.log(reqJson.site + " " + reqJson.type_order)

           var j = {
                additionalInfo: "Доп информация",
                amount: 10,
                createDate: "2019-07-22T09:14:38.107227+03:00",
                currency: "RUB",
                order: "1-22-333-1313-4325",
                paymentDetails: "Назначение платежа",
                qrType: "QRDynamic",
                sbpMerchantId: "MA0000000279"
                };
                
  let response = await fetch('https://e-commerce.raiffeisen.ru/api/sbp/v1/qr/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(j)
  });
  
   result = await response.json();
  console.log(result.qrId + " " + result.payload);

        result.success= true;
    }
    catch(e){
        console.log(e)
        result.success=false;
    }
    finally{
        //res.setHeader("content-type", "application/json");
        res.send(JSON.stringify(result));
        lisen(result.qrId);

    } 
});

function lisen(qrId){
    
    var j = {
        additionalInfo: "Доп информация",
        amount: 10,
        createDate: "2019-07-22T09:14:38.107227+03:00",
        currency: "RUB",
        order: "1-22-333-1313-4525",
        paymentDetails: "Назначение платежа",
        qrType: "QRDynamic",
        sbpMerchantId: "MA0000000279"
        };
        


    setTimeout(async function run() {
       a =  await discover(qrId);
       console.log(a)
        if(a == "NTST"){
           // setTimeout(run, 1000);
        } else {
            //
        }
      
    }, 1000);
}

async function  discover(qrId){
    console.log(qrId)
    let response = await fetch(`https://e-commerce.raiffeisen.ru/api/sbp/v1/qr/${qrId}/payment-status?`);

    let result = await response.json();
    console.log(result);
    return result;
}

app.listen(8080, () => console.log("Web server is listening.. on port 8080"))

//start();

//async function start() {
///
//}

