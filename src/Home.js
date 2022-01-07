import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="./home__container">
                <img
                className="home__image" 
                src="https://m.media-amazon.com/images/I/61tECQhnTeL._SX3000_.jpg"
                alt=""
                />

                <div className="home__row">
                    <Product title="Amazon Basics Dual-Port USB Car Charger Adapter for Apple and Android Devices, 4.8 Amp, 24W, Black" 
                    price={8.99} 
                    image="https://m.media-amazon.com/images/I/51tyP2e0dzL._AC_SL1474_.jpg"
                    rating={4}
                    />
                    <Product title="Amazon Basics Classic Office Desk Computer Chair - Adjustable, Swiveling, Ultra-Soft Microfiber - Light Beige, Lumbar Support " 
                    price={119.98} 
                    image="https://m.media-amazon.com/images/I/81W4y81I14L._AC_SL1500_.jpg"
                    rating={5}
                    />
                    <Product title="MSI GeForce RTX 3080 Ti Ventus 3X OC Graphics Card 12GB GDDR6X PCIe4.0 ATX TORX Fan 3.0 Ampere Streaming Multiprocessors 1x HDMI 2.1 3X DisplayPort 1.4a w/Mytrix_HDMI 2.1 Cable(4k@120Hz/8K@60Hz)" 
                    price={2499.99} 
                    image="https://m.media-amazon.com/images/I/61srOjO+pVL._AC_SL1280_.jpg"
                    rating={3}
                    />
                    
                </div>

                <div className="home__row">
                    <Product title="Amazon Basics Dual-Port USB Car Charger Adapter for Apple and Android Devices, 4.8 Amp, 24W, Black" 
                    price={29.99} 
                    image="https://m.media-amazon.com/images/I/61tECQhnTeL._SX3000_.jpg"
                    rating={3}
                    />
                    <Product title="Amazon Basics Dual-Port USB Car Charger Adapter for Apple and Android Devices, 4.8 Amp, 24W, Black" 
                    price={29.99} 
                    image="https://m.media-amazon.com/images/I/61tECQhnTeL._SX3000_.jpg"
                    rating={3}
                    />

                </div>

                <div className="home__row">
                    <Product title="Amazon Basics Dual-Port USB Car Charger Adapter for Apple and Android Devices, 4.8 Amp, 24W, Black" 
                    price={29.99} 
                    image="https://m.media-amazon.com/images/I/61tECQhnTeL._SX3000_.jpg"
                    rating={3}
                    />
                </div>
             </div>

             
        </div>
    );
}

export default Home
