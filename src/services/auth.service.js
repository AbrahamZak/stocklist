import axios from "axios";

const API_URL = "https://stocklist-317600.uk.r.appspot.com/";

//All methods relating to Login, includes login, signup, logout
class AuthService {
  login(emailIn, passwordIn) {
    return axios
      .post(API_URL + "users/login", {
        email: emailIn,
        password: passwordIn,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    const user = JSON.parse(localStorage.getItem("user"));
    let config = {};

    if (user && user.token) {
      config = { headers: { Authorization: "Bearer " + user.token } };
    }

    let body = {};

    return axios
      .post(API_URL + "users/me/logoutall", body, config)
      .then((response) => {
        localStorage.removeItem("user");
        return response.data;
      });
  }

  signup(emailIn, passwordIn) {
    return axios
      .post(API_URL + "users", {
        email: emailIn,
        password: passwordIn,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
