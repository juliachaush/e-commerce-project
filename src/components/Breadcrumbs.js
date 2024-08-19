import Link from "next/link";

const Breadcrumbs = ({ breadCrumbs }) => {
  return (
    <section>
      <div>
        <ol className="flex flex-row">
          {breadCrumbs.map((breadCrumb) => (
            <li key={breadCrumb.name}>
              <Link href={breadCrumb.url} className="text-white p-2">
                {breadCrumb.name}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export { Breadcrumbs };
