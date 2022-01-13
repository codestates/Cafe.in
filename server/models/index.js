const Sequelize = require("sequelize");
const user = require("./user");
const post = require("./post");
const hash_tag = require("./hash_tag");
const click_hashtag = require("./click_hashtag");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = user;
db.post = post;
db.hash_tag = hash_tag;
db.click_hashtag = click_hashtag;

user.init(sequelize);
post.init(sequelize);
hash_tag.init(sequelize);
click_hashtag.init(sequelize);

user.associate(db);
post.associate(db);
hash_tag.associate(db);

module.exports = db;
