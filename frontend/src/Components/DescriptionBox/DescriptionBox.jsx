import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        When living in a hostel, essential items include bedding like pillows, sheets, and a blanket for comfort, along with toiletries such as shampoo, toothpaste, and a towel. Basic clothing, including casual wear, sleepwear, and a laundry bag, is necessary, along with study essentials like a laptop, notebooks, and stationery. Personal care items, such as a first-aid kit and basic medications, ensure health and hygiene, while food items like snacks and a water bottle provide convenience. Organizers, storage bins, and a lockable box help keep things organized, making hostel life more manageable.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
