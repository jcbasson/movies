const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLList
} = graphql;
const _ = require("lodash");
const httpMoviesService = require("../service/httpMoviesService");
const { errorNames } = require("../constants/errors");

const RatingType = new GraphQLObjectType({
  name: "Rating",
  fields: () => ({
    Source: { type: GraphQLString },
    Value: { type: GraphQLString }
  })
});

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    Title: { type: GraphQLString },
    Year: { type: GraphQLString },
    Rated: { type: GraphQLString },
    Released: { type: GraphQLString },
    Runtime: { type: GraphQLString },
    Genre: { type: GraphQLString },
    Director: { type: GraphQLString },
    Actors: { type: GraphQLString },
    Plot: { type: GraphQLString },
    Language: { type: GraphQLString },
    Poster: { type: GraphQLString },
    imdbID: { type: GraphQLString },
    Type: { type: GraphQLString }
  })
});

const MoviesType = new GraphQLObjectType({
  name: "Movies",
  fields: () => ({
    Search: { type: new GraphQLNonNull(new GraphQLList(MovieType)) },
    totalResults: { type: GraphQLString },
    Response: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: () => ({
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
      resolve: async (parentValue, args) => {
        try {
          const { id } = args;
          return await httpMoviesService.getMovieById(id);
        } catch (error) {
          throw error.message;
        }
      }
    },
    movies: {
      type: MoviesType,
      args: { title: { type: GraphQLString }, page: { type: GraphQLInt } },
      resolve: async (parentValue, args) => {
        try {
          const { title, page } = args;
          return await httpMoviesService.getMoviesByTitle(title, page);
        } catch (error) {
          throw new Error(errorNames.SERVER_ERROR);
        }
      }
    }
  })
});
module.exports = RootQuery;
