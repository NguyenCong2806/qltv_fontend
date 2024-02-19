import resultreturn from "../../model/Resultreturn";
import SearchParameter from "../../model/SearchParameter";
import sachvm from "../../model/sach/sachvm";

export default interface Isachservice {
  getallsachs(model: SearchParameter): Promise<resultreturn<sachvm>>;
  getsachselect(): Promise<Array<sachvm>>;
  getsachbyid(id: string):Promise<sachvm>;
  addsach(data: sachvm):Promise<boolean>;
  editsach(data: sachvm):Promise<boolean>;
  delsach(id: string):Promise<boolean>;
}
