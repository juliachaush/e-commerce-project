const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`text-black text-sm cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
