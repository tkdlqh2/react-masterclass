import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const IconWrapper = styled.div`
  height: 5vh;
  display: flex;
  justify-content: right;
  align-items: flex-end;
`;

const BackSpan = styled.span`
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ErrorCoin() {
  return <Container>
  <Helmet>
    <title>
      Invalid Coin Name
    </title>
  </Helmet>
  <IconWrapper>
    <Link to={`/`}>
      <BackSpan>&#8630;</BackSpan>
    </Link>
  </IconWrapper>
  <Header>
    <Title>
        Invalid Coin Name
    </Title>
  </Header>
</Container>;
}

export default ErrorCoin;