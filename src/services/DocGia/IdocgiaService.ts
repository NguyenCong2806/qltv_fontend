import resultreturn from "../../model/Resultreturn";
import SearchParameter from "../../model/SearchParameter";
import docgiavm from "../../model/docgia/docgiavm";

export default interface IdocgiaServie {
  getalldocgias(model: SearchParameter): Promise<resultreturn<docgiavm>>;
  getdocgiabyid(id: string):Promise<docgiavm>;
  adddocgia(data: docgiavm):Promise<boolean>;
  editdocgia(data: docgiavm):Promise<boolean>;
  deldocgia(id: string):Promise<boolean>;
}
