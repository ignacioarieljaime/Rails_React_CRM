const Button = (props) => {
  return (
    <button onClick={props.onClick} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      {props.name}
    </button>
  );
};

export default Button;