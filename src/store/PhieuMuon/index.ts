import { defineStore } from "pinia";
import phieumuonvm from "../../model/phieumuon/phieumuonvm";
import phieuMuonService from "../../services/PhieuMuon/PhieuMuonService";
import resultreturn from "../../model/Resultreturn";
import searchParameters from "../../model/SearchParameter";

export const usephieumuonStore = defineStore("phieumuonid", {
  state: () => ({
    _datalist: new resultreturn<phieumuonvm>(),
    _isloading: false,
    _dataitem: new phieumuonvm(),
    _successfully: false,
    _list: new Array<phieumuonvm>,
    _error: false,
    _errormessage: "",
  }),
  actions: {
    async getallphieumuons(model: searchParameters) {
      const res = await phieuMuonService.getallphieumuons(model);
      this._isloading = res.status;
      this._datalist = res as resultreturn<phieumuonvm>;
    },
    async addphieumuon(data: phieumuonvm) {
      try {
        const res = await phieuMuonService.addphieumuon(data);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async delphieumuon(id: string) {
      try {
        const res = await phieuMuonService.delphieumuon(id);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
  },
});
