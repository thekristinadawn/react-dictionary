import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                <img src={photo.src.tiny} className="image-fluid" />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
