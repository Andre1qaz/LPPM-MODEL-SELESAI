import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface RiwayatRevisiAttributes {
  id: number;
  seminar_review_id: number;
  versi_ke: number;
  catatan_perbaikan_dosen?: string;
  file_paper_revisi: string;
  status_persetujuan: 'menunggu' | 'disetujui' | 'perlu_revisi_ulang';
  created_at?: Date;
  updated_at?: Date;
}

export interface RiwayatRevisiInput extends Optional<RiwayatRevisiAttributes, "id"> {}
export interface RiwayatRevisiOutput extends Required<RiwayatRevisiAttributes> {}

class RiwayatRevisiModel extends Model<RiwayatRevisiAttributes, RiwayatRevisiInput> implements RiwayatRevisiAttributes {
  public id!: number;
  public seminar_review_id!: number;
  public versi_ke!: number;
  public catatan_perbaikan_dosen!: string;
  public file_paper_revisi!: string;
  public status_persetujuan!: 'menunggu' | 'disetujui' | 'perlu_revisi_ulang';
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

RiwayatRevisiModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    seminar_review_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    versi_ke: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    catatan_perbaikan_dosen: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    file_paper_revisi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status_persetujuan: {
      type: DataTypes.ENUM('menunggu', 'disetujui', 'perlu_revisi_ulang'),
      defaultValue: 'menunggu',
    },
  },
  {
    sequelize: db,
    tableName: "t_riwayat_revisi",
    underscored: true,
  }
);

export default RiwayatRevisiModel;