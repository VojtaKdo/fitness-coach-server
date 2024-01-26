module.exports = (sequelize: any, Sequilaze: any) => {
    return sequelize.define(
        "accountrole", //Název tabulky
        {   //Z čeho se tabulka skládá
            id: {
                type: Sequilaze.UUID,   //Universal Unique Identifier
                defaultValue: Sequilaze.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            achievement_id: {
                type: Sequilaze.INT,
                allowNull: false,
            },
            user_id: {
                type: Sequilaze.INT,
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