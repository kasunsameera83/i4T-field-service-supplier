
import NavBar from './components/ui/nav/NavBar';
import SideMenu from './components/ui/side_menu/SideMenu';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Tasks from './pages/Task/TaskList';
import Layout from './layout/Layout';
function App() {

    return (
        <>
            <BrowserRouter className='w-screen h-screen'>
                <Routes>
                    <Route path="/" element={ <Layout /> } >
                        <Route path="/task" element= { <Tasks /> }/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
