import { defineStore } from "pinia";
import chiTietPhieuMuonService from "../../services/chitietphieumuon/ChiTietPhieuMuonService";
import resultreturn from "../../model/Resultreturn";
import chitietphieumuonvm from "../../model/chitietphieumuon/chitietphieumuonvm";

export const usechitietphieumuonStore = defineStore("chitietphieumuonid", {
  state: () => ({
    _datalist: new resultreturn<chitietphieumuonvm>(),
    _isloading: false,
    _dataitem: new chitietphieumuonvm(),
    _successfully: false,
    _list: new Array<chitietphieumuonvm>(),
    _error: false,
    _errormessage: "",
  }),
  actions: {
    async getsachphieumuonbyid(id: string){
      const res = await chiTietPhieuMuonService.getallchitietpgieumuon(id);
      this._list = res;
    },
    async delchitietphieumuon(id: string) {
      try {
        const res = await chiTietPhieuMuonService.delchitietphieumuon(id);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async delonechitietphieumuon(id: string) {
      try {
        const res = await chiTietPhieuMuonService.delonechitietphieumuon(id);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async addchitietphieumuon(data: Array<chitietphieumuonvm>) {
      try {
        const res = await chiTietPhieuMuonService.addchitietphieumuon(data);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
  },
});
