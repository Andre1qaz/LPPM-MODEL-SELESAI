import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface ProfilDosenAttributes {
  id: number;
  user_id: number;
  nidn: string;
  prodi: string;
  sinta_id?: string;
  scopus_id?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface ProfilDosenInput extends Optional<ProfilDosenAttributes, "id"> {}
export interface ProfilDosenOutput extends Required<ProfilDosenAttributes> {}

class ProfilDosenModel extends Model<ProfilDosenAttributes, ProfilDosenInput> implements ProfilDosenAttributes {
  public id!: number;
  public user_id!: number;
  public nidn!: string;
  public prodi!: string;
  public sinta_id!: string;
  public scopus_id!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

ProfilDosenModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    nidn: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    prodi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sinta_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    scopus_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: "m_profil_dosen",
    underscored: true,
  }
);

export default ProfilDosenModel;