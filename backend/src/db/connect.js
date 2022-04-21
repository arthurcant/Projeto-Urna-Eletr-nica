const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb+srv://admin:adminUrnaEle@urnaeletronica.k9yl6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    console.log('Conect to Mongoose')
}

main().catch((err) => console.log(`Erro in mongodb: ${err}`))

module.exports = mongoose