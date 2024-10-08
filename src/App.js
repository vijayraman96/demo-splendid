import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { RouterProvider } from "react-router-dom";
import Router from "./Components/Routes/router";
import { ApolloProvider } from "@apollo/client";
import ClientProvider from "./Apollo/ApolloService";
function App() {
  return (
    <ApolloProvider client={ClientProvider}>
      <div className="App">
        <Router />
      </div>
    </ApolloProvider>
  );
}

export default App;
