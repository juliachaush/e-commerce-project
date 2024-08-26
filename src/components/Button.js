const Button = ({ name, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-black text-sm cursor-pointer ${className}`}
    >
      {name}
    </button>
  );
};

export { Button };
