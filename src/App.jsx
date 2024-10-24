import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/base/AppLayout";
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<BrowserRouter>
			<AppLayout />
			<Analytics />
		</BrowserRouter>
	);
}

export default App;
