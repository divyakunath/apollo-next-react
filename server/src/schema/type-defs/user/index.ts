export default `
    type User {
      name: String!,
      email: String
      address: Address!,
      phone: String
    }
    
    type UserFeed {
        result: [User!]!,
        count: Int
    }
    
    type Query {
      users(offset:Int, limit:Int): UserFeed!
    }
`;
