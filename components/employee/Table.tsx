import { employeeUrl } from "@/apis/list.api";
import { asyncDelete, asyncGet } from "@/apis/rest.api";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Employee } from "./Form";

const Table = () => {
  const [employeelist, setEmployeelist] = useState<Employee[]>([]);
  const [filteredEmployeeflist, setFilteredEmployeelist] = useState<Employee[]>(
    []
  );

  const fetchAllEmploye = async () => {
    const { data, error } = await asyncGet(employeeUrl.get);
    if (data && !error) {
      setEmployeelist(data as Employee[]);
      setFilteredEmployeelist(data as Employee[]);
    }
  };
  const deleteEmployee = async (id: number) => {
    const value = window.prompt("are you want to delete");
    if (value == "yes") {
      const { data, error } = await asyncDelete(employeeUrl.delete + id);
      if (data && !error) {
        // fetchAllEmploye();
        setEmployeelist((c) => c.filter((f) => f.id != id));
        setFilteredEmployeelist((c) => c.filter((f) => f.id != id));
      }
    }
  };

  // const callback=(a:any)=>{x
  //  return a.filter(filterCallback)
  // }
  // const filterCallback=(f:any)=>{
  // return  f.id!=id
  // }

  const filterSearch = (e: any) => {
    const value = e.target.value;
    if (value) {
      setFilteredEmployeelist(
        employeelist.filter(
          (f) =>
            f.name?.toString().includes(value) ||
            f.address?.toString().includes(value)
        )
      );
    } else {
      setFilteredEmployeelist(employeelist);
    }
  };

  useEffect(() => {
    fetchAllEmploye();
  }, []);

  return (
    <div>
      <div className="flex justify-between my-3 mt-4">
        <div>
          <input
            type="text"
            onChange={filterSearch}
            className="border border-gray-400 rounded-md outline-none p-1.5"
          />
        </div>
        <Link href={"/employee/create"}>
          <span className="bg-purple-500 text-white hover:bg-purple-800 rounded-md px-3 py-2">
            Add Employee
          </span>
        </Link>
      </div>
      <div className="bg-white p-2">
        {/* {JSON.stringify(employeelist)} */}
        <table className="w-full mt-3">
          <thead className=" text-white bg-purple-600  ">
            <tr className="">
              <th className="p-3">SN</th>
              <th className="p-3">Name</th>
              <th className="p-3">Address</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Age</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {filteredEmployeeflist?.length > 0 ? (
              filteredEmployeeflist?.map((data, i) => {
                return (
                  <tr className="hover:bg-gray-200  p-3 text-center">
                    <td className="p-3 ">{i + 1}</td>
                    <td className="p-3">{data.name}</td>
                    <td className="p-3">{data.address}</td>
                    <td className="p-3">{data.phone}</td>
                    <td className="p-3">{data.age}</td>
                    <td className="p-3 flex gap-2 justify-center">
                      <Link href={`/employee/${data.id}`}>
                        <button className="outline-none bg-green-600  px-2 py-0.5 rounded-md text-sm  text-white ">
                          edit
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteEmployee(data.id)}
                        className="outline-none bg-red-600  px-2 py-0.5 rounded-md text-sm  text-white "
                      >
                        dlt
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-3">
                  no data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-2 absolute bottom-0 right-0">
        <button className="p-1 px-2 border border-gray-700  rounded-md">
          1
        </button>
        <button className="p-1 px-2 border border-gray-700  rounded-md">
          2
        </button>
        <button className="p-1 px-2 border border-gray-700  rounded-md">
          3
        </button>
      </div>
    </div>
  );
};

export default Table;
