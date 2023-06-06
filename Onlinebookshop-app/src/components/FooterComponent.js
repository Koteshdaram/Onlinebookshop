import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import FooterHome from "./FooterHome";
import "./FooterComponent.css"

function FooterComponent(props) {
    return (
        <>
        
         <div className="footer-bg">
         <div
            className={
                props.position === "absolute"
                    ? props.page === "Home"
                        ? "footer footer-home footer-absolute"
                        : "footer footer-absolute"
                    : "footer"
            }
        >
            <p className="copyright">Online Bookstore © 2023. All Rights Reserved
               | Follow us My Website</p>
            <ul className="footer-list">
                <li className="footer-item">
                    <a href="https://www.facebook.com/login.php" target="_blank" rel="noreferrer">
                        <FaFacebookSquare />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://twitter.com/?lang=en-in" target="_blank" rel="noreferrer">
                        <FaTwitterSquare />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <FaInstagramSquare />
                    </a>
                </li>
            </ul>
        </div>
       
         </div>
        </>
    
    );
}

export default FooterComponent;
