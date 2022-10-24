import React from "react";

const NewsItem = (props) => {
  let { title, description, imageURL, newsURL, author, date, source } = props;
  return (
    <div className="container my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          style={{ width: "100%", height: "200px" }}
          src={
            imageURL
              ? imageURL
              : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
          }
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">
            {title.length > 50 ? title.slice(0, 50) + "..." : title}{" "}
            <span  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
              <span  className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">
            {description > 80
              ? (description.slice(0, 80) + "...")
              : description}
          </p>
          <p  className="card-text">
            <small  className="text-muted">
              by {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsURL}
            style={{ bottom: "5px", left: "5px" }}
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
