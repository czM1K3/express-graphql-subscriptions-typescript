import { PubSub } from "apollo-server-express";

const pubsub = new PubSub();

const resolvers = {
	Query: {
		hello: () => {
			pubsub.publish("HELLOABLE", "test");
			return "Hello world!!!";
		},
	},
	Subscription: {
		helloable: {
			subscribe: () => pubsub.asyncIterator(["HELLOABLE"]),
			resolve: () => "test"
		},
	},
};

export default resolvers;
