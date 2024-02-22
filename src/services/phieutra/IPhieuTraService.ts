import resultreturn from "../../model/Resultreturn";
import SearchParameter from "../../model/SearchParameter";
import PhieuTravm from "../../model/phieutra/phieutravm";

export default interface IPhieuTraService {
  getallPhieuTras(model: SearchParameter): Promise<resultreturn<PhieuTravm>>;
  addPhieuTra(data: PhieuTravm): Promise<boolean>;
  delPhieuTra(id: string):Promise<boolean>;
}
