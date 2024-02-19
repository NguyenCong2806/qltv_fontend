import { defineStore } from "pinia";
import SachService from "../../services/Sach/SachService";
import sachvm from "../../model/sach/sachvm";
import searchParameters from "../../model/SearchParameter";
import resultreturn from "../../model/Resultreturn";
import fileService from "../../services/File/fileService";

export const usesachStore = defineStore("sachid", {
  state: () => ({
    _datalist: new resultreturn<sachvm>(),
    _isloading: false,
    _dataitem: new sachvm(),
    _file: File,
    _successfully: false,
    _list: new Array<sachvm>(),
    _error: false,
    _errormessage: "",
  }),
  actions: {
    // getallsachs //
    async getallsachs(model: searchParameters) {
      const res = await SachService.getallsachs(model);
      this._isloading = res.status;
      this._datalist = res as resultreturn<sachvm>;
    },
    async getsachselect() {
      try {
        const res = await SachService.getsachselect();
        this._list = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    getdefaultsach() {
      this._dataitem = new sachvm();
    },
    //add loai sach ///
    async addsach(data: sachvm, file: File) {
      try {
        // save sach //
        const res = await SachService.addsach(data);
        // upload file //
        const _uploadcheck = await fileService.uploadingfile(file);

        this._successfully = res && _uploadcheck;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async editsach(data: sachvm) {
      try {
        //const res = await SachService.editsach(data);
        this._successfully = true;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async delsach(id: string) {
      try {
        const res = await SachService.delsach(id);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async getsachbyid(id: string) {
      const res = await SachService.getsachbyid(id);
      this._dataitem = res;
    },
  },
});