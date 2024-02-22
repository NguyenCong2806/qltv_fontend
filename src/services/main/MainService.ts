import resultreturn from "../../model/Resultreturn";
import searchParameters from "../../model/SearchParameter";
import mainvm from "../../model/main/mainvm";
import { cst } from "../../utils/common/constcommon";
import Service from "../Service";
import Imainservice from "./IMainService";

class mainService extends Service<mainvm, number> implements Imainservice {
  async getallmains(): Promise<mainvm> {
    const res = await super.getnumber(cst.main);
    return res;
  }
}
export default new mainService();
