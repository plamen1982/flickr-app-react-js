import React from 'react';

/**
 * @render react
 * @name GridSystem
 * @description functional component, iterate and render Array of elements in a grid system
 * <GridSystem />
 */

const GridSystem = (props) => (
    <div className="ui celled grid">
    <div className="row">
      {props.items.length === 0 ? (
          <div>...Loading</div>
      ) : (
          props.items.map((item, idx) => (
              <div className="three wide column" key={idx}>
                  <img
                      alt="some pic"
                      src={item.media.m}
                      className="ui image"
                  />
                  <div className="content">
                      <div className="header">Author: {item.author}</div>
                      <div className="meta">
                          <span className="date">Date Taken: {item.date_taken}</span>
                      </div>
                  </div>
                  <div className="extra content">
                      <div className="ui tags">Tags: {item.tags} </div>
                  </div>
              </div>
          ))
      )}
    </div>
  </div>
);

export default GridSystem;