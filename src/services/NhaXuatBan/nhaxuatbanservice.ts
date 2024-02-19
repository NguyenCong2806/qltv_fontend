import resultreturn from "../../model/Resultreturn";
import searchParameters from "../../model/SearchParameter";
import nhaxuatbanvm from "../../model/nhaxuatban/nhaxuatbanvm";
import { cst } from "../../utils/common/constcommon";
import Service from "../Service";
import Inhaxuatbanservice from "./INhaXuatBanService";


class nhaxuatbanService
  extends Service<nhaxuatbanvm, number>
  implements Inhaxuatbanservice
{
  async getnhaxuatbanbyid(id: number): Promise<nhaxuatbanvm> {
    const res = await super.getbyid(cst.getnhaxuatbanbyid, id);
    return res;
  }
  async addnhaxuatban(data: nhaxuatbanvm): Promise<boolean> {
    const res = await super.add(cst.addnhaxuatban, data);
    return res;
  }
  async editnhaxuatban(data: nhaxuatbanvm): Promise<boolean> {
    const res = await super.edit(cst.editnhaxuatban, data);
    return res;
  }
  async delnhaxuatban(id: number): Promise<boolean> {
    const res = await super.delete(cst.delnhaxuatban, id);
    return res;
  }
  async getallnhaxuatbans(
    model: searchParameters
  ): Promise<resultreturn<nhaxuatbanvm>> {
    const res = await super.getalls(cst.getallnhaxuatban, model);
    return res;
  }
}
export default new nhaxuatbanService();
