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
    accountRole: require("./accountrole")(sequelize, Sequelize),  //tabulka
    userAccountRoles: require("./useraccountroles")(sequelize, Sequelize),  //tabulka
    friends: require("./friends")(sequelize, Sequelize),  //tabulka
    friendList: require("./friendlist")(sequelize, Sequelize),  //tabulka
    achievements: require("./achievements")(sequelize, Sequelize),  //tabulka
    achievementsList: require("./achievementsList")(sequelize, Sequelize),  //tabulka
    userAchievements: require("./user_achievements")(sequelize, Sequelize),  //tabulka
};

db.users.belongsToMany(db.accountRole, {
    through: db.userAccountRoles,
    as: "userRole"
})

db.accountRole.belongsToMany(db.users, {
    through: db.userAccountRoles,
    as: "user"
})

db.friends.belongsToMany(db.users, {
    through: db.friendList,
    as: "friend"
})

db.users.belongsToMany(db.achievements, {
    through: db.userAchievements,
    as: "achievement"
})



/*
db.userAccountRuoles.belongsTo(db.users, {
    foreignKey: "userid",
    onDelete: "cascade",
})

db.userAccountRuoles.belongsTo(db.accountRoles, {
    foreignKey: "accountroleid",
    onDelete: "cascade",
})
*/

export default db;