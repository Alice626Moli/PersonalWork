import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AuthProvide } from "./context/AuthContext";
import { BrowseRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowseRouter>
          <App />
        </BrowseRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>,
);
