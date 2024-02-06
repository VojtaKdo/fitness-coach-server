module.exports = (sequelize: any, Sequilaze: any) => {
    return sequelize.define(
        "user_achievements", //Název tabulky
        {   //Z čeho se tabulka skládá
            achievement_id: {
                type: Sequilaze.INTEGER,
                allowNull: false,
            },
            user_id: {
                type: Sequilaze.INTEGER,
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