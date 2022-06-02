import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="top image"
        />

        <div className="home__row">
          <Product
            id="4903850"
            title="Mevlzz Men's Running Shoes Air Low Top Shoes for Men Basketball Sneakers Fashion Tennis Sport Fitness Cross Trainers"
            price={35.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71UJMDyoY8L._AC_UY500_.jpg"
          />
          <Product
            id="23445930"
            title="Soulsfeng Mens Running Shoes Mesh Breathable Lightweight Cushioning Training Athletic Sneakers"
            price={59.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71VgSPTxPnL._AC_UY500_.jpg"
          />
          <Product
            id="3dhdj4354345"
            title="QUINMOK Mens Fashion Sneakers Walking Breathable Non Slip Gym Running Tennis Shoes"
            price={45.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/714d1k5IZNL._AC_UY500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Fiodio 22” 75Hz 1920 x 1080p Full HD Flat Computer Monitor with HDMI VGA Ports, Adjustable Tilt, LED Monitor for Home Office and Gaming (HDMI Cable Included)"
            price={2567.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71oMBNoFSBL._AC_SX679_.jpg"
          />
          <Product
            id="49538094"
            title="Feihe 21.5 Inch Monitor | 1920 x 1080p Computer Monitor with 75Hz Refresh Rate & 5s Response Time| PC Monitor with VGA & HDMI Ports for Business and Office"
            price={229.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61IutMPRZ+L._AC_SY300_SX300_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 30X Space Zoom Night Mode, Cloud Lavender"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71ouXIR8m+L._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="TCL 20 Pro 5G Unlocked Android Smartphone with 6.67” AMOLED FHD+ Display, 48MP OIS Quad Rear Camera System, 6GB+256GB, 4500mAh Battery with Wireless Charging, US 5G Version Cellphone, Marine Blue"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81-iFZ14NGS._AC_SX679_.jpg"
          />
          <Product
            id="3254354345"
            title="BenQ 24 Inch IPS Monitor | 1080P | Proprietary Eye-Care Tech | Ultra-Slim Bezel | Adaptive Brightness for Image Quality | Speakers | GW2480 Black"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71dKtZvh2ML.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="pso0lkis"
            title="Roll over image to zoom in
            Visit the Hanes Store
            Hanes Men's Full-Zip Eco-Smart Hoodie"
            price={12.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81S2WhcTf7L._AC_UY500_.jpg"
          />
          <Product
            id="23445susih7930"
            title="TCL 20 Pro 5G Unlocked Android Smartphone with 6.67” AMOLED FHD+ Display, 48MP OIS Quad Rear Camera System, 6GB+256GB, 4500mAh Battery with Wireless Charging, US 5G Version Cellphone, Marine Blue"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81-iFZ14NGS._AC_SX679_.jpg"
          />
          <Product
            id="32543sjski4345"
            title="APRILSPRING Mens Walking Shoes Fashion Running Sports Non Slip Sneakers"
            price={43.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81VpjVYy72L._AC_UY500_.jpghttps://images-na.ssl-images-amazon.com/images/I/71dKtZvh2ML.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="KOORUI 22 Inch Computer Monitor, 1080p FHD 75Hz Desktop Monitor with HDMI VGA Free Flicker Low BlueLight, Frameless Led Monitor for PC Home Office, Black"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71XUTwxT2VL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
