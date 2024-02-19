import resultreturn from "../../model/Resultreturn";
import searchParameters from "../../model/SearchParameter";
import sachinfovm from "../../model/sach/sachinfovm";
import sachvm from "../../model/sach/sachvm";
import { cst } from "../../utils/common/constcommon";
import Service from "../Service";
import Isachservice from "./ISachService";


class sachService extends Service<sachvm, string> implements Isachservice {
 
  editsach(data: sachvm): Promise<boolean> {
    throw new Error("Method not implemented.");
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
