export default function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <h1>Site Title</h1>
      <div>{children}</div>
    </div>
  );
}
