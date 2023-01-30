import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GrandPa from './components/GrandPa/GrandPa';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('tshirt.json')
          },
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/grandpa',
          element: <GrandPa></GrandPa>
        },
        {
          path: '*',
          element: <h2>This content not ready yet..... sorry</h2>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
