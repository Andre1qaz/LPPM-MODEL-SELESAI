import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface PembayaranAttributes {
  id: number;
  pengajuan_dana_id: number;
  jumlah_dicairkan: number;
  file_bukti_transfer: string;
  tanggal_cair: Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface PembayaranInput extends Optional<PembayaranAttributes, "id"> {}
export interface PembayaranOutput extends Required<PembayaranAttributes> {}

class PembayaranModel extends Model<PembayaranAttributes, PembayaranInput> implements PembayaranAttributes {
  public id!: number;
  public pengajuan_dana_id!: number;
  public jumlah_dicairkan!: number;
  public file_bukti_transfer!: string;
  public tanggal_cair!: Date;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

PembayaranModel.init(
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
    jumlah_dicairkan: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    file_bukti_transfer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_cair: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "t_pembayaran",
    underscored: true,
  }
);

export default PembayaranModel;