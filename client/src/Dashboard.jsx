import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
    const [suc, setSuc] = useState("");
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("http://localhost:3001/dashboard")
            .then(res => {
                console.log("Dashboard: " + res.data);
                if (res.data === "Success") {
                    setSuc("Welcome to your Dashboard! 🎉");
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }, [navigate]);

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
                <p className="status-message">{suc}</p>
            </header>
            <main className="dashboard-main">
                <section className="dashboard-card">
                    <h2>Profile Overview</h2>
                    <p>Manage your profile and settings.</p>
                </section>
                <section className="dashboard-card">
                    <h2>Analytics</h2>
                    <p>View your performance metrics and insights.</p>
                </section>
                <section className="dashboard-card">
                    <h2>Recent Activities</h2>
                    <p>Stay updated with your latest actions.</p>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;