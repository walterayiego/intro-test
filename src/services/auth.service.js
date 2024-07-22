import errorHandler, { logError } from "../Components/api/errorHandler";
import { api, apiAuth, apiUser } from "./baseConfig";

export class AuthService {
  async login(loginDetails) {
    try {
      const url = `/login`;
      let response = await apiAuth.post(url, loginDetails);
      return response;
    } catch (error) {
      logError(error);
      return error.response;
    }
  }

  async register(registrationDetails) {
    try {
      const url = `/register`;
      let response = await apiAuth.post(url, registrationDetails);
      return response;
    } catch (error) {
      logError(error);
      return error.response;
    }
  }
  async generateEmailToken(email) {
    try {
      const url = `/generate-confirm-email-token`;
      let response = await apiAuth.post(url, email);
      return response;
    } catch (error) {
      logError(error);
    }
  }

  async verifyEmail(user) {
    try {
      const url = `/confirm-email`;
      let response = await apiAuth.post(url, user);
      return response;
    } catch (error) {
      logError(error);
    }
  }

  async resendConfirmationEmail(email) {
    try {
      const url = `/resendConfirmationEmail`;
      let response = await apiAuth.post(url, email);
      return response;
    } catch (error) {
      logError(error);
    }
  }

  async forgotPassword(email) {
    try {
      const url = `/forgotPassword`;
      let response = await apiAuth.post(url, email);
      return response;
    } catch (error) {
      logError(error);
    }
  }

  async registerIdentity(registrationDetails) {
    try {
      const url = `/identity/register`;
      let response = await apiAuth.post(url, registrationDetails);
      return response;
    } catch (error) {
      logError(error);
    }
  }

  async getCurrentUser() {
    try {
      const url = `/get-current-user`;
      let response = await apiUser.get(url);
      return response;
    } catch (error) {
      logError(error);
    }
  }
  async checkAuth() {
    try {
      let response = await this.getCurrentUser();
      const auth = response?.status === 200;
      return auth;
    } catch (error) {
      logError(error);
    }
  }
  async logOut() {
    try {
      const url = `/logout`;
      let response = await apiAuth.post(url);
      return response;
    } catch (error) {
      logError(error);
    }
  }
}
const authService = new AuthService();
export default authService;
