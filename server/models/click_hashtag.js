const Sequelize = require("sequelize");

module.exports = class click_hashtag extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        post_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        like_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "click_hashtag",
        tableName: "click_hashtags",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
