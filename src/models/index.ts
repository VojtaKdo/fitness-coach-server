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
  },
});

let db = {
  Sequelize,
  sequelize,
  users: require("./user")(sequelize, Sequelize), //tabulka
  accountRole: require("./accountrole")(sequelize, Sequelize), //tabulka
  userAccountRoles: require("./useraccountroles")(sequelize, Sequelize), //tabulka
  friendList: require("./friendlist")(sequelize, Sequelize), //tabulka
  achievements: require("./achievements")(sequelize, Sequelize), //tabulka
  userAchievements: require("./user_achievements")(sequelize, Sequelize), //tabulka
  meals: require("./meals")(sequelize, Sequelize), //tabulka
  food: require("./food")(sequelize, Sequelize), //tabulka
  mealsFood: require("./meals_food")(sequelize, Sequelize), //tabulka
  plans: require("./plans")(sequelize, Sequelize), //tabulka
  exercises: require("./exercises")(sequelize, Sequelize), //tabulka
  exerciseCategories: require("./exercise_categories")(sequelize, Sequelize), //tabulka
  exCatRec: require("./exercise_cat_records")(sequelize, Sequelize), //tabulka
  planExercises: require("./plan_exercises")(sequelize, Sequelize), //tabulka
  timeTable: require("./timetable")(sequelize, Sequelize), //tabulka
};

db.users.belongsToMany(db.accountRole, {
  through: db.userAccountRoles,
  as: "userRole",
});

db.accountRole.belongsToMany(db.users, {
  through: db.userAccountRoles,
  as: "user",
});

db.users.belongsToMany(db.users, {
  through: db.friendList,
  as: "friend",
});

db.users.belongsToMany(db.achievements, {
  through: db.userAchievements,
  as: "achievement",
});

db.meals.belongsToMany(db.food, {
  through: db.mealsFood,
  as: "mealsFood"
})

db.plans.belongsToMany(db.exercises, {
  through: db.planExercises,
  as: "exercise"
})

db.exerciseCategories.belongsToMany(db.exercises, {
  through: db.exCatRec,
  as: "category"
})

db.timeTable.belongsTo(db.users, {
  foreignKey: "userid",
  onDelete: "cascade",
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
