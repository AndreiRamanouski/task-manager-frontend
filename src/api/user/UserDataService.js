import axios from "axios";



class UserDataService {
      
    createUserAndOrganization(userAndOrganization) {
      return axios.post(`http://localhost:8080/organizations`, userAndOrganization);
    }
  
  }
  
  export default new UserDataService();