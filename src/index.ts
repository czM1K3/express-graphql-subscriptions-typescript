import express from "express";
import typeDefs from "./graphql/typedefs";
import resolvers from "./graphql/resolvers";
import { ApolloServer } from "apollo-server-express";

const app = express();
const port = 8080;

const server = new ApolloServer({
	typeDefs,
	resolvers
});
//@ts-ignore
server.applyMiddleware({app, path: "/graphql"});

app.get("/", (req,res) => {
	res.send("Hello world!!!");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
