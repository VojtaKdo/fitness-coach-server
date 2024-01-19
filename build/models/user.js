"use strict";
module.exports = (sequelize, Sequilaze) => {
    return sequelize.define("user", //Název tabulky
    {
        id: {
            type: Sequilaze.UUID, //Universal Unique Identifier
            defaultValue: Sequilaze.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        email: {
            type: Sequilaze.STRING,
            allowNull: false,
        },
        username: {
            type: Sequilaze.STRING,
            allowNull: false,
        },
        passwordHash: {
            type: Sequilaze.STRING,
            allowNull: false,
        },
        verified: {
            type: Sequilaze.BOOLEAN,
            defaultValue: 0,
        },
        createdAt: {
            type: Sequilaze.DATE,
        },
        updateAt: {
            type: Sequilaze.DATE,
        },
    }, {
        timestamps: true,
    });
};
