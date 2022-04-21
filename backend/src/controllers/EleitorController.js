const Eleitor = require('../models/Eleitor')

module.exports = class UserController {
    static async getAllUsers(req, res) {
        const allUsers = await User.find()

        if (allUsers) {
            res.status(200).json(allUsers)
            return
        } else {
            res.status(200).json({ message: 'Nenhum usuário cadastrado' })
            return
        }
    }
}