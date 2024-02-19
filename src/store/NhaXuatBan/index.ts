import { defineStore } from "pinia";
import nhaxuatbanservice from "../../services/NhaXuatBan/nhaxuatbanservice";
import nhaxuatbanvm from "../../model/nhaxuatban/nhaxuatbanvm";
import searchParameters from "../../model/SearchParameter";
import resultreturn from "../../model/Resultreturn";

export const usenhaxuatbanStore = defineStore("nhaxuatbanid", {
  state: () => ({
    _datalist: new resultreturn<nhaxuatbanvm>(),
    _isloading: false,
    _dataitem: new nhaxuatbanvm(),
    _successfully: false,
    _list: new Array<nhaxuatbanvm>,
    _error: false,
    _errormessage: "",
  }),
  actions: {
    // getallnhaxuatbans //
    async getallnhaxuatbans(model: searchParameters) {
      const res = await nhaxuatbanservice.getallnhaxuatbans(model);
      this._isloading = res.status;
      this._datalist = res as resultreturn<nhaxuatbanvm>;
    },
    async getnhaxuatbanselect() {
      try {
        const res = await nhaxuatbanservice.getnhaxuatbanselect();
        this._list = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    getdefaultnhaxuatban() {
      this._dataitem = new nhaxuatbanvm();
    },
    //add loai sach ///
    async addnhaxuatban(data: nhaxuatbanvm) {
      try {
        const res = await nhaxuatbanservice.addnhaxuatban(data);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async editnhaxuatban(data: nhaxuatbanvm) {
      try {
        const res = await nhaxuatbanservice.editnhaxuatban(data);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async delnhaxuatban(id: number) {
      try {
        const res = await nhaxuatbanservice.delnhaxuatban(id);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async getnhaxuatbanbyid(id: number) {
      const res = await nhaxuatbanservice.getnhaxuatbanbyid(id);
      this._dataitem = res;
    },
  },
});
