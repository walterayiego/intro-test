import { logError } from "../Components/api/errorHandler";
import { apiSupplier } from "./baseConfig";

export class PreQualSupplierService {
  async getPrequals(query) {
    try {
      const url = `/prequal/start=${query.start}&length=${query.length}&order=${query.order}`;
      let response = await apiSupplier.get(url);
      return response;
    } catch (error) {
      logError(error);
    }
  }

  async getPrequalById(id) {
    try {
      const url = `/prequal/${id}`;
      let response = await apiSupplier.get(url);
      return response;
    } catch (error) {
      logError(error);
      return null;
    }
  }
  async updatePrequal(update) {
    try {
      const url = `/prequal/update`;
      let response = await apiSupplier.put(url, update);
      return response;
    } catch (error) {
      logError(error);
      return null;
    }
  }
  async apply(data) {
    try {
      const url = `/prequal/create`;
      let response = await apiSupplier.post(url, data);
      return response;
    } catch (error) {
      logError(error);
      return error.response;
    }
  }
  async getPrequalApplicantsByNoticeID(id, query) {
    try {
      const url = `/prequal/preQualNoticeId=${id}&start=${query.start}&length=${query.length}&order=${query.order}`;
      let response = await apiSupplier.get(url);
      return response;
    } catch (error) {
      logError(error);
      return null;
    }
  }
  async getPrequalifiedSuppliers(id, query) {
    try {
      const url = `/prequal/companyId=${id}&start=${query.start}&length=${query.length}&order=${query.order}`;
      let response = await apiSupplier.get(url);
      return response;
    } catch (error) {
      logError(error);
      return null;
    }
  }
}
const preQualSupplierService = new PreQualSupplierService();
export default preQualSupplierService;
