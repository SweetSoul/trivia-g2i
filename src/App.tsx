import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.sass";
import "./styles/fontsLib.sass";
import "./styles/buttons.sass";
import { routes } from "./constants/routes";
import Home from "./pages/Home/home";
import Quiz from "./pages/Quiz/quiz";
import Results from "./pages/Results/results";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header/header";

function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<Header />
				<div className="background" />
				<main>
					<BrowserRouter>
						<Routes>
							<Route path={routes.home} element={<Home />} />
							<Route path={routes.quiz} element={<Quiz />} />
							<Route path={routes.results} element={<Results />} />
							<Route path="*" element={<div>404</div>} />
						</Routes>
					</BrowserRouter>
				</main>
			</div>
		</QueryClientProvider>
	);
}

export default App;
