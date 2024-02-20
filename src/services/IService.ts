import SearchParameter from "../model/SearchParameter";
import resultreturn from "../model/Resultreturn";
export default interface IService<M, T> {
  getalls(url:string, model: SearchParameter): Promise<resultreturn<M>>;
  getallsselect(url:string): Promise<Array<M>>;
  getbyid(url:string,id: T): Promise<M>;

  add(url:string,data: M): Promise<Boolean>;
  edit(url:string,data: M): Promise<Boolean>;
  delete(url:string,data: T): Promise<Boolean>;

  uploadfile(url:string,file:File):Promise<boolean>;
  editfile(url:string,file:File,filename:string):Promise<boolean>;
  deletefile(url:string,filename:string):Promise<boolean>;
}
