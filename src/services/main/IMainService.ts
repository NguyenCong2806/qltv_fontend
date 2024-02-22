
import mainvm from "../../model/main/mainvm";

export default interface ImainService {
  getallmains(): Promise<mainvm>;
  
}
