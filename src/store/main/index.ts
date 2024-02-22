import { defineStore } from "pinia";
import mainvm from "../../model/main/mainvm";
import mainService from "../../services/main/MainService";

export const usemainStore = defineStore("mainid", {
  state: () => ({
    _isloading: false,
    _dataitem: new mainvm(),
    _successfully: false,
    _error: false,
    _errormessage: "",
  }),
  actions: {
    async getallmains() {
      const res = await mainService.getallmains();
      console.log(res);
      this._dataitem = res;
      this._isloading = this._successfully = true;
    },
  },
});
