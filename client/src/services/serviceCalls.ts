import axios from "axios"
import { getJWToken } from "../utils"

const BASE_URL = "http://localhost:8084/api"

export class serviceCalls {
  static async post(path: any, data:any, cb: any) {
    const headers = {
      headers: {
        "Content-Type": "application/json",
      }
    }
    const url = `${BASE_URL}${path}`
    try {
      const response = await axios
        .post(url, data, headers);
      cb(null, response.data);
    } catch (error : any) {
      cb(error.response);
    }
  }

  static postWithFormData(path: any, formData: any, cb:any) {
    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    };

    const url = `${BASE_URL}${path}`;
    return axios
      .post(url, formData, headers)
      .then(response => {
        cb(null, response.data);
      })
      .catch(error => {
        cb(error.response);
      });
  }

  static async get(path: any, cb:any) {
    const headers = {
      headers: {
        "Content-Type": "multipart/related",
      }
    }
    const url = `${BASE_URL}${path}`
    try {
      const response = await axios
        .get(url, headers);
      cb(null, response.data);
    } catch (error: any) {
      cb(error.response);
    }
  }
}
