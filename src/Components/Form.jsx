import Link from "next/link";

export default function Form({ title, children, text, href, icon }) {
  return (
    <>
      <span className="flex flex-col items-center justify-between  border border-brown p-10 rounded-t-full md:max-w-[300px] xs:w-[300px] md:p-7 mb-10 ">
        <h1 className="text-brown text-xl font-extrabold tracking-[.20em] mb-4  ">
          SHABGIS
        </h1>
        <h1 className="text-brown text-right flex items-center font-extrabold text-xl ">
          {title}
          {icon}
        </h1>
        <div className="my-5 flex flex-col justify-center items-center ">
          <section>{children}</section>
          <Link className="text-brown" href={href}>
            {text}
          </Link>
        </div>
      </span>
    </>
  );
}
