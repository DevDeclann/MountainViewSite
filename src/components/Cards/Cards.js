import React from "react";
import CardItem from "../Cards/CardsItem";
import "./Cards.css";
import Audi from "../../images/audi-r8.jpeg";
import Mclaren from "../../images/mclaren540c.jpeg";
import tower from "../../images/tower.jpeg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Audi}
              text="Explore the amazing audi r8 features"
              label="Adventure"
              path="/gallery"
            />
            <CardItem
              src={Mclaren}
              text="Travel through fastest speeds"
              label="Luxury"
              path="/gallery"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={tower}
              text="Set Sail and visit the eiffel tower"
              label="Mystery"
              path="/gallery"
            />
            <CardItem
              src={Mclaren}
              text="Experience the Mclarens offerings with its amazing features"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={Mclaren}
              text="Ride through the Sahara Desert in a Mclaren at top speed"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
