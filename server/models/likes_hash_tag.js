const Sequelize = require("sequelize");

module.exports = class likes_hash_tag extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        counts: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        name: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "likes_hash_tag",
        tableName: "likes_hash_tags",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.likes_hash_tag.belongsToMany(db.post, {
      through: "posts_likes_hash_tags",
      foreignKey: "hash_tag_id",
      sourceKey: "id",
    });
  }
};
