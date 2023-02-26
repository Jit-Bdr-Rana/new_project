import { BiUserCircle } from "react-icons/bi";
import { BsList } from "react-icons/bs";
interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Navbar({ toggle, setToggle }: Props) {
  return (
    <div
      className={`fixed p-5 bg-white  top-0  ${
        !toggle ? "pl-[10rem]" : "pl-[5rem]"
      }  text-black shadow-md flex justify-between left-0 right-0`}
    >
      <div className={`${!toggle ? "ml-36" : "ml-1"}`}>
        <span onClick={() => setToggle((t) => !t)}>
          <BsList size={25} />
        </span>
      </div>
      <div className="flex gap-3 items-center">
        <span>sagar</span>
        <span>
          <BiUserCircle size={25} />
        </span>
      </div>
    </div>
  );
}
