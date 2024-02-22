import { defineStore } from "pinia";
import phieutravm from "../../model/phieutra/phieutravm";
import phieutraService from "../../services/phieutra/PhieuTraService";
import resultreturn from "../../model/Resultreturn";
import searchParameters from "../../model/SearchParameter";

export const usephieutraStore = defineStore("phieutraid", {
  state: () => ({
    _datalist: new resultreturn<phieutravm>(),
    _isloading: false,
    _dataitem: new phieutravm(),
    _successfully: false,
    _list: new Array<phieutravm>,
    _error: false,
    _errormessage: "",
  }),
  actions: {
    async getallphieutras(model: searchParameters) {
      const res = await phieutraService.getallPhieuTras(model);
      this._isloading = res.status;
      this._datalist = res as resultreturn<phieutravm>;
    },
    async addphieutra(data: phieutravm) {
      try {
        const res = await phieutraService.addPhieuTra(data);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async delphieutra(id: string) {
      try {
        const res = await phieutraService.delPhieuTra(id);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
  },
});
