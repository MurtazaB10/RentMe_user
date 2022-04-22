import React from "react";
import BasicRoutes from "../routes/BasicRoutes";
import { BrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import { Provider } from "react-redux";
import store from "../redux/store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <LoginLayout>
            <BasicRoutes />
          </LoginLayout>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
