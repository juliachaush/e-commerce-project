import Link from "next/link";

export const Breadcrumbs = ({ breadCrumbs }) => {
  return (
    <section>
      <div className="flex flex-row items-center pl-4 ">
        <ol className="flex flex-row">
          {breadCrumbs.map((breadCrumb) => (
            <li key={breadCrumb.name} className="pl-2 ">
              <Link href={breadCrumb.url} className="text-gray-600 text-sm  ">
                {`${breadCrumb.name}  /`}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
