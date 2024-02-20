import resultreturn from "../../model/Resultreturn";
import searchParameters from "../../model/SearchParameter";
import docgiavm from "../../model/docgia/docgiavm";
import { cst } from "../../utils/common/constcommon";
import Service from "../Service";
import IdocgiaService from "./IdocgiaService";


class docgiaService
  extends Service<docgiavm, string>
  implements IdocgiaService
{
  async getdocgiasearch(name: string): Promise<docgiavm[]> {
    const res = await super.getallsearch(cst.getdocgiasearch, name);
    return res;
  }
  async getdocgiabyid(id: string): Promise<docgiavm> {
    const res = await super.getbyid(cst.getdocgiabyid, id);
    return res;
  }
  async adddocgia(data: docgiavm): Promise<boolean> {
    const res = await super.add(cst.adddocgia, data);
    return res;
  }
  async editdocgia(data: docgiavm): Promise<boolean> {
    const res = await super.edit(cst.editdocgia, data);
    return res;
  }
  async deldocgia(id: string): Promise<boolean> {
    const res = await super.delete(cst.deldocgia, id);
    return res;
  }
  async getalldocgias(
    model: searchParameters
  ): Promise<resultreturn<docgiavm>> {
    const res = await super.getalls(cst.getdocgia, model);
    return res;
  }
}
export default new docgiaService();
