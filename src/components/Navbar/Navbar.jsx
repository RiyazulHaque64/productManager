import { BsFillBagPlusFill, BsBagCheckFill } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="space-y-2">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-5 py-1 rounded cursor-pointer duration-200 bg-white text-purple-600"
                : "flex items-center gap-3 text-white px-5 py-1 rounded cursor-pointer duration-200 hover:bg-white hover:text-purple-600"
            }
            to="/admin/home"
          >
            <ImHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-5 py-1 rounded cursor-pointer duration-200 bg-white text-purple-600"
                : "flex items-center gap-3 text-white px-5 py-1 rounded cursor-pointer duration-200 hover:bg-white hover:text-purple-600"
            }
            to="/admin/add-product"
          >
            <BsFillBagPlusFill />
            <span>Add Product</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-3 text-white px-5 py-1 rounded cursor-pointer duration-200 hover:bg-white hover:text-purple-600"
            to="/admin/all-products"
          >
            <BsBagCheckFill />
            <span>All Product</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
