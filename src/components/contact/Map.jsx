import React from "react";

const Map = () => {
  return (
    <div style={{ width: "100%" }}>
      <iframe
        width="600"
        height="500"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=12,%20Sardar%20Patel%20Rd,%20Anna%20University,%20Guindy,%20Chennai,%20Tamil%20Nadu%20600025+(Mathrix)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        {/* <a href="https://www.gps.ie/">gps handsets</a> */}
      </iframe>
    </div>
  );
};

export default Map;
