module.exports = (sequelize: any, Sequilaze: any) => {
    return sequelize.define(
        "useraccountroles", //Název tabulky
        {   //Z čeho se tabulka skládá
            userid: {
                type: Sequilaze.UUID,   //Universal Unique Identifier
                allowNull: false,
            },

            accountroleid: {
                type: Sequilaze.UUID,   //Universal Unique Identifier
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