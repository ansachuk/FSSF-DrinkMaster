import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter basename="FSSF-DrinkMaster">
			<App />
		</BrowserRouter>
	</StrictMode>,
);
