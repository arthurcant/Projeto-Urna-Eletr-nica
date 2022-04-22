const Eleitor = require('../models/Eleitor')

module.exports = class UserController {
    static async getAllUsers(req, res) {
        const allEleitors = await Eleitor.find()

        if (allEleitors) {
            res.status(200).json(allEleitors)
            return
        } else {
            res.status(404).json({ message: 'Nenhum eleitor cadastrado' })
            return
        }
    }

    static async newEleitor(req, res) {
        const { name, matricula, password, email } = req.body
        const inicialMat = '2022'

        if(!name || !matricula || !password || !email) {
            res.status(400).json({ message: 'Preencha todos os campos necessários!' })
            return
        }

        const newEleitor = new Eleitor({
            name,
            matricula: `${inicialMat}${matricula}`,
            password,
            email
        })

        const eleitor = await newEleitor.save()

        if (eleitor) {
            res.status(200).json({ message: 'Eleitor cadastrado com sucesso' })
            return
        } else {
            res.status(404).json({ message: 'Não foi possível cadastrar o eleitor' })
            return
        }
    }
}