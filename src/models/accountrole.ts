module.exports = (sequelize: any, Sequelaze: any) => {
    const AccountRole = sequelize.define(
        "accountrole", //Název tabulky
        {   //Z čeho se tabulka skládá
            name: {
                type: Sequelaze.STRING,
                allowNull: false,
                primaryKey: true,
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
    return AccountRole;
}