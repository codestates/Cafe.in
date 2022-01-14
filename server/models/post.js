const Sequelize = require("sequelize");

module.exports = class post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        large_img: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        small_img: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        tel: {
          type: Sequelize.STRING(15),
          allowNull: false,
        },
        adress: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        distance: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        location: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        lat: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        long: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "post",
        tableName: "posts",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.post.belongsToMany(db.hash_tag, {
      through: "posts_hash_tags",
      foreignKey: "post_id",
      sourceKey: "id",
    });
  }
};
