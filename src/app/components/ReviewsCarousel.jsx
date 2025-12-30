import React from "react";
import "../Ui/ui.css"; // Make sure the path to your CSS is correct

// Internal Card Component for reuse
const ReviewsCarousel = ({ item }) => {
  return (
    <>
      <div className="card">
        <div className="imageBox">
          {item.discount && (
            <div className="discountBadge">{item.discount}</div>
          )}

          <div className="actionWrapper">
            <button className="iconBtn">+</button>
            <button className="iconBtn">♡</button>
          </div>

          <img src={item.image} alt={item.title} className="productImg" />
        </div>

        <div className="categoryTitle">Dresses</div>

        <div className="ratingRow">
          <span className="star">★</span> {item.rating}
          <span className="count">({item.reviews})</span>
        </div>

        <h3 className="title">{item.title}</h3>

        <div className="priceRow">
          <span className="nowPrice">AED {item.price}</span>
          {item.oldPrice && (
            <span className="wasPrice">AED {item.oldPrice}</span>
          )}
        </div>

        <div className="swatches">
          <div className="dot" style={{ backgroundColor: "#C49B8D" }}></div>
          <div className="dot" style={{ backgroundColor: "#333333" }}></div>
          <div className="dot" style={{ backgroundColor: "#eeeeee" }}></div>
          <span className="plusMore">+2</span>
        </div>
      </div>
    </>
  );
};

// Main Page Component
export default function ProductSection() {
  const products = [
    {
      id: 1,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 900,
      rating: 4.5,
      reviews: 2910,
      image: "/img/image copy 4.png", // Replace with your image paths
    },
    {
      id: 2,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 900,
      oldPrice: 1300,
      discount: "25% OFF",
      rating: 4.5,
      reviews: 2910,
      image: "/img/image copy 6.png", // Replace with your image paths
    },
    {
      id: 3,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 900,
      rating: 4.5,
      reviews: 2910,
      image: "/img/image copy 5.png", // Replace with your image paths
    },
    {
      id: 4,
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 900,
      oldPrice: 1300,
      discount: "25% OFF",
      rating: 4.5,
      reviews: 2910,
      image: "/img/image copy 6.png", // Replace with your image paths
    },
  ];

  return (
    <>
      <div className="reviews-section">
        <h3>Similar Items</h3>
      </div>
      <div className="containeer">
        {products.map((product) => (
          <ReviewsCarousel key={product.id} item={product} />
        ))}
      </div>
      <div className="pagination">
        <button className="btnn">&lt;</button>
        <button className=" btnn activ"> &gt; </button>
      </div>
    </>
  );
}
