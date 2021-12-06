
const CloseButton = (props) => {
  return (
    <button onClick={props.onClick} className="hover:bg-gray-300 mb-3 py-1 px-1 rounded-lg focus:outline-none focus:shadow-outline">
      <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
      </svg>
    </button>
  );
};

export default CloseButton;
