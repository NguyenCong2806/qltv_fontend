import resultreturn from "../../model/Resultreturn";
import searchParameters from "../../model/SearchParameter";
import uservm from "../../model/user/uservm";
import { cst } from "../../utils/common/constcommon";
import Service from "../Service";
import IuserService from "./IUserService";


class userService
  extends Service<uservm, string>
  implements IuserService
{
  
  async getuserbyid(id: string): Promise<uservm> {
    const res = await super.getbyid(cst.getuserbyid, id);
    return res;
  }
  async adduser(data: uservm): Promise<boolean> {
    const res = await super.add(cst.adduser, data);
    return res;
  }
  async edituser(data: uservm): Promise<boolean> {
    const res = await super.edit(cst.edituser, data);
    return res;
  }
  async deluser(id: string): Promise<boolean> {
    const res = await super.delete(cst.deluser, id);
    return res;
  }
  async getallusers(
    model: searchParameters
  ): Promise<resultreturn<uservm>> {
    const res = await super.getalls(cst.getalluser, model);
    return res;
  }
}
export default new userService();
