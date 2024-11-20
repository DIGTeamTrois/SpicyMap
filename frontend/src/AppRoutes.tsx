import { Routes, Route } from "react-router-dom";
import { Provider } from "jotai";

import IndexView from "./components/IndexView.tsx";
import SignUpView from "./components/SignUpView.tsx";
import LoginView from "./components/LoginView.tsx";

function AppRoutes() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="/sign-up" element={<SignUpView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </Provider>
  );
}

export default AppRoutes;
