import React from "react";

const useSaveInLocalStorage = (key, content) => {
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(content));
  }, [content, key]);
};

export default useSaveInLocalStorage;
