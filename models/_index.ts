import HakAksesModel from "./HakAksesModel";
import TodoModel from "./TodoModel";
import ProfilDosenModel from "./ProfilDosenModel";
import SeminarModel from "./SeminarModel";
import SeminarPenulisModel from "./SeminarPenulisModel";
import SeminarReviewModel from "./SeminarReviewModel";
import RiwayatRevisiModel from "./RiwayatRevisiModel";
import PengajuanDanaModel from "./PengajuanDanaModel";
import ArtefakPengajuanModel from "./ArtefakPengajuanModel";
import PembayaranModel from "./PembayaranModel";
import SuratTugasModel from "./SuratTugasModel";
import NotifikasiModel from "./NotifikasiModel";

// ================== DEFINISI RELASI (ASSOCIATIONS) ==================

// 1. Profil Dosen -> Seminar (One to Many)
ProfilDosenModel.hasMany(SeminarModel, { foreignKey: 'dosen_profil_id', as: 'seminars' });
SeminarModel.belongsTo(ProfilDosenModel, { foreignKey: 'dosen_profil_id', as: 'dosen' });

// 2. Seminar -> Penulis (One to Many)
SeminarModel.hasMany(SeminarPenulisModel, { foreignKey: 'seminar_id', as: 'penulis' });
SeminarPenulisModel.belongsTo(SeminarModel, { foreignKey: 'seminar_id', as: 'seminar' });

// 3. Seminar -> Review (One to Many Reviews)
SeminarModel.hasMany(SeminarReviewModel, { foreignKey: 'seminar_id', as: 'reviews' });
SeminarReviewModel.belongsTo(SeminarModel, { foreignKey: 'seminar_id', as: 'seminar' });

// 4. Profil Dosen (sebagai Reviewer) -> Review
ProfilDosenModel.hasMany(SeminarReviewModel, { foreignKey: 'reviewer_id', as: 'reviews_assigned' });
SeminarReviewModel.belongsTo(ProfilDosenModel, { foreignKey: 'reviewer_id', as: 'reviewer' });

// 5. Review -> Revisi (One to Many History)
SeminarReviewModel.hasMany(RiwayatRevisiModel, { foreignKey: 'seminar_review_id', as: 'history_revisi' });
RiwayatRevisiModel.belongsTo(SeminarReviewModel, { foreignKey: 'seminar_review_id', as: 'review' });

// 6. Seminar -> Pengajuan Dana (One to One)
SeminarModel.hasOne(PengajuanDanaModel, { foreignKey: 'seminar_id', as: 'pengajuan_dana' });
PengajuanDanaModel.belongsTo(SeminarModel, { foreignKey: 'seminar_id', as: 'seminar' });

// 7. Pengajuan Dana -> Artefak (One to Many)
PengajuanDanaModel.hasMany(ArtefakPengajuanModel, { foreignKey: 'pengajuan_dana_id', as: 'artefak' });
ArtefakPengajuanModel.belongsTo(PengajuanDanaModel, { foreignKey: 'pengajuan_dana_id', as: 'pengajuan_dana' });

// 8. Pengajuan Dana -> Pembayaran (One to One)
PengajuanDanaModel.hasOne(PembayaranModel, { foreignKey: 'pengajuan_dana_id', as: 'pembayaran' });
PembayaranModel.belongsTo(PengajuanDanaModel, { foreignKey: 'pengajuan_dana_id', as: 'pengajuan_dana' });

// 9. Seminar -> Surat Tugas (One to One - Optional)
SeminarModel.hasOne(SuratTugasModel, { foreignKey: 'seminar_id', as: 'surat_tugas' });
SuratTugasModel.belongsTo(SeminarModel, { foreignKey: 'seminar_id', as: 'seminar' });


const syncDb = async () => {
    try {
        await HakAksesModel.sync({ alter: true });
        await TodoModel.sync({ alter: true });
        await ProfilDosenModel.sync({ alter: true });
        await SeminarModel.sync({ alter: true });
        await SeminarPenulisModel.sync({ alter: true });
        await SeminarReviewModel.sync({ alter: true });
        await RiwayatRevisiModel.sync({ alter: true });
        await PengajuanDanaModel.sync({ alter: true });
        await ArtefakPengajuanModel.sync({ alter: true });
        await PembayaranModel.sync({ alter: true });
        await SuratTugasModel.sync({ alter: true });
        await NotifikasiModel.sync({ alter: true });

        console.log("All Database models synced successfully!");
    } catch (error) {
        console.error("Error syncing database:", error);
    }
};

export { 
    HakAksesModel, 
    TodoModel, 
    ProfilDosenModel,
    SeminarModel,
    SeminarPenulisModel,
    SeminarReviewModel,
    RiwayatRevisiModel,
    PengajuanDanaModel,
    ArtefakPengajuanModel,
    PembayaranModel,
    SuratTugasModel,
    NotifikasiModel,
    syncDb 
};