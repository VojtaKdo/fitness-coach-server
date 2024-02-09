module.exports = (sequelize: any, Sequilaze: any) => {
    return sequelize.define(
        "food", //Název tabulky
        {   //Z čeho se tabulka skládá
            id: {
                type: Sequilaze.UUID,   //Universal Unique Identifier
                defaultValue: Sequilaze.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequilaze.STRING,
                allowNull: false,
            },
            calories: {
                type: Sequilaze.INTEGER,
                allowNull: false,
            },
            carbs: {
                type: Sequilaze.INTEGER,
                allowNull: false,
            },
            fats: {
                type: Sequilaze.INTEGER,
                allowNull: false,
            },
            fibers: {
                type: Sequilaze.INTEGER,
                allowNull: false,
            },
            sugar: {
                type: Sequilaze.INTEGER,
                allowNull: false,
            },
            salt: {
                type: Sequilaze.INTEGER,
                allowNull: false,
            },
            weight: {
                type: Sequilaze.INTEGER,
                allowNull: false,
            },
            pictureImagePath: {
                type: Sequilaze.INTEGER,
                allowNull: true,
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