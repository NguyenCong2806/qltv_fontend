import tokens from "../model/tokens";
import { cst } from "../utils/common/constcommon";

export const sessionStorageapp = {
  setsessionStorage(tokens: tokens) {
    sessionStorage.setItem(cst.settokes, tokens.token);
    sessionStorage.setItem(cst.setuserid, tokens.id.toString());
    sessionStorage.setItem(cst.setusername, tokens.userName);
  },
  gettokes(): string {
    return sessionStorage.getItem(cst.settokes) as string;
  },
  getusername(): string {
    return sessionStorage.getItem(cst.setusername) as string;
  },
  getuserid(): string {
    return sessionStorage.getItem(cst.setuserid) as string;
  },
  clear(){
    sessionStorage.clear();
  }
};
