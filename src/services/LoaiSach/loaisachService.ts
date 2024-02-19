import resultreturn from "../../model/Resultreturn";
import searchParameters from "../../model/SearchParameter";
import loaisachvm from "../../model/loaisach/loaisachvm";
import { cst } from "../../utils/common/constcommon";
import Service from "../Service";
import IloaisachServie from "./IloaisachServie";

class loaiSachService
  extends Service<loaisachvm, number>
  implements IloaisachServie
{
  async getloaisachselect(): Promise<loaisachvm[]> {
    const res = await super.getallsselect(cst.getloaisachselect);
    return res;
  }
  async getloaisachbyid(id: number): Promise<loaisachvm> {
    const res = await super.getbyid(cst.getloaisachbyid, id);
    return res;
  }
  async addloaisach(data: loaisachvm): Promise<boolean> {
    const res = await super.add(cst.addloaisach, data);
    return res;
  }
  async editloaisach(data: loaisachvm): Promise<boolean> {
    const res = await super.edit(cst.editloaisach, data);
    return res;
  }
  async delloaisach(id: number): Promise<boolean> {
    const res = await super.delete(cst.delloaisach, id);
    return res;
  }
  async getallloaisachs(
    model: searchParameters
  ): Promise<resultreturn<loaisachvm>> {
    const res = await super.getalls(cst.getallloaisach, model);
    return res;
  }
}
export default new loaiSachService();
