module.exports = (sequelize: any, Sequelaze: any) => {
    return sequelize.define(
        "food", //Název tabulky
        {   //Z čeho se tabulka skládá
            id: {
                type: Sequelaze.UUID,   //Universal Unique Identifier
                defaultValue: Sequelaze.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequelaze.STRING,
                allowNull: false,
            },
            calories: {
                type: Sequelaze.INTEGER,
                allowNull: false,
            },
            carbs: {
                type: Sequelaze.INTEGER,
                allowNull: false,
            },
            fats: {
                type: Sequelaze.INTEGER,
                allowNull: false,
            },
            fibers: {
                type: Sequelaze.INTEGER,
                allowNull: false,
            },
            sugar: {
                type: Sequelaze.INTEGER,
                allowNull: false,
            },
            salt: {
                type: Sequelaze.INTEGER,
                allowNull: false,
            },
            weight: {
                type: Sequelaze.INTEGER,
                allowNull: false,
            },
            pictureImagePath: {
                type: Sequelaze.INTEGER,
                allowNull: true,
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