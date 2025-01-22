import Navbar from "../components/Navbar/Navbar";
import "./layout.css";

export default function Layout() {
    return (
        <div data-testid="layout">
            <Navbar />
            <main className="container layout-grid">
                <h1>Seek.ai</h1>
                <h2>Coming Soon!</h2>
            </main>
        </div>
    )
}