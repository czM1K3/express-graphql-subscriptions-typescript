import { gql } from "apollo-server-express";

const typeDefs = gql`
	type Query {
		hello: String!
	}

	type Subscription {
		helloable: String!
	}
`;

export default typeDefs;
