module.exports = (sequelize: any, Sequelaze: any) => {
    return sequelize.define(
        "meals_food", //Název tabulky
        {   //Z čeho se tabulka skládá
            id: {
                type: Sequelaze.UUID,   //Universal Unique Identifier
                defaultValue: Sequelaze.UUIDV4,
                primaryKey: true,
                allowNull: false,
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
}