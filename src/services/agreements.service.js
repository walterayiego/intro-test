import { logError } from "../Components/api/errorHandler";
import { api } from "./baseConfig";

export class AgreementsService {


  async postAgreementJson(prequalData) {
    const uniqueCode = this.makeUniqueId(6);
    prequalData.uniqueCode = uniqueCode;

    try {
      const url = `/prequal/json/create`;
      let response = await api.post(url, prequalData);
      return response;
    } catch (ex) {
      logError(ex);
      return null
    }
  }

  async getAgreements(query) {
    try {
      const url = `client/agreements/start=${query.start}&length=${query.length}&order=${query.order}`;
      let response = await api.get(url);
      return response;
    } catch (ex) {
      logError(ex);
      return null
    }
  }
  async getAgreementById(id) {
    try {
      const url = `/prequal/${id}`;
      let response = await api.get(url);
      return response;
    } catch (ex) {
      logError(ex);
      return null;
    }
  }
  async patchAgreement(update) {
    try {
      const url = `/prequal/update`;
      let response = await api.patch(url, update);
      return response;
    } catch (ex) {
      logError(ex);
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

const agreementsService = new AgreementsService();
export default agreementsService;