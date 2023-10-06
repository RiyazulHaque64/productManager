import { BsFillBagPlusFill, BsBagCheckFill } from "react-icons/bs";
import { BiSolidCalendarEdit } from "react-icons/bi";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="space-y-2">
        <li>
          <Link className="flex items-center gap-3 text-white px-5 py-1 rounded cursor-pointer duration-200 hover:bg-white hover:text-purple-600">
            <ImHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-3 text-white px-5 py-1 rounded cursor-pointer duration-200 hover:bg-white hover:text-purple-600">
            <BsFillBagPlusFill />
            <span>Add Product</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-3 text-white px-5 py-1 rounded cursor-pointer duration-200 hover:bg-white hover:text-purple-600">
            <BsBagCheckFill />
            <span>All Product</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-3 text-white px-5 py-1 rounded cursor-pointer duration-200 hover:bg-white hover:text-purple-600">
            <BiSolidCalendarEdit />
            <span>Edit Product</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
