const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/moviesQuery");
const cors = require("cors");
const { getErrorCode } = require("./utils/errorUtils");

const app = express();

app.use(cors());

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
    customFormatErrorFn: err => {
      console.log("err = ", err);
      const error = getErrorCode(err.message);
      return { message: error.message, statusCode: error.statusCode };
    }
  })
);
app.listen(4000, () => {
  console.log("Listening on port 4000");
});
