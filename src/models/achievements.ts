module.exports = (sequelize: any, Sequelaze: any) => {
    return sequelize.define(
        "achievements", //Název tabulky
        {   //Z čeho se tabulka skládá
            id: {
                type: Sequelaze.UUID,   //Universal Unique Identifier
                defaultValue: Sequelaze.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequelaze.STRING,
                allowNull: false,
            },
            progress: {
                type: Sequelaze.STRING,
                allowNull: false,
            },
            isCompleted: {
                type: Sequelaze.BOOLEAN,
                defaultValue: 0,
            },
            badgeImagePath: {
                type: Sequelaze.STRING,
                allowNull: true,  
            },
            createdAt: {
                type: Sequelaze.DATE,
            },
            updatedAt: {
                type: Sequelaze.DATE,
            },
        },
        {
            timestamps: true,
        }
    )
}