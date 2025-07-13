const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelizeConfig'); // Importa la instancia de Sequelize

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'usuarios',  // Nombre de la tabla en la base de datos
  timestamps: false,      // No agrega createdAt ni updatedAt automáticamente
});

module.exports = User;
