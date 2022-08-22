const db = require('./../models/index')
const UserModel = db.users


exports.findAllUser = (req, res) => {
    UserModel.findAll({
    }).then(data => {
        res.send(data)
    })

}

exports.createUser = (req, res) => {
    const { age, firstName, lastName, weight, height } = req?.body
    if (!age || !firstName || !lastName) {
        res.send(JSON.stringify({ success: false }))
    }

    res.send(UserModel.create({ age, firstName, lastName, weight, height }))
}

exports.deleteUser = (req, res) => {
    const id = req?.params?.id
    if (!id) res.send(JSON.stringify({ success: false }))

    UserModel.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send(JSON.stringify({ success: true }))
        } else {
            res.send(JSON.stringify({ success: false }))
        }
    })
}