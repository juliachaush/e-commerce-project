import Link from "next/link";

function MainHeader({ path, linkName }) {
  return (
    <div className="flex flex-row bg-blue-500 text-white p-4 items-center spa justify-between">
      <Link href={`/`} className="text-white font-bold">
        Base Code
      </Link>
      <div className="flex flex-row list-none ">
        {Object.keys(path).map((key) => (
          <li key={key} className="p-4">
            <Link href={path[key]}>{linkName[key]}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}
export default MainHeader;
