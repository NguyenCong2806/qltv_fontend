import { cst } from "../../utils/common/constcommon";
import Service from "../Service";
import IfileService from "./IfileService";

class fileService extends Service<File, string> implements IfileService {
  async uploadingfile(file: File): Promise<boolean> {
    const res = await super.uploadfile(cst.uploadfile, file);
    return res;
  }
}
export default new fileService();
