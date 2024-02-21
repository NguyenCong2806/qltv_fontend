import resultreturn from "../../model/Resultreturn";
import SearchParameter from "../../model/SearchParameter";
import phieumuonvm from "../../model/phieumuon/phieumuonvm";

export default interface IPhieuMuonService {
  getallphieumuons(model: SearchParameter): Promise<resultreturn<phieumuonvm>>;
  addphieumuon(data: phieumuonvm): Promise<boolean>;
  delphieumuon(id: string):Promise<boolean>;
}
