import Link from "next/link";

const Breadcrumbs = ({ breadCrumbs }) => {
  return (
    <section>
      <div>
        <ol>
          {breadCrumbs.map((breadCrumb) => (
            <li key={breadCrumb.name}>
              <Link href={breadCrumb.url}>{breadCrumb.name}</Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export { Breadcrumbs };
