import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import styled from "styled-components";


const PriceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const PriceTableHead = styled.thead`
  background-color: ${(props) => props.theme.accentColor};
  color:  ${(props) => props.theme.textColor};
`;

const PriceTableBody = styled.tbody`
  background-color: ${(props) => props.theme.bgColor};;
  color: ${(props) => props.theme.textColor};
  & tr {
    border-bottom: 1px solid ${(props) => props.theme.accentColor};
    padding: 10px 0;

  }
`;

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface PriceProps {
  coinId: string;
}


function convertUnixTimestamp(unixTimestamp: number): string {
  const date = new Date(unixTimestamp * 1000);
  const year: number = date.getFullYear();
  const month: string = ('0' + (date.getMonth() + 1)).slice(-2);
  const day: string = ('0' + date.getDate()).slice(-2);
  
  return `${year}-${month}-${day}`;
}


function Price({coinId}: PriceProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <div>
          <PriceTable>
            <PriceTableHead>
              <tr>
                <th>Date</th>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
              </tr>
            </PriceTableHead>
            <PriceTableBody>
              {data?.map((ohlcv) => (
                <tr key={ohlcv.time_open}>
                  <td>{convertUnixTimestamp(Number(ohlcv.time_open))}</td>
                  <td>{Number(ohlcv.open).toFixed(2)} $</td>
                  <td>{Number(ohlcv.high).toFixed(2)} $</td>
                  <td>{Number(ohlcv.low).toFixed(2)} $</td>
                  <td>{Number(ohlcv.close).toFixed(2)} $</td>
                </tr>
              ))}
            </PriceTableBody>
          </PriceTable>
        </div>
      )}
    </div>
  );
}

export default Price;
