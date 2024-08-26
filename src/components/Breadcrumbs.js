import Link from "next/link";
import LeftArrow from "../assets/left-arrow.svg";

export const Breadcrumbs = ({ breadCrumbs }) => {
  return (
    <section>
      <div className="flex flex-row items-center pl-4 ">
        <ol className="flex flex-row">
          {breadCrumbs.map((breadCrumb) => (
            <li key={breadCrumb.name} className="pl-2 ">
              <Link
                href={breadCrumb.url}
                className="text-gray-600 text-sm  pr-1"
              >
                <div className="flex flex-row items-center  ">
                  <LeftArrow width={18} height={18} />
                  <div className="pl-4">{breadCrumb.name}</div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
