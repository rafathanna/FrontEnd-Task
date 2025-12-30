"use client";
import { useState } from "react";

export default function ProductDetails({ product }) {
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[0]);

  return (
    <section className="product-details-identical">
      {/* ===== LEFT SIDE : Image Carousel ===== */}
      <div className="product-carousel-wrapper">
        <div className="carousel-indicators">
          {product.images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
            />
          ))}
        </div>

        <div id="productCarousel" className="carousel slide">
          <div className="carousel-inner">
            {product.images.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={img}
                  width={300}
                  height={340}
                  className="mt-4 ms-4"
                  alt={product.title}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon ms-2" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-ico" />
          </button>
        </div>
      </div>

      {/* ===== RIGHT SIDE : Product Info ===== */}
      <div className="product-info-wrapper">
        <div className="product-top">
          <button className="category-btn">T-Shirt</button>

          <div className="product-top-icon">
            <button className="icon-button">
              <img src="/img/r-heart.png" alt="Search" />
            </button>

            <button className="icon-button">
              <img src="/img/image.png" alt="Cart" />
            </button>

            <button className="icon-button menu-hide-desktop">
              <img src="/img/menu.png" alt="Menu" />
            </button>
          </div>
        </div>

        <div className="title-container">
          <h5 className="main-title">{product.title}</h5>
        </div>

        <div className="price-tag">
          ${product.price}.00
          <span className="reviews-count">$360.00</span>
             <p className="tax-info">{product.note}</p>
        </div>

     
        <p className="product-description">{product.description}</p>

        {/* Colors */}
        <div className="variant-section">
          <label className="variant-label">Colors</label>
          <div className="color-swatches">
            {product.colors.map((c) => (
              <button
                key={c}
                className={`swatch ${c} ${color === c ? "active" : ""}`}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="variant-section">
          <label className="variant-label">Size</label>
          <select
            className="size-dropdown"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            {product.sizes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Purchase */}
        <div className="purchase-row">
          <div className="quantity-control">
            <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
            <span>{qty.toString().padStart(2, "0")}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          <div className="price-summary">${product.price * qty}</div>

          <button className="add-to-cart-action">
            Add To Cart <span>🔒</span>
          </button>
        </div>
      </div>
    </section>
  );
}
