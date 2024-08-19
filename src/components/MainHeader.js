import Link from "next/link";
import Logo from "../assets/logo.svg";

function MainHeader({ path, linkName }) {
  return (
    <div className="flex flex-row bg-gray-900 text-white p-4 items-center spa justify-between">
      <Link href={`/`} className="text-white font-bold">
        Base Code
      </Link>
      <Logo width={60} height={60} />
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
