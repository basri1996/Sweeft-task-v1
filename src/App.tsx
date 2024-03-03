import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./ui/Error";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import History from "./pages/History";
import { AppContextProvider } from "./context/AppContext";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/history",
        element: <History />,
      },

      // {
      //   path: "/order/:orderId",
      //   element: <Order />,
      //   loader: orderLoader,
      //   errorElement: <Error />,
      //   action: updateOrderAction,
      // },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </Provider>
  );
}

export default App;
