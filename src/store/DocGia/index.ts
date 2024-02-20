import { defineStore } from "pinia";
import docgiaService from "../../services/DocGia/docgiaService";
import docgiavm from "../../model/docgia/docgiavm";
import searchParameters from "../../model/SearchParameter";
import resultreturn from "../../model/Resultreturn";

export const usedocgiaStore = defineStore("docgiaid", {
  state: () => ({
    _datalist: new resultreturn<docgiavm>(),
    _isloading: false,
    _arryitem: new Array<docgiavm>,
    _dataitem: new docgiavm(),
    _item: new docgiavm(),
    _successfully: false,
    _error: false,
    _errormessage: "",
  }),
  actions: {
    async getalldocgias(model: searchParameters) {
      const res = await docgiaService.getalldocgias(model);
      this._isloading = res.status;
      this._datalist = res as resultreturn<docgiavm>;
    },
    getdefaultdocgia(){
      this._dataitem= new docgiavm();
    },
    getdocgia(item: docgiavm){
      this._dataitem= item;
    },
    getdefaultdocgias(){
      this._arryitem = new Array<docgiavm>;
    },
    async adddocgia(data: docgiavm) {
      try {
        const res = await docgiaService.adddocgia(data);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async getsearchdocgias(name: string) {
      try {
        const res = await docgiaService.getdocgiasearch(name);
        this._arryitem = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async editdocgia(data: docgiavm) {
      try {
        const res = await docgiaService.editdocgia(data);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async deldocgia(id: string) {
      try {
        const res = await docgiaService.deldocgia(id);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async getdocgiabyid(id: string){
      const res = await docgiaService.getdocgiabyid(id);
      this._dataitem = res;
    }
  },
});
