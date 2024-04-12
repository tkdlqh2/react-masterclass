import { Link } from "react-router-dom";
import styled from "styled-components";

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.cardBgColor};
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    padding: 7px 0px;
    display: block;
  }
`;

interface TabCompoProps {
  priceActive: boolean;
  chartActive: boolean;
  coinId: string;
}

function TabCompo({ priceActive, chartActive, coinId }: TabCompoProps) {
  return (
    <Tabs>
      <Tab isActive={chartActive}>
        <Link to={`/${coinId}/chart`}>Chart</Link>
      </Tab>
      <Tab isActive={priceActive}>
        <Link to={`/${coinId}/price`}>Price</Link>
      </Tab>
    </Tabs>
  );
}

export default TabCompo;