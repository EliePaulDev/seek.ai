import React from "react";
import Navbar from "../components/Navbar/Navbar";

export default function Layout() {
    return (
        <div data-testid="layout">
            <Navbar />
            <div>
                <h1>Seek.ai</h1>
                <h2>Coming Soon!</h2>
            </div>
        </div>
    )
}