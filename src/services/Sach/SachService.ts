import resultreturn from "../../model/Resultreturn";
import searchParameters from "../../model/SearchParameter";
import sachvm from "../../model/sach/sachvm";
import { cst } from "../../utils/common/constcommon";
import Service from "../Service";
import Isachservice from "./ISachService";


class sachService extends Service<sachvm, string> implements Isachservice {
  async getsachsearch(name: string): Promise<sachvm[]> {
    const res = await super.getallsearch(cst.getsachsearch, name);
    return res;
  }
 
 async editsach(data: sachvm): Promise<boolean> {
    const res = await super.edit(cst.editsach, data);
    return res;
  }
  
  async delsach(id: string): Promise<boolean> {
    const res = await super.delete(cst.delsach, id);
    return res;
  }
  async getsachselect(): Promise<sachvm[]> {
    const res = await super.getallsselect(cst.getsach);
    return res;
  }
  async getsachbyid(id: string): Promise<sachvm> {
    const res = await super.getbyid(cst.getsachbyid, id);
    return res;
  }
  async addsach(data: sachvm): Promise<boolean> {
    try {
      const res = await super.add(cst.addsach, data);
      return res;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async getallsachs(model: searchParameters): Promise<resultreturn<sachvm>> {
    const res = await super.getalls(cst.getsach, model);
    return res;
  }
}
export default new sachService();
