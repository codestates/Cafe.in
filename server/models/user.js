const Sequelize = require("sequelize");

module.exports = class user extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_email: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        profile_img: {
          type: Sequelize.BLOB,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "user",
        tableName: "users",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
