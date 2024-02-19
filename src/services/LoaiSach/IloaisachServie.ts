import resultreturn from "../../model/Resultreturn";
import SearchParameter from "../../model/SearchParameter";
import loaisachvm from "../../model/loaisach/loaisachvm";

export default interface IloaisachServie {
  getallloaisachs(model: SearchParameter): Promise<resultreturn<loaisachvm>>;
  getloaisachselect(): Promise<Array<loaisachvm>>;
  getloaisachbyid(id: number):Promise<loaisachvm>;
  addloaisach(data: loaisachvm):Promise<boolean>;
  editloaisach(data: loaisachvm):Promise<boolean>;
  delloaisach(id: number):Promise<boolean>;
}
