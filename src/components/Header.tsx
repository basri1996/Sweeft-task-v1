import styled from "styled-components";
import logo from "../images/logo.jpeg";
import history from "../images/history.png";
import { Link } from "react-router-dom";

const MainDiv = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
const Logo = styled.img`
  height: 88px;
`;
const HistoryLogo = styled.img`
  width: 50px;
  height: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyleLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <MainDiv>
      <StyleLink to="/">
        <Logo src={logo} alt="logo" />
      </StyleLink>
      <Wrapper>
        <StyleLink to="/history">
          <HistoryLogo src={history} />
        </StyleLink>
      </Wrapper>
    </MainDiv>
  );
}

export default Header;
