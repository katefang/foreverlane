import React from "react";
import { Link } from "react-router-dom";

import "./highlight.styles.scss";

const Highlight = ({ url, imgUrl, title, subtitle }) => (
  <div className="highlight">
    <Link to={url}>
      <img alt={title} src={imgUrl} className="highlight-img" />
      <div className="caption">
        <span className="caption-title">{title}</span>
        <span className="caption-subtitle">{subtitle}</span>
      </div>
    </Link>
  </div>
);

export default Highlight;
