import Link from "next/link";

function MainHeader({ path, linkName, cart }) {
  return (
    <>
      <div className=" flex flex-row bg-gray-950 text-white w-full  justify-center  ">
        <p> Free shipping from 50$</p>
      </div>
      <div className="flex flex-row bg-gray-10 text-black mb-2 items-center spa justify-between border-b border-gray-950 tracking-widest ">
        <div className="flex flex-row list-none w-2 ">
          {Object.keys(path).map((key) => (
            <li key={key} className="p-4">
              <Link href={path[key]}>{linkName[key]}</Link>
            </li>
          ))}
        </div>
        <div className="flex flex-row ">
          <Link href={`/`} className="font-bold  ">
            BASE CODE
          </Link>
        </div>
        {cart ? (
          <Link href={cart.path} className="flex flex-row pr-6">
            {cart.name}
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default MainHeader;
