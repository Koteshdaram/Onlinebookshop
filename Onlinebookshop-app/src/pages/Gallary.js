import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import { useState, useEffect } from "react";
import "../css/HomePage.css";
import "./Gallery.css";





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

            I am in Gallery page
        
           <div>
           <div class="container-fluid gallary-sec">
  <h1 class="text-center">Wonderful Oceans And Life Within</h1>
  <p class="text-center">The oceans cover more than 70 per cent of the Earth’s surface and the majority of life on Earth is aquatic.</p>

  <div class="d-flex flex-wrap justify-content-center">
    <div class="d-flex flex-column">
      <img class="img-fluid" src="https://images.unsplash.com/photo-1580019542155-247062e19ce4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwbGlmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/>
      <img class="img-fluid" src="https://images.unsplash.com/photo-1596414086775-3e321ab08f36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2VhJTIwbGlmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/>
    </div>

    <div class="d-flex flex-column">
      <img class="img-fluid" src="https://images.unsplash.com/photo-1591025207163-942350e47db2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNlYSUyMGxpZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
      <img class="img-fluid" src="https://images.unsplash.com/photo-1572720350370-8080412fc75b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VhJTIwbGlmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/>
    </div>

    <div class="d-flex flex-column">
      <img class="img-fluid" src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VhJTIwbGlmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/>
      <img class="img-fluid" src="https://images.unsplash.com/photo-1572713629470-3e9f5d4fdf4c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhJTIwbGlmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/>
    </div>

    <div class="d-flex flex-column">
      <img class="img-fluid" src="https://images.unsplash.com/photo-1572685165919-360a1322f41e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNlYSUyMGxpZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/>
      <img class="img-fluid" src="https://images.unsplash.com/photo-1559291001-693fb9166cba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlYSUyMGxpZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/>
    </div>

    <div class="d-flex flex-column">
      <img class="img-fluid" src="https://images.unsplash.com/photo-1570368294249-55d0da1c69fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNlYSUyMGxpZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
      <img class="img-fluid" src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNlYSUyMGxpZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
    </div>
  </div>
</div>
           </div>
                            <FooterComponent/>   
                            
            </>
           
        </>
    );
}

export default HomePage;
