const Sequelize = require("sequelize");

module.exports = class dislikes_hash_tag extends Sequelize.Model {
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
        modelName: "dislikes_hash_tag",
        tableName: "dislikes_hash_tags",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.dislikes_hash_tag.belongsToMany(db.post, {
      through: "posts_dislikes_hash_tags",
      foreignKey: "hash_tag_id",
      sourceKey: "id",
    });
  }
};
