import http from "http";
import express from "express";
import typeDefs from "./graphql/typedefs";
import resolvers from "./graphql/resolvers";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
})

const app = express();
const port = 8080;

const server = new ApolloServer({
	schema,
	subscriptions: {
		path: "/subscriptions"
	}
});

//@ts-ignore eslint-disable-line no-eval
server.applyMiddleware({app});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

app.get("/", (req,res) => {
	res.send("Hello world!!!");
});

httpServer.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
