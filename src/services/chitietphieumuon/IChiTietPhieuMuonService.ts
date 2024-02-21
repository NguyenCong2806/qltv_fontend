import chitietphieumuonvm from "../../model/chitietphieumuon/chitietphieumuonvm";

export default interface IChiTietPhieuMuonService {
  getallchitietpgieumuon(id:string): Promise<Array<chitietphieumuonvm>>;
  addchitietphieumuon(data: Array<chitietphieumuonvm>): Promise<boolean>;
  delchitietphieumuon(id: string):Promise<boolean>;
  delonechitietphieumuon(id: string):Promise<boolean>;
}
