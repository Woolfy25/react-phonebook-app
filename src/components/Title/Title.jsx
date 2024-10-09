import PropTypes from "prop-types";

const Title = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-medium">{title}</h1>
      {children}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
