import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface SeminarPenulisAttributes {
  id: number;
  seminar_id: number;
  nama_penulis: string;
  nidn?: string;
  tipe_penulis: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface SeminarPenulisInput extends Optional<SeminarPenulisAttributes, "id"> {}
export interface SeminarPenulisOutput extends Required<SeminarPenulisAttributes> {}

class SeminarPenulisModel extends Model<SeminarPenulisAttributes, SeminarPenulisInput> implements SeminarPenulisAttributes {
  public id!: number;
  public seminar_id!: number;
  public nama_penulis!: string;
  public nidn!: string;
  public tipe_penulis!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

SeminarPenulisModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    seminar_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    nama_penulis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nidn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tipe_penulis: {
      type: DataTypes.STRING,
      defaultValue: 'Anggota',
    },
  },
  {
    sequelize: db,
    tableName: "t_seminar_penulis",
    underscored: true,
  }
);

export default SeminarPenulisModel;