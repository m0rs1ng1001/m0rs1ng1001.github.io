import { Model, DataTypes } from "sequelize";


import {DEPARTMENT_TABLE} from './department.models.js';


const MUNICIPALITY_TABLE = 'municipalities';

const MunicipalitySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departmentId: {
    field: 'department_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: DEPARTMENT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }, 
}


class Municipality extends Model {

  static associate(models) {
    this.belongsTo(models.Department, { foreignKey: 'departmentId', as: 'Department' });
    // this.hasMany(models.laundry, {
    //   as: "municipalityId",
    //   foreignKey: "laundryId",
    // });
  }  

  static config(sequelize) {
    return {
      sequelize,
      tableName: MUNICIPALITY_TABLE,
      modelName: 'Municipality',
      timestamps: false
    }
  }
}

export { Municipality, MunicipalitySchema, MUNICIPALITY_TABLE };
