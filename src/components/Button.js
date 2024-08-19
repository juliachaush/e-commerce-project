// const Button = ({ className, ...props }, ref) => {
//   return <button className={className} ref={ref} {...props} />;
// };
// Button.displayName = "Button";

const Button = ({ name }) => {
  return <button className="text-white font-bold">{name}</button>;
};

export { Button };
