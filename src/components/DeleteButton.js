const DeleteButton = (props) => {
  return (
    <button 
      onClick={props.onClick} 
      className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-72  mx-auto block mb-5"
    >
      Delete Prospect
    </button>
  );
};

export default DeleteButton;
