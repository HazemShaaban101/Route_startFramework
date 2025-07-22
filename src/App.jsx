import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
	addEventListener("scroll", () => {
		if (window.pageYOffset > 30) {
			document.getElementById("NavBar").classList.add("py-2");
			document.getElementById("NavBar").classList.remove("py-4");
		} else {
			document.getElementById("NavBar").classList.remove("py-2");
			document.getElementById("NavBar").classList.add("py-4");
		}
	});

	return (
		<>
			<RouterProvider
				router={createBrowserRouter([
					{
						path: "",
						element: <Layout />,
						children: [
							{ path: "", element: <Home /> },
							{ path: "contact", element: <Contact /> },
							{ path: "about", element: <About /> },
							{ path: "portfolio", element: <Portfolio /> },
						],
					},
				])}></RouterProvider>
		</>
	);
}

export default App;
