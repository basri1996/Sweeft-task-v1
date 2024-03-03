import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import GlobalStyles from "../GlobasStyles";

function AppLayout() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
