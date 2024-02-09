module.exports = (sequelize: any, Sequilaze: any) => {
    return sequelize.define(
        "exercises", //Název tabulky
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
            videoPath: {
                type: Sequilaze.STRING,
                allowNull: false,
            },
            description: {
                type: Sequilaze.TEXT,
                allowNull: false,
            },
            smallDescription: {
                type: Sequilaze.STRING,
                allowNull: false,
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