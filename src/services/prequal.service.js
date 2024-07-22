import { logError } from "../Components/api/errorHandler";
import { api, apiClient, json2formData } from "./baseConfig";

export class PreQualService {
  async postPrequalForm(prequalData) {
    let data = json2formData(prequalData);
    console.log(data);

    try {
      const url = `/client/prequal/form/create`;
      const response = await api.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      logError(error);
    }
  }

  async postPrequalJson(prequalData) {
    const uniqueCode = this.makeUniqueId(6);
    prequalData.uniqueCode = uniqueCode;

    try {
      const url = `/prequal/json/create`;
      let response = await apiClient.post(url, prequalData);
      return response;
    } catch (error) {
      logError(error);
    }
  }

  async getPrequals(query) {
    try {
      const url = `/prequal/start=${query.start}&length=${query.length}&order=${query.order}`;
      let response = await apiClient.get(url);
      return response;
    } catch (error) {
      logError(error);
    }
  }
  async getPrequalsByCompanyId(companyId, query) {
    try {
      const url = `/prequal/companyId=${companyId}&start=${query.start}&length=${query.length}&order=${query.order}`;
      let response = await apiClient.get(url);
      return response;
    } catch (error) {
      logError(error);
    }
  }

  async getPrequalById(id) {
    try {
      const url = `/prequal/${id}`;
      let response = await apiClient.get(url);
      return response;
    } catch (error) {
      logError(error);
      return null;
    }
  }
  async patchPrequal(update) {
    if (update.remarks === "Delete") {
      update.status = "1";
    } else {
      update.status = "0";
    }
    try {
      const url = `/prequal/update`;
      let response = await apiClient.patch(url, update);
      return response;
    } catch (error) {
      logError(error);
      return null;
    }
  }
  makeUniqueId(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result.toUpperCase();
  }
}

const prequalService = new PreQualService();
export default prequalService;
