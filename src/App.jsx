import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/base/AppLayout";
import Hero from "./pages/Hero";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Hero />,
			},
			// {
			// 	path: "projects",
			// 	element: <Projects />,
			// },
			// {
			// 	path: "skills",
			// 	element: <Skills />,
			// },
			// {
			// 	path: "about",
			// 	element: <About />,
			// },
			// {
			// 	path: "contact",
			// 	element: <Cotanct />,
			// },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
