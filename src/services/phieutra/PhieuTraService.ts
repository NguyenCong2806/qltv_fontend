import resultreturn from "../../model/Resultreturn";
import searchParameters from "../../model/SearchParameter";
import PhieuTravm from "../../model/phieutra/phieutravm";
import { cst } from "../../utils/common/constcommon";
import Service from "../Service";
import IPhieuTraService from "./IPhieuTraService";

class PhieuTraService
  extends Service<PhieuTravm, string>
  implements IPhieuTraService
{
  async delPhieuTra(id: string): Promise<boolean> {
    const res = await super.delete(cst.delPhieuTra, id);
    return res;
  }
  async getallPhieuTras(
    model: searchParameters
  ): Promise<resultreturn<PhieuTravm>> {
    const res = await super.getalls(cst.getPhieuTra, model);
    return res;
  }
  async addPhieuTra(data: PhieuTravm): Promise<boolean> {
    const res = await super.add(cst.addPhieuTra, data);
    return res;
  }
}
export default new PhieuTraService();
