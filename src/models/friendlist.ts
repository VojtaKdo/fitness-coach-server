module.exports = (sequelize: any, Sequilaze: any) => {
    return sequelize.define(
        "friendlist", //Název tabulky
        {   //Z čeho se tabulka skládá
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