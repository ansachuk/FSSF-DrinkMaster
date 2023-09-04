import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.scss";

import store, { persistor } from "./redux/store.js";

import App from "./components/App/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate
				loading={<div>...Loading</div>}
				persistor={persistor}
			>
				<BrowserRouter basename="FSSF-DrinkMaster">
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</StrictMode>,
);
