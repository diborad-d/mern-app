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
  updateBook: book => {
    return axios.put(baseUrl + book._id, book);
  },
  addBook: bookData => {
    return axios.post(baseUrl, bookData);
  }
};
