import { defineStore } from "pinia";
import userlogin from "../../model/user/userlogin";
import authenticator from "../../Authenticator/authenticator";
import { sessionStorageapp } from "../../Authenticator/configsessionStorage";

export const useauthorStore = defineStore("authorid", {
  state: () => ({
    _dataitem: new userlogin(),
    _successfully: false,
    _error: false,
    _errormessage: "",
  }),
  actions: {
    async login(data: userlogin) {
      try {
        const res = await authenticator.login(data);
        console.log(res);
        if (res.status) {
          sessionStorageapp.setsessionStorage(res);
          this._successfully = true;
        }
      } catch (error: any) {
        this._error = true;
        this._errormessage = error.message;
      }
    },
    logout() {
      sessionStorageapp.clear();
      this._successfully = true;
    },
  },
});
