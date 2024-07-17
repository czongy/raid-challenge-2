import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderHistory from "./pages/OrderHistory";
import OrderPage from "./pages/OrderPage";

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />
},
{
  path: '/orderhistory',
  element: <OrderHistory />
},
{
  path: '/orderpage',
  element: <OrderPage />
}
]);

export { router }; 
