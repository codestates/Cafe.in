const Sequelize = require("sequelize");

module.exports = class user extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        type: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        user_email: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
        profile_img: {
          type: Sequelize.STRING(255),
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
