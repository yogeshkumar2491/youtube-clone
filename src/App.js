import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/home/Body";
import WatchPage from "./components/video/WatchPage";
import MainContainer from "./components/home/MainContainer";
import SearchResult from "./components/search/SearchResult";
import { Error } from "./components/error/Error";
import store from "./utils/store/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "watch", element: <WatchPage /> },
        { path: "results", element: <SearchResult /> },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
