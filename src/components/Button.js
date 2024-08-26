const Button = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className="text-black text-sm cursor-pointer">
      {name}
    </button>
  );
};

export { Button };
