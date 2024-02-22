import { sessionStorageapp } from "../Authenticator/configsessionStorage";
import resultreturn from "../model/Resultreturn";
import searchParameters from "../model/SearchParameter";
import IService from "./IService";
import axios from "axios";

var api_url: string = import.meta.env.VITE_API_URL;
export default abstract class Service<M, T> implements IService<M, T> {
  async getnumber(url: string): Promise<M> {
    try {
      const res = await axios.get<M>(api_url + url, {
        headers: { Authorization: `Bearer ${sessionStorageapp.gettokes()}` },
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async addList(url: string, data: M[]): Promise<boolean> {
    try {
      const res = await axios.post(api_url + url, data, {
        headers: { Authorization: `Bearer ${sessionStorageapp.gettokes()}` },
      });
      return res.data as boolean;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async getallsearch(url: string, filed: string): Promise<M[]> {
    try {
      const res = await axios.get<Array<M>>(api_url + url + filed, {
        headers: { Authorization: `Bearer ${sessionStorageapp.gettokes()}` },
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async editfile(url: string, file: File, filename: string): Promise<boolean> {
    try {
      let formData = new FormData();
      formData.append("file", file);
      formData.append("filename", filename);
      const res = await axios.put(api_url + url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${sessionStorageapp.gettokes()}`,
        },
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async deletefile(url: string, filename: string): Promise<boolean> {
    try {
      const res = await axios.delete(api_url + url + filename, {
        headers: { Authorization: `Bearer ${sessionStorageapp.gettokes()}` },
      });
      return res.data as boolean;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async uploadfile(url: string, file: File): Promise<boolean> {
    try {
      let formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(api_url + url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${sessionStorageapp.gettokes()}`,
        },
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async getallsselect(url: string): Promise<M[]> {
    try {
      const res = await axios.get<Array<M>>(api_url + url, {
        headers: { Authorization: `Bearer ${sessionStorageapp.gettokes()}` },
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async getalls(
    url: string,
    model: searchParameters
  ): Promise<resultreturn<M>> {
    try {
      const res = await axios.get<resultreturn<M>>(api_url + url, {
        params: {
          number: model.number,
          totalnumber: model.totalnumber,
          keywork: model.keywork,
        },
        headers: { Authorization: `Bearer ${sessionStorageapp.gettokes()}` },
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async getbyid(url: string, id: T): Promise<M> {
    try {
      const res = await axios.get<M>(api_url + url + id, {
        headers: { Authorization: `Bearer ${sessionStorageapp.gettokes()}` },
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async add(url: string, data: M): Promise<boolean> {
    try {
      const res = await axios.post(api_url + url, data, {
        headers: { Authorization: `Bearer ${sessionStorageapp.gettokes()}` },
      });
      return res.data as boolean;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async edit(url: string, data: M): Promise<boolean> {
    try {
      const res = await axios.put(api_url + url, data, {
        headers: { Authorization: `Bearer ${sessionStorageapp.gettokes()}` },
      });
      return res.data as boolean;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async delete(url: string, data: T): Promise<boolean> {
    try {
      const res = await axios.delete(api_url + url + data, {
        headers: { Authorization: `Bearer ${sessionStorageapp.gettokes()}` },
      });
      return res.data as boolean;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
