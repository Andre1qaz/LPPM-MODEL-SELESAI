import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface ArtefakAttributes {
  id: number;
  pengajuan_dana_id: number;
  jenis_dokumen: string;
  file_path: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface ArtefakInput extends Optional<ArtefakAttributes, "id"> {}
export interface ArtefakOutput extends Required<ArtefakAttributes> {}

class ArtefakPengajuanModel extends Model<ArtefakAttributes, ArtefakInput> implements ArtefakAttributes {
  public id!: number;
  public pengajuan_dana_id!: number;
  public jenis_dokumen!: string;
  public file_path!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

ArtefakPengajuanModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    pengajuan_dana_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    jenis_dokumen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "t_artefak_pengajuan",
    underscored: true,
  }
);

export default ArtefakPengajuanModel;