import axios from "axios";

const API_URL = "http://localhost:3000/";

class AuthService {
  login(emailIn, passwordIn) {
    return axios
      .post(API_URL + "users/login", {
        "email": emailIn,
        "password": passwordIn
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response.data);
        return response.data;
      });
  }

  logout() {
    return axios
    .post(API_URL + "users/me/logoutall", this.getCurrentUser())
    .then(response => {
      console.log(response);
      localStorage.removeItem("user");
      return response.data;
    });
  }

  signup(emailIn, passwordIn) {
    return axios
      .post(API_URL + "users", {
        "email": emailIn,
        "password": passwordIn
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response.data);
        return response.data;
      });
  }

  getCurrentUser() {
    //console.log(JSON.parse(localStorage.getItem('user')));
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();