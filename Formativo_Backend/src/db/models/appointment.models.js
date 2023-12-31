import { Model, DataTypes,Sequelize } from "sequelize";

import { VEHICLE_TABLE } from "./vehicle.models.js";
import { SERVICE_TABLE} from './services.models.js'

const APPOINTMENT_TABLE = 'appointments';

const AppointmentSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE
  },
  time: {
    allowNull: false,
    type: DataTypes.TIME
  },
  state: {
    allowNull: false,
    type: DataTypes.STRING
  },
  observations: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  vehicleId: {
    field: 'vehicle_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: VEHICLE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  serviceId: {
    field: 'service_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: SERVICE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Appointment extends Model {

  static associate() {
    
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: APPOINTMENT_TABLE,
      modelName: 'Appointment',
      timestamps: false
    }
  }
}

export{ Appointment, AppointmentSchema, APPOINTMENT_TABLE };
