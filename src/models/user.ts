module.exports = (sequelize: any, Sequilaze: any) => {
    return sequelize.define(
        "user", //Název tabulky
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
            surname: {
                type: Sequilaze.STRING,
                allowNull: false,
            },
            email: {
                type: Sequilaze.STRING,
                allowNull: false,
            },
            username: {
                type: Sequilaze.STRING,
                allowNull: false,
            },
            password: {
                type: Sequilaze.STRING,
                allowNull: false,
            },
            dateOfBirth: {
                type: Sequilaze.DATE,
                allowNull: true,
            },
            weight: {
                type: Sequilaze.INTEGER,
                allowNull: false,
            },
            height: {
                type: Sequilaze.INTEGER,
                allowNull: false,
            },
            bannerImagePath: {
                type: Sequilaze.STRING,
                allowNull: true,
            },
            profileImagePath: {
                type: Sequilaze.STRING,
                allowNull: true,
            },
            verified: {
                type: Sequilaze.BOOLEAN,
                defaultValue: 0,
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