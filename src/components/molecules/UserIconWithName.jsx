import { memo, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");

  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdig>編集</SEdig>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdig = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
