import React from "react";
import Card from "./UI/Card";
import classes from "./HotelsList.module.css";
import { ReactComponent as Star } from "../svg/star.svg";

function HotelsList({ hotelsToShow }) {
  if (!hotelsToShow.length) {
    return;
  }
  return (
    <div className={classes.hotelList}>
      <h1>Select your ski trip</h1>
      <p>{hotelsToShow.length} ski trips options</p>
      {hotelsToShow?.map((hotel) => {
        return (
          <Card key={hotel.HotelCode} className={classes.cardWrapper}>
            <div>
              <img
                className={classes.hotelImg}
                src={hotel.HotelDescriptiveContent.Images[0].URL}
              />
            </div>
            <div className={classes.hotelInfo}>
              <h4>{hotel.HotelName}</h4>
              <div>
                {[...Array(Number(hotel.HotelInfo.Rating))].map((e, i) => {
                  return <Star key={hotel.HotelName} />;
                })}
              </div>
              <p className={classes.distance}>
                {hotel.HotelInfo.Position.Distances[1].distance} from center
              </p>
              <hr />
              <div className={classes.price}>
                ${hotel.PricesInfo.AmountAfterTax}
                <span className={classes.distance}>/per person</span>{" "}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default HotelsList;
