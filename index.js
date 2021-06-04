var database = require("./database")
// var dados = [
//  //INSERT
// {
//     nome: "Call of Duty WarZone",
//     preco: 60.00
// },

// {
//     nome: "League Of Legends",
//     preco: 30.00
// },

// {
//     nome: "CyberPunk 2077",
//     preco: 270.00
// },
// ]
// database.insert(dados).into("games").then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })

//SELECT
// database.select(["id","preco"]).table("games").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

// NESTED QUERIES
database.insert({nome:"Mists of noyah", preco:"25"}).into("games").then(data => {
    database.select(["id","preco"]).table("games").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}).catch(err => {
    console.log(err)
})