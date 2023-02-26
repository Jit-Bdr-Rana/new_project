import Link from "next/link";

interface Props {
  children: React.ReactNode;
  breadCrumb?: {
    title: string;
    link: string;
  }[];
  title?: string;
}

const Container = ({ children, breadCrumb, title }: Props) => {
  return (
    <div className=" ">
      <div className="p-3 bg-white">
        <span className=" flex gap-2">
          {breadCrumb?.map((data, index) => {
            return (
              <Link href={data?.link} className="flex gap-3 text-sm ">
                <span>{data.title}</span>
                {index + 1 != breadCrumb.length && <span>{">"}</span>}
              </Link>
            );
          })}
        </span>
        <h1 className="text-2xl font-bold">{title || "Dashboard"}</h1>
      </div>

      <div className="m-3">{children}</div>
    </div>
  );
};

export default Container;
