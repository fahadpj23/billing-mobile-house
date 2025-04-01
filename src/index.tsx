import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <PersistGate loading={<h1>dsd</h1>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
