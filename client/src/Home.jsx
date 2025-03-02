import './HomePage.css'; 
import { Link } from 'react-router-dom';

function Home() {
    return ( 
        <div className="home-page">
            <nav className="navbar">
                <h2 className="logo">My React Project</h2>
                <ul className="nav-links">
                    <li><Link to="/login" className="nav-link">Login</Link></li>
                    <li><Link to="/register" className="nav-link">Register</Link></li>
                </ul>
            </nav>
            <header className="header">
                <div className="header-content">
                    
                </div>
            </header>
            <main className="main-content">
                <section className="intro">
                    <h2 className="section-title">About This Project</h2>
                    <p className="section-text">
                        This project is designed to showcase my skills in React and front-end development.
                        Feel free to explore and learn more about what I've built.
                    </p>
                </section>
                <section className="features">
                    <h2 className="section-title">Features</h2>
                    <ul className="feature-list">
                        <li className="feature-item">🌟 Stunning UI/UX</li>
                        <li className="feature-item">⚡ Super Fast Performance</li>
                        <li className="feature-item">📱 Fully Responsive Design</li>
                        <li className="feature-item">🔗 Easy Navigation</li>
                        <li className="feature-item">🎨 Modern Aesthetic</li>
                    </ul>
                </section>
            </main>
            <footer className="footer">
                <p className="footer-text">&copy; 2025 My React Project. All rights reserved.</p>
            </footer>
        </div>
     );
}

export default Home;
