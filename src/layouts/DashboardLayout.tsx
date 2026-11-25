import { Link, Outlet } from 'react-router-dom'
import Navigation from "../components/Navigation"

function DashboardLayout() {
    return (
        <div className="dashboard-layout">
            <aside className="dashboard-">
                <h2>Mini LMS</h2>
                <Navigation />
            </aside>
            <div className="dashboard-">
                <header className="dashboard-header">
                    <h2>Dashboard Header</h2>
                    <Link to="/">Home</Link>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>

        </div>
    );
}

export default DashboardLayout;