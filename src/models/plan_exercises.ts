module.exports = (sequelize: any, Sequilaze: any) => {
    return sequelize.define(
        "plan_exercises", //Název tabulky
        {   //Z čeho se tabulka skládá
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