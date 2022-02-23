export const getPreviousPageAddress = ({ pathname }) => {
  const previousPageAddress = pathname.split("/").slice(0, -1).join("/");

  return previousPageAddress || "/";
};
