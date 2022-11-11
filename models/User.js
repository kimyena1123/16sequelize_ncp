// CREATE TABLE user(
//   id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
//   userid VARCHAR(20) NOT NULL,
//   name VARCHAR(10) NOT NULL,
//   pw VARCHAR(20) NOT NULL
// );

const { STRING } = require("sequelize");

const User = function(Sequelize, DataTypes){
  const model = Sequelize.define(
    'user',
    {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid:{
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name:{
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw:{
        type: DataTypes.STRING(20),
        allowNull: false,
      }
    },
    {
      tableName: 'user',
      freezeTableName: true,
      timestamps: false,
    }
  );

  return model;
};

module.exports = User;