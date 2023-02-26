import { employeeUrl } from "@/apis/list.api";
import { asyncGet } from "@/apis/rest.api";
import Form, { Employee } from "@/components/employee/Form";
import Update from "@/components/employee/Update";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const update = () => {
  return <Update />;
};

export default update;
