import { PubSub } from "apollo-server-express";

const pubsub = new PubSub();

const resolvers = {
	Query: {
		hello: (): string => {
			pubsub.publish("HELLOABLE", "test");
			return "Hello world!!!";
		},
	},
	Subscription: {
		helloable: {
			subscribe: (): AsyncIterator<unknown, unknown, undefined> => pubsub.asyncIterator(["HELLOABLE"]),
			resolve: (): string => "test"
		},
	},
};

export default resolvers;
