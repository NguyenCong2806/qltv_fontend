import SearchParameter from "../model/SearchParameter";
import resultreturn from "../model/Resultreturn";
export default interface IService<M, T> {
  getalls(url:string, model: SearchParameter): Promise<resultreturn<M>>;
  getbyid(url:string,id: T): Promise<M>;

  add(url:string,data: M): Promise<Boolean>;
  edit(url:string,data: M): Promise<Boolean>;
  delete(url:string,data: T): Promise<Boolean>;
}
