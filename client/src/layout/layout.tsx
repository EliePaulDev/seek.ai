import Feedback from "../components/Feedback/Feedback";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./layout.css";

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <div data-testid="layout">
            <Navbar />
            <main className="container layout-grid">
               {children}
            </main>
            <Feedback />
            <Footer />
        </div>
    )
}