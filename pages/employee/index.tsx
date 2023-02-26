import Container from "@/components/Container";
import Table from "@/components/employee/Table";
import Mainlayout from "@/layouts/Mainlayout";
import Link from "next/link";

const index = () => {
  return <Index />;
};
export default index;

const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "/employee",
  },
  {
    title: "Employee",
    link: "#",
  },
];

const Index = () => {
  return (
    <Mainlayout title="employee">
      <Container breadCrumb={breadCrumb} title="Employee">
        <Table />
      </Container>
    </Mainlayout>
  );
};
