import { defineStore } from "pinia";
import loaisachService from "../../services/LoaiSach/loaisachService";
import loaisachvm from "../../model/loaisach/loaisachvm";
import searchParameters from "../../model/SearchParameter";
import resultreturn from "../../model/Resultreturn";

export const useloaiSachStore = defineStore("loaisachid", {
  state: () => ({
    _datalist: new resultreturn<loaisachvm>(),
    _isloading: false,
    _dataitem: new loaisachvm(),
    _list: new Array<loaisachvm>,
    _successfully: false,
    _error: false,
    _errormessage: "",
  }),
  actions: {
    // getallloaisachs //
    async getallloaisachs(model: searchParameters) {
      const res = await loaisachService.getallloaisachs(model);
      this._isloading = res.status;
      this._datalist = res as resultreturn<loaisachvm>;
    },
    getdefaultloaisach(){
      this._dataitem= new loaisachvm();
    },
    //add loai sach ///
    async addloaisach(data: loaisachvm) {
      try {
        const res = await loaisachService.addloaisach(data);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async getloaisachselect() {
      try {
        const res = await loaisachService.getloaisachselect();
        this._list = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async editloaisach(data: loaisachvm) {
      try {
        const res = await loaisachService.editloaisach(data);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async delloaisach(id: number) {
      try {
        const res = await loaisachService.delloaisach(id);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async getloaisachbyid(id: number){
      const res = await loaisachService.getloaisachbyid(id);
      this._dataitem = res;
    }
  },
});
