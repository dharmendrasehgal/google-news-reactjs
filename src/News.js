import React from 'react';

export const News = (item) => {
  return (<div className="card m-5">
              <div className="card-header">
                { item.title }
              </div>
              <img src={ item.urlToImage } className="card-img-top" alt={ item.title } title={ item.title } />
              <div className="card-body">
                <h5 className="card-title">{ item.title }</h5>
                <p className="card-text">{ item.description }</p>
                <a href={ item.url } className="btn btn-primary" target="_blank">{ item.source.name }</a>
              </div>
          </div>);
    };