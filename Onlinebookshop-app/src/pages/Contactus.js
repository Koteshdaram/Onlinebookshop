import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterHome from "../components/FooterHome";
import ContactUs from "../components/ContactUs";
import { useState, useEffect } from "react";
import "../css/HomePage.css";


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
            <ContactUs/>
                           <FooterHome/>
                            <FooterComponent/>    
            </>
           
        </>
    );
}

export default HomePage;
