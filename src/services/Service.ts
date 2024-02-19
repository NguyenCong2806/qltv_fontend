import resultreturn from "../model/Resultreturn";
import searchParameters from "../model/SearchParameter";
import IService from "./IService";
import axios from "axios";

var api_url: string = import.meta.env.VITE_API_URL;

export default abstract class Service<M, T> implements IService<M, T> {
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
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async getbyid(url: string, id: T): Promise<M> {
    try {
      const res = await axios.get<M>(api_url + url + id);
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async add(url: string, data: M): Promise<boolean> {
    try {
      const res = await axios.post(api_url + url, data);
      return res.data as boolean;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async edit(url: string, data: M): Promise<boolean> {
    try {
      const res = await axios.put(api_url + url, data);
      return res.data as boolean;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async delete(url: string, data: T): Promise<boolean> {
    try {
      const res = await axios.delete(api_url + url + data);
      return res.data as boolean;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
