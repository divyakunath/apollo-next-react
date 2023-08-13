import styled from 'styled-components';

const UserCard = styled.address`
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  box-shadow: 5px 4px 4px 1px #e2e2e2;
  margin-bottom: 2rem;
  padding: 1.5rem 2rem;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    box-shadow: 5px 4px 4px 1px #d2d2d2;
  }
`;

export default UserCard;
