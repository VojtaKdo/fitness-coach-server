module.exports = (sequelize: any, Sequelaze: any) => {
    return sequelize.define(
        "user", //Název tabulky
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
            surname: {
                type: Sequelaze.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelaze.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelaze.STRING,
                allowNull: false,
            },
            dateOfBirth: {
                type: Sequelaze.DATE,
                allowNull: true,
            },
            weight: {
                type: Sequelaze.FLOAT,
                allowNull: true,
            },
            height: {
                type: Sequelaze.FLOAT,
                allowNull: true,
            },
            bannerImagePath: {
                type: Sequelaze.STRING,
                allowNull: true,
            },
            profileImagePath: {
                type: Sequelaze.STRING,
                allowNull: true,
            },
            stats: {
                type: Sequelaze.STRING,
                allowNull: true,
            },
            verified: {
                type: Sequelaze.BOOLEAN,
                defaultValue: 0,
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