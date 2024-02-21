import resultreturn from "../../model/Resultreturn";
import searchParameters from "../../model/SearchParameter";
import phieumuonvm from "../../model/phieumuon/phieumuonvm";
import { cst } from "../../utils/common/constcommon";
import Service from "../Service";
import IPhieuMuonService from "./IPhieuMuonService";

class phieuMuonService
  extends Service<phieumuonvm, string>
  implements IPhieuMuonService
{
  async delphieumuon(id: string): Promise<boolean> {
    const res = await super.delete(cst.delPhieuMuon, id);
    return res;
  }
  async getallphieumuons(
    model: searchParameters
  ): Promise<resultreturn<phieumuonvm>> {
    const res = await super.getalls(cst.getPhieuMuon, model);
    return res;
  }
  async addphieumuon(data: phieumuonvm): Promise<boolean> {
    const res = await super.add(cst.addPhieuMuon, data);
    return res;
  }
}
export default new phieuMuonService();
