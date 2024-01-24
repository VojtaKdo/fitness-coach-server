import { dbConfig } from "../config/db";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    pool: {
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
    }
});

let db = {
    Sequelize,
    sequelize,
    users: require("./user")(sequelize, Sequelize),  //tabulka
    accountRoles: require("./accountrole")(sequelize, Sequelize),  //tabulka
    userAccountRuoles: require("./useraccountroles")(sequelize, Sequelize),  //tabulka
};

db.userAccountRuoles.belongsTo(db.users, {
    foreignKey: "userid",
    onDelete: "cascade",
})

db.userAccountRuoles.belongsTo(db.accountRoles, {
    foreignKey: "accountroleid",
    onDelete: "cascade",
})

export default db;