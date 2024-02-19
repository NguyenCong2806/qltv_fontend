import resultreturn from "../../model/Resultreturn";
import SearchParameter from "../../model/SearchParameter";
import nhaxuatbanvm from "../../model/nhaxuatban/nhaxuatbanvm";

export default interface Inhaxuatbanservice {
  getallnhaxuatbans(model: SearchParameter): Promise<resultreturn<nhaxuatbanvm>>;
  getnhaxuatbanbyid(id: number):Promise<nhaxuatbanvm>;
  addnhaxuatban(data: nhaxuatbanvm):Promise<boolean>;
  editnhaxuatban(data: nhaxuatbanvm):Promise<boolean>;
  delnhaxuatban(id: number):Promise<boolean>;
}
