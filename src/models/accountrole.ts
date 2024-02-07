module.exports = (sequelize: any, Sequilaze: any) => {
    const AccountRole = sequelize.define(
        "accountrole", //Název tabulky
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
    return AccountRole;
}