import React from "react";
import PropTypes from "prop-types";

const LocationNamer = ({ data }) =>  
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
      <div>{data.map(el => (
          <p>  
            {Object.entries(el)[1][1]}
          </p>
        ))}</div>
  );


LocationNamer.propTypes = {
  data: PropTypes.array.isRequired
};

export default LocationNamer;
