import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import "./Styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from "./Store/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
