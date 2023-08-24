import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="App">
      <header className='w-full fixed top-0 bg-indigo-700 shadow-md text-white py-3 px-6 text-2xl font-bold'>
        {
          currentRoute === "/" ? 'Contact Management App' : "Charts and Maps"
        }
      </header>
      <div className='flex w-full'>
        <aside className='sticky top-0 h-screen bg-indigo-900 text-white'>
          <SideBar />
        </aside>
        <main className='w-full bg-gray-100 p-4'>
          <AllRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;
