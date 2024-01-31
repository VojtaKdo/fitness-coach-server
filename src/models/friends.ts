module.exports = (sequelize: any, Sequilaze: any) => {
    return sequelize.define(
        "accountrole", //Název tabulky
        {   //Z čeho se tabulka skládá
            friendID: {
                type: Sequilaze.UUID,   //Universal Unique Identifier
                defaultValue: Sequilaze.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequilaze.STRING,
                allowNull: false,
                primaryKey: true,
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