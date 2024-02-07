module.exports = (sequelize: any, Sequilaze: any) => {
    return sequelize.define(
        "achievements", //Název tabulky
        {   //Z čeho se tabulka skládá
            id: {
                type: Sequilaze.UUID,   //Universal Unique Identifier
                defaultValue: Sequilaze.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequilaze.STRING,
                allowNull: false,
            },
            progress: {
                type: Sequilaze.STRING,
                allowNull: false,
            },
            isCompleted: {
                type: Sequilaze.BOOLEAN,
                defaultValue: 0,
            },
            badgeImagePath: {
                type: Sequilaze.STRING,
                allowNull: true,  
            },
            createdAt: {
                type: Sequilaze.DATE,
            },
            updatedAt: {
                type: Sequilaze.DATE,
            },
        },
        {
            timestamps: true,
        }
    )
}