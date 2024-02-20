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
    _arryitem: new Array<sachvm>(),
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
    getdefaultsachs() {
      this._arryitem=new Array<sachvm>();
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
    async editsach(data: sachvm,file: File, ischange:boolean, filename:string) {
      try {
        const res = await SachService.editsach(data);
        if(ischange){
           if (await fileService.uploadingfile(file)){
            await fileService.deletedfile(filename);
           }
        }
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async getsearchsachs(name: string) {
      try {
        const res = await SachService.getsachsearch(name);
        this._arryitem = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async delsach(id: string, filename: string) {
      try {
        //Xoa sach //
        const res = await SachService.delsach(id);
        let _deletecheck = false;
        //Xoa file old //
        if (res) {
          _deletecheck = await fileService.deletedfile(filename);
        }
        this._successfully = res && _deletecheck;
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
