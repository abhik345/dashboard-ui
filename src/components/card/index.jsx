import PropTypes from "prop-types";

function Card(props) {
  const { children, extra, ...rest } = props;

  return (
    <div
      className={`!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-lg shadow-500 ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}
Card.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  extra: PropTypes.string,
};

export default Card;
