import resultreturn from "../../model/Resultreturn";
import SearchParameter from "../../model/SearchParameter";
import uservm from "../../model/user/uservm";

export default interface IuserServie {
  getallusers(model: SearchParameter): Promise<resultreturn<uservm>>;
  getuserbyid(id: string):Promise<uservm>;
  adduser(data: uservm):Promise<boolean>;
  edituser(data: uservm):Promise<boolean>;
  deluser(id: string):Promise<boolean>;
}
