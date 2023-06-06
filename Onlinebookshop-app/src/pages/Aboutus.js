import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import { useState, useEffect } from "react";

import "../css/HomePage.css";
import "./AboutUS.css";


function HomePage() {
    const [cartItemsNumber, setCartItemsNumber] = useState(0);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("items"));
        let counter = 0;
        if (cartItems) {
            for (let i = 0; i < cartItems.length; i++) {
                counter = counter + cartItems[i].quantity;
            }
            setCartItemsNumber(counter);
        }
    }, []);

    return (
        <>
            <NavbarComponent cartItemsNumber={cartItemsNumber} />
            <>
            <div className="w-75 m-auto my-5 bg-light p-5 rounded-4 text-sec" >
                <p>
                Dear readers,

<p>We offer a huge collection of books from diverse categories of Fiction, Non-fiction, Biographies, History, Religion, Self-Help, etc. We also offer a collection of
     Investments and Management, Computers, Engineering, Medical, College and 
     School text reference books.</p>

<p>We strive for customer satisfaction by offering a user-friendly search engine, 
    efficient payment options and seamless delivery systems. Apart from all this,
     we also provide great deals and discounts on our products.</p>

All the Publishers, Distributors and Authors around the country are welcome to partner with us and grow the Bookswagon family. We would like to thank our customers for shopping with us. You can write to us on our e-mail id to share any suggestions or feedback you might have regarding our website or services.
                </p>
            </div>
           <div className="d-flex justify-content-center align-items-center my-5">
           <img src="https://www.bookswagon.com/images/aboutuspicbottom.png" alt="" />

           </div>
                            <FooterComponent/>    
            </>
           
        </>
    );
}

export default HomePage;
