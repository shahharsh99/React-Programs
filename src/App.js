import Routes from './Routes/routes';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./Reducers/rootReducer"

const createStoreWithMiddleware =
  process.env.NODE_ENV === "development"
    ? applyMiddleware(logger, reduxThunk)(createStore)
    : applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);

function App() {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;