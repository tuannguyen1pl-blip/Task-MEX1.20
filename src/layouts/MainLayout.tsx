import {Outlet} from 'react-router-dom';
import Header from "../components/shared/Header";

function MainLayout() {
    return(
        <div className="main-layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>
                Mini LMS Dashboard
            </footer>
        </div>
    );
}

export default MainLayout;
