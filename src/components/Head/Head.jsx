import React from "react";

import PropTypes from "prop-types";

const Head = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title + " • Pokédex";
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", description || "");
  }, [title, description]);

  return <></>;
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Head;
