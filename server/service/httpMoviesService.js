const axios = require("axios");
const _ = require("lodash");

const API_KEY = "8ce8325";
const API_ENDPOINT = "http://www.omdbapi.com";
//http://www.omdbapi.com/?s=Batman&page=2&apikey=8ce8325
//http://www.omdbapi.com/?i=tt4853102"&apikey=8ce8325

const getMoviesByTitle = (title, page) =>
  new Promise((resolve, reject) =>
    axios
      .get(
        `${API_ENDPOINT}/?type=movie&s=${title}&page=${page}&apikey=${API_KEY}`
      )
      .then(response => resolve(_.get(response, "data")))
      .catch(error => {
        reject(error);
      })
  );

const getMovieById = id =>
  new Promise((resolve, reject) =>
    axios
      .get(`${API_ENDPOINT}/?type=movie&i=${id}&apikey=${API_KEY}`)
      .then(response => resolve(_.get(response, "data")))
      .catch(error => {
        reject(error);
      })
  );

module.exports = {
  getMoviesByTitle,
  getMovieById
};
