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
// database.insert({nome:"Mists of noyah", preco:"25"}).into("games").then(data => {
//     database.select(["id","preco"]).table("games").then(data => {
//         console.log(data)
//     }).catch(err => {
//         console.log(err)
//     })
// }).catch(err => {
//     console.log(err)
// })


// WHERE
// database.select(["id","preco"])
//     .whereRaw("nome = 'Mists of noyah' OR preco > 50")
//      .table("games").then(data =>{
//         console.log(data)
//     }).catch(err =>{
//         console.log(err)
//     })

// Digamos que voce quer fazer uma query(uma linguagem sql) que o Knex não te dá essa flexibilidade
//então voce pode burlar desse maneira
// database.raw("SELECT * FROM games").then(data => {
//     console.log(data)
// }).catch(err =>{
//     console.log(err)
// })

// //DELETE
// database.where({id:3}).delete().table("games").then(data=>{
//     console.log(data)
// }).catch(err =>{
//     console.log(err)
// })


//UPDATE
// database.where({id: 4}).update({preco: 40}).table("games").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

//Order by

// database.select().table("games").orderBy("nome","desc").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// }) // decresente


// database.select().table("games").orderBy("nome","asc").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// }) // crescente


/* Associated inserts
database.insert({
    nome: "Riot",
    game_id: 2
}).table("estudios").then(data => {
console.log(data)
}).catch(err =>{
console.log(err)
}) */

//INNERJOIN 1 para 1

// database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// }) 

// WHERE COM JOIN

// database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id").where("games.id",2).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// 

// 1 para muitos
/*
database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id").then(data => {
    var estudiosGamesArray = data
    var game = {
        id: 0,
        nome: "",
        estudios:[]
    }

    game.id = data[0].id
    game.nome = data[0].nome

    data.forEach(estudio => {
        game.estudios.push({nome: estudio.estudio_nome})
    })
    console.log(game)

}).catch(err => {
    console.log(err)
})
*/ 

