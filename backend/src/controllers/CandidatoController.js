const Candidatos = require('../models/Candidato')

module.exports = class CandidatoController {
    static async getAllCandidatos(req, res) {
        const allCandidatos = await Candidatos.find()

        if (allCandidatos) {
            res.status(200).json(allCandidatos)
            return
        } else {
            res.status(404).json({ message: 'Nenhum eleitor cadastrado' })
            return
        }
    }

    static async newCandidato(req, res) {
        const { name, matricula, numberForVote, description } = req.body
        const inicialMat = '2022'

        if (!name || !matricula || !numberForVote || !description) {
            res.status(400).json({ message: 'Todos os campos são obrigatórios' })
            return
        }

        const newCandidato = new Candidatos({
            name,
            matricula: `${inicialMat}${matricula}`,
            numberForVote,
            description
        })

        const candidato = await newCandidato.save()

        if (newCandidato) {
            res.status(201).json(newCandidato)
            return
        } else {
            res.status(400).json({ message: 'Erro ao cadastrar candidato' })
            return
        }
    }

    static async giveVoteForCandidato(req, res) {
        const idCandidato = req.body.idCandidato
        const emailEleitor = req.body.emailEleitor

        const candidatoExists = await Candidatos.findOne({ _id: idCandidato })

        if (!emailEleitor) {
            res.status(404).json({ message: 'Entregue seu email' })
            return
        }

        if (!candidatoExists) {
            res.status(404).json({ message: 'Candidato não encontrado' })
            return
        }

        const candidatoVoted = candidatoExists

        candidatoVoted.votes.push(emailEleitor)

        try {

            await Candidatos.findOneAndUpdate(
                { _id: idCandidato },
                { $set: candidatoVoted },
                { new: true }
            )
            res.status(200).json({ message: 'Parabéns, você votou!'})
        } catch (error) {
            res.status(500).json({ message: 'Error ' + error })
        }

    }
}