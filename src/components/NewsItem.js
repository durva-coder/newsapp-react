import React from "react";
// import React, { Component } from "react";

// export class NewsItem extends Component {
const NewsItem = (props) => {

  // render() {
    // let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'
          }
          }> 
              <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img src={imageUrl ? imageUrl : "https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1024-512.png"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  // }
}

export default NewsItem;
