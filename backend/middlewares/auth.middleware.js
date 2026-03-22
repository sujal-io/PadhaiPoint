const protect = (req, res, next) => {
  console.log("Protect middleware hit");
  next(); // allow request to pass
};

export default protect;