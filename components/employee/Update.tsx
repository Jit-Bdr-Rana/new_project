import { employeeUrl } from "@/apis/list.api";
import { asyncGet } from "@/apis/rest.api";
import Mainlayout from "@/layouts/Mainlayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "../Container";
import Form, { Employee } from "./Form";

const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "/employee",
  },
  {
    title: "Employee",
    link: "/employee",
  },
  {
    title: "Update",
    link: "/employee",
  },
];
const Update = () => {
  const router = useRouter();
  const [employee, setEmployee] = useState<Employee>();

  const fetchEmployee = async () => {
    const id = router.query.id; //id from url
    const { data, error } = await asyncGet(employeeUrl.get + "/" + id);
    if (data && !error) {
      setEmployee(data);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, [router.isReady]);

  return (
    <Mainlayout>
      <Container breadCrumb={breadCrumb} title="Update Employee">
        <Form editData={employee} />
      </Container>
    </Mainlayout>
  );
};

export default Update;
