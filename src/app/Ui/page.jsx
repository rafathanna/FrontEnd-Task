import React from "react";
import "./ui.css";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductDetails from "../components/ProductDetails";
import ReviewsSection from "../components/ReviewsSection";
import ReviewsUser from "../components/ReviewsUser";
import ReviewsCarousel from "../components/ReviewsCarousel";
import Footer from "../components/Footer";
const ProductPage = () => {
  return (
    <div className="main-wrapper">
      {/* 1. Header Section */}
      <Header />

      {/* 2. Banner Section with Watermark */}
      <section className="hero-banner">
        <div className="watermark-text">Product Details</div>
        <h1 className="hero-title">Product Details</h1>
      </section>

      {/* 3. Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Category", href: "/category" },
          { label: "Product details" }, // آخر عنصر (current)
        ]}
      />

      {/* 4. Product Details Section */}

      <ProductDetails
        product={{
          title:
            "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue",
          price: 300.00,
          note: "This price is exclusive of taxes.",
          description:
            "This premium hoodie offers a modern fit with high-quality fabric, perfect for casual outings and everyday comfort.",
          images: ["/img/person.png", "/img/img2.jpg", "/img/img3.jpg"],
          colors: ["red", "blue-light", "olive", "blue-dark", "charcoal"],
          sizes: ["30", "32", "34"],
        }}
      />

      {/* 5. Reviews Section */}
      <ReviewsSection/>

        <ReviewsUser/>

    
           <ReviewsCarousel/>
         {/* 7.foooter */}

         <Footer/>
    </div>
  );
};

export default ProductPage;
