import styled from "styled-components";

export const UserCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px 20px;
  img {
    object-fit: cover;
    border-radius: 20px;
  }
  h2 {
    margin-top: 10px;
    margin-bottom: 0;
  }
`;
export default UserCardStyled;
