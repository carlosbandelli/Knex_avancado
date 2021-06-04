var database = require("./database")
var dados = [
/* INSERT
{
    nome: "Call of Duty WarZone",
    preço: 60.00
},

{
    nome: "League Of Legends",
    preço: 30.00
},

{
    nome: "CyberPunk 2077",
    preço: 270.00
},



]
database.insert(dados).into("games").then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})
*/

database.select().table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})