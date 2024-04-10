import { BrowserRouter, Router as Routes, Route } from "react-router-dom"
import Header from "./components/Header"

function Router() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" />
        </Routes>
    </BrowserRouter>
)
}

export default Router