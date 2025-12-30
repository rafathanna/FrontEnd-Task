"use client";

export default function Breadcrumbs({ items }) {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        {items.map((item, index) => (
          <span key={index}>
            {index !== items.length - 1 ? (
              <>
                <a href={item.href}>{item.label}</a> &gt;{" "}
              </>
            ) : (
              <span className="current">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
