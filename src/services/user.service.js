import { logError } from "../Components/api/errorHandler";
import { apiUser, json2formData } from "./baseConfig";

export class UserService {
  async updateCompany(update) {
    if (typeof update.BusinessDocuments === "string") {
      delete update.BusinessDocuments;
      console.log(update.BusinessDocuments);
    }
    if (typeof update.Financials_Statements === "string") {
      delete update.Financials_Statements;
      console.log(update.Financials_Statements);
    }
    if (typeof update.StakeHolderDetails_Structure === "string") {
      delete update.StakeHolderDetails_Structure;
      console.log(update.StakeHolderDetails_Structure);
    }

    const url = `/company/update`;
    // console.log(formData);
    try {
      const formData = await json2formData(update);
      let response = await apiUser.patch(url, formData);
      return response;
    } catch (error) {
      logError(error);
      return error.response;
    }
  }
  async createCompany(company) {
    try {
      const url = `/company/create`;
      let response = await apiUser.post(url, company);
      return response;
    } catch (error) {
      logError(error);
      return error.response;
    }
  }
}

const userService = new UserService();
export default userService;
