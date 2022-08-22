module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user", {
        login: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        dateBirth: {
            type: Sequelize.DATE
        },
        weight: {
            type: Sequelize.INTEGER
        },
        height: {
            type: Sequelize.INTEGER
        },
        phone: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                is: /^[0-9]{11}$/i
            }
        },
        cityId: {
            type: Sequelize.INTEGER
        },
        adress: {
            type: Sequelize.STRING
        },
        sex: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
    })


}