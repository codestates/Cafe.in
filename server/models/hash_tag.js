const Sequelize = require("sequelize");

module.exports = class hash_tag extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        type: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        counts: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        category: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "hash_tag",
        tableName: "hash_tags",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.hash_tag.belongsToMany(db.post, {
      through: "posts_hash_tags",
      foreignKey: "hash_tag_id",
      sourceKey: "id",
    });
  }
};
