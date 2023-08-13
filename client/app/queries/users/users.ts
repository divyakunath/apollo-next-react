import { gql } from "@apollo/client";

export const usersQuery = gql`
    query Query($offset: Int, $limit: Int){
        users(offset:$offset, limit:$limit) {
            count
            result {
                name,
                email,
                phone,
                address {
                    street,
                    zipcode,
                    city
                }
            }
        }
    }
`;
