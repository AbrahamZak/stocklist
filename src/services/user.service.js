import axios from "axios";

const API_URL = "http://localhost:3000/users/";

//All methods relating to user services, includes getting watchlist and updating watchlist
class UserService {
  getWatchlist() {
    const user = JSON.parse(localStorage.getItem("user"));
    let config = {};

    if (user && user.token) {
      config = { headers: { Authorization: "Bearer " + user.token } };
    }

    let body = {};

    return axios
      .post(API_URL + "watchlist", body, config)
      .then((response) => {
        return response.data;
      });
  }

  updateWatchlist(symbol) {
    const user = JSON.parse(localStorage.getItem("user"));
    let config = {};

    if (user && user.token) {
      config = { headers: { Authorization: "Bearer " + user.token } };
    }

    let body = { ticker: symbol };

    return axios
      .post(API_URL + "watchlist/update", body, config)
      .then((response) => {
        return response.data;
      });
  }
}
export default new UserService();
