import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface SeminarAttributes {
  id: number;
  dosen_profil_id: number;
  judul_makalah: string;
  nama_forum: string;
  institusi_penyelenggara: string;
  tanggal_mulai: Date;
  tanggal_selesai: Date;
  tempat_pelaksanaan: string;
  biaya_registrasi: number;
  website_penyelenggara?: string;
  mesin_pengindex?: string;
  kewajiban_penelitian?: object;
  file_paper_draft?: string;
  status_progress: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface SeminarInput extends Optional<SeminarAttributes, "id"> {}
export interface SeminarOutput extends Required<SeminarAttributes> {}

class SeminarModel extends Model<SeminarAttributes, SeminarInput> implements SeminarAttributes {
  public id!: number;
  public dosen_profil_id!: number;
  public judul_makalah!: string;
  public nama_forum!: string;
  public institusi_penyelenggara!: string;
  public tanggal_mulai!: Date;
  public tanggal_selesai!: Date;
  public tempat_pelaksanaan!: string;
  public biaya_registrasi!: number;
  
  public website_penyelenggara!: string;
  public mesin_pengindex!: string;
  public kewajiban_penelitian!: object;

  public file_paper_draft!: string;
  public status_progress!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

SeminarModel.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    dosen_profil_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    judul_makalah: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nama_forum: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institusi_penyelenggara: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_mulai: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    tanggal_selesai: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    tempat_pelaksanaan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    biaya_registrasi: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    // --- IMPLEMENTASI KOLOM BARU ---
    website_penyelenggara: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mesin_pengindex: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kewajiban_penelitian: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    // -------------------------------
    file_paper_draft: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status_progress: {
      type: DataTypes.STRING,
      defaultValue: 'draft',
    },
  },
  {
    sequelize: db,
    tableName: "t_seminar",
    underscored: true,
  }
);

export default SeminarModel;