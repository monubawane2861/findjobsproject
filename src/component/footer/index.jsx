import './index.css'; // Create a separate CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                <span  style={{fontSize:"30px", fontFamily:"Bebas Neue", color:"black"}}>jobs <span  style={{color:"#f06f35", fontFamily: "Bebas Neue", letterSpacing: "5px"}}> <span style={{fontFamily:"fantasy", fontSize:"34px"}}>L</span>izard</span></span>
                    <p>
                        Jobslizard is dedicated to providing the best services and resources for our users.
                        Stay connected and explore the possibilities.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/jobs">Jobs</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/jobservice"> Jobs Service</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: support@123.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Address: 123  Street, Innovation City</p>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LN</a>
                    </div>
                </div>
            </div>

            <hr />

            <div className="footer-bottom">
                <p>&copy; 2024 Vast. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
