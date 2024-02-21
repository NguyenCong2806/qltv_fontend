import chitietphieumuonvm from "../../model/chitietphieumuon/chitietphieumuonvm";
import { cst } from "../../utils/common/constcommon";
import Service from "../Service";
import IChiTietPhieuMuonService from "./IChiTietPhieuMuonService";

class chiTietPhieuMuonService
  extends Service<chitietphieumuonvm, string>
  implements IChiTietPhieuMuonService
{
  async delonechitietphieumuon(id: string): Promise<boolean> {
    const res = await super.delete(cst.delechitietphieumuon, id);
    return res;
  }
  async getallchitietpgieumuon(id: string): Promise<chitietphieumuonvm[]> {
    const res = await super.getallsearch(cst.getbyallsachphieumuon, id);
    return res;
  }
  async delchitietphieumuon(id: string): Promise<boolean> {
    const res = await super.delete(cst.delchitietphieumuon, id);
    return res;
  }
  async addchitietphieumuon(data: chitietphieumuonvm[]): Promise<boolean> {
    const res = await super.addList(cst.addchitietphieumuon, data);
    return res;
  }
}
export default new chiTietPhieuMuonService();
