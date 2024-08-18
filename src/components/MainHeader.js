import Link from "next/link";

function MainHeader({ path, linkName }) {
  return (
    <div className="flex flex-row bg-blue-500 text-white p-4 items-center spa justify-between">
      <h1>Base Code</h1>
      <div className="flex flex-row">
        {Object.keys(path).map((key) => (
          <li key={key}>
            <Link href={path[key]}>{linkName[key]}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}
export default MainHeader;
