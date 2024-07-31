import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/Header/Header';
import Home from './Pages/Home/Home';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Routes/router';
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
