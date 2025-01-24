import Feedback from "../components/Feedback/Feedback";
import Navbar from "../components/Navbar/Navbar";
import "./layout.css";

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <div data-testid="layout">
            <Navbar />
            <main className="container layout-grid">
               {children}
            </main>
            <Feedback />
        </div>
    )
}