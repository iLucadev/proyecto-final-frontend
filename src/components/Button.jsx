import PropTypes from "prop-types";

const colors = {
  positive: "bg-cyan-950 hover:bg-cyan-900 text-orange-50",
  negative: "bg-none text-cyan-950 underline underline-offset-4 decoration-2",
  warning: "bg-rose-600 hover:bg-rose-500 text-orange-50",
  disabled: "bg-zinc-400 text-zinc-50 cursor-default",
  negative_disabled: "bg-none text-zinc-400 underline underline-offset-4 decoration-2 cursor-default",
};
export default function Button({ color, children, func }) {
  let classColor = colors[color];

  return (
    <button className={`font-semibold px-4 py-1 align-middle cursor-pointer ${classColor}`} onClick={func}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  text: PropTypes.string,
  func: PropTypes.func,
};
