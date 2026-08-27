import React from "react";

export default function Card({ title, icon: Icon, children, className = "" }) {
  return (
    <section className={`mc-card ${className}`}>
      {title && (
        <div className="mc-card-head">
          <div className="mc-card-title">
            {Icon && <Icon size={16} />}
            <span>{title}</span>
          </div>
        </div>
      )}
      <div className="mc-card-body">{children}</div>
    </section>
  );
}
