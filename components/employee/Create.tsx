import Mainlayout from "@/layouts/Mainlayout";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import Container from "../Container";
import Form from "./Form";
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
    title: "Create",
    link: "/employee/create",
  },
];

const Create = () => {
  return (
    <Mainlayout>
      <Container breadCrumb={breadCrumb} title="Add Employee">
        <Form />
      </Container>
    </Mainlayout>
  );
};

export default Create;
