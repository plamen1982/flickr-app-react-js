import React from 'react';

const ThreeColumnGridSystem = (props) => (
    <div className="ui celled grid">
    <div className="row">
      {props.items.length === 0 ? (
          <div>...Loading</div>
      ) : (
          props.items.map(item => (
              <div className="three wide column">
                  <img
                      alt="nice pic"
                      src={item.media.m}
                      className="ui image"
                  />
                  <div className="content">
                      <div className="header">{item.author}</div>
                      <div className="meta">
                          <span className="date">{item.date_taken}</span>
                      </div>
                  </div>
                  <div className="extra content">
                      <div className="ui tags"> {item.tags} </div>
                  </div>
              </div>
          ))
      )}
    </div>
  </div>
);

export default ThreeColumnGridSystem;