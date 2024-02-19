import loaisachvm from "../loaisach/loaisachvm";
import nhaxuatbanvm from "../nhaxuatban/nhaxuatbanvm";

export default class sachvm {
  id: string;
  name: string;
  author: string;
  anhBia: string;
  loaiSachId: number;
  loaiSach: loaisachvm;
  nhaXuanBanId: number;
  nhaXuatBan:nhaxuatbanvm;
  namXB?: number = 1900;
  soLuong?: number = 1;
  giaSach?: number = 0;
}
