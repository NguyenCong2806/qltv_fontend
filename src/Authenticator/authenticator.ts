import axios from "axios";
import userlogin from "../model/user/userlogin";
import tokens from "../model/tokens";
import { cst } from "../utils/common/constcommon";

var api_url: string = import.meta.env.VITE_API_URL;

class authenticator {
  async login(data: userlogin): Promise<tokens> {
    try {
      const res = await axios.post<tokens>(api_url + cst.login, data);
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export default new authenticator();
