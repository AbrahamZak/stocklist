import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/users/';

class UserService {
  getWatchlist() {
    return axios.get(API_URL + 'watchlist');
  }

  updateWatchlist(ticker) {
    return axios
      .post(API_URL + "watchlist/update", ticker)
      .then(response => {
       console.log(success);
        return response.data;
      });
}
}
export default new UserService();