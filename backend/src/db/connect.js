const mongoose = require('mongoose')

async function main(){
    try {
        await mongoose.connect('mongodb+srv://admin:adminUrnaEle@urnaeletronica.k9yl6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        console.log('Conect to Mongoose')
    } catch(error){
        console.log('connection error')
    }
}

main().catch((err) => console.log(`Erro in mongodb: ${err}`))

module.exports = mongoose