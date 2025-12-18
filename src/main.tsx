import { createRoot } from "react-dom/client";
import "@components/index.scss";
import { App } from "@components/app";
import { Provider } from "react-redux";
import { store } from "@stores";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
