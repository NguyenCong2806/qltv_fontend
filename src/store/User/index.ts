import { defineStore } from "pinia";
import userService from "../../services/user/UserService";
import uservm from "../../model/user/uservm";
import searchParameters from "../../model/SearchParameter";
import resultreturn from "../../model/Resultreturn";

export const useuserStore = defineStore("userid", {
  state: () => ({
    _datalist: new resultreturn<uservm>(),
    _isloading: false,
    _dataitem: new uservm(),
    _item: new uservm(),
    _successfully: false,
    _error: false,
    _errormessage: "",
  }),
  actions: {
    async getallusers(model: searchParameters) {
      const res = await userService.getallusers(model);
      console.log(res);
      this._isloading = res.status;
      this._datalist = res as resultreturn<uservm>;
    },
    getdefaultuser(){
      this._dataitem= new uservm();
    },
    getuser(item: uservm){
      this._dataitem= item;
    },
    async adduser(data: uservm) {
      try {
        const res = await userService.adduser(data);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async edituser(data: uservm) {
      try {
        const res = await userService.edituser(data);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async deluser(id: string) {
      try {
        const res = await userService.deluser(id);
        this._successfully = res;
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    async getuserbyid(id: string){
      const res = await userService.getuserbyid(id);
      this._dataitem = res;
    }
  },
});
