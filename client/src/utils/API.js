import axios from "axios";

const baseUrl = "http://localhost:9000/books/";

export default {
  getBooks: () => {
    return axios.get(baseUrl);
  },
  getBook: id => {
    return axios.get(baseUrl + id);
  },
  deleteBook: id => {
    return axios.delete(baseUrl + id);
  },
  saveBook: bookData => {
    return axios.post(baseUrl, bookData);
  }
};
