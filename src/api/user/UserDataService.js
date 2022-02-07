import axios from "axios";

class UserDataService {

  createUserAndOrganization(userAndOrganization) {
    return axios.post(
      "http://localhost:8080/organizations",
      userAndOrganization
    );
  }

  async signIn(userLoginRequestModel) {
    return axios.post("http:///localhost:8080/login", userLoginRequestModel);
  }

  async getUserInfo() {
    return axios.get("http:///localhost:8080/users/info");
  }

  registerSuccessfulLogin(username, token) {
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("token", token);
    this.setupAxiosInterceptors(token);
  }

  registerUserIDAndOrganizationID(userID,organizationID) {
    console.log("you logged in");
    sessionStorage.setItem("userID", userID);
    sessionStorage.setItem("organizationID", organizationID);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
    sessionStorage.removeItem("token");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return false;
    return true;
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use(function (config) {
      config.headers.Authorization = token;
      return config;
    });
  }
}

export default new UserDataService();
