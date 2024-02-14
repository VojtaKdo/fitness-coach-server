module.exports = (sequelize: any, Sequelaze: any) => {
    return sequelize.define(
        "useraccountroles", //Název tabulky
        {   //Z čeho se tabulka skládá
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