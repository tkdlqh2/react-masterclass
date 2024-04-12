import { createBrowserRouter } from "react-router-dom";
import Coin from "./routes/Coin";
import Root from "./Root";
import Chart from "./routes/Chart";
import Price from "./routes/Price";
import Coins from "./routes/Coins";
import ErrorCoin from "./routes/ErrorCoin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          { path: "chart", element: <Chart/> },
          { path: "price", element: <Price/> },
        ],
        errorElement: <ErrorCoin />,
      },
      {
        path: "",
        element: <Coins />,
      }
    ]
  }
]);
export default router;
