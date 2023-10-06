import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsTable = () => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="border border-gray-300 text-gray-700 px-2 py-1">
            Image
          </th>
          <th className="border border-gray-300 text-gray-700 px-2 py-1 text-left">
            Name
          </th>
          <th className="border border-gray-300 text-gray-700 px-2 py-1">
            Category
          </th>
          <th className="border border-gray-300 text-gray-700 px-2 py-1">
            Qty
          </th>
          <th className="border border-gray-300 text-gray-700 px-2 py-1">
            Price
          </th>
          <th className="border border-gray-300 text-gray-700 px-2 py-1">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300">
            <img
              className="w-14 h-14 mx-auto"
              src="https://www.techxzon.com/wp-content/uploads/2023/08/techxzon-com-Gigabyte-410MH-V3-Motherboard-Price-In-Bangladesh.jpg"
              alt="Product Image"
            />
          </td>
          <td className="text-gray-700 border border-gray-300 px-2 text-left">
            Gigabyte H410M-H Motherboard
          </td>
          <td className="text-gray-700 border border-gray-300 px-2 text-center">
            Motherboard
          </td>
          <td className="text-gray-700 border border-gray-300 px-2 text-center">
            10
          </td>
          <td className="text-gray-700 border border-gray-300 px-2 text-center">
            5600
          </td>
          <td className="text-gray-700 border border-gray-300 px-2">
            <div className="flex justify-around">
              <Link to="/admin/product-details">
                <FaRegEye className="w-5 h-5 duration-200 text-green-600 hover:text-green-700 cursor-pointer" />
              </Link>

              <BiSolidEdit className="w-5 h-5 duration-200 text-purple-600 hover:text-purple-700 cursor-pointer" />
              <RiDeleteBin6Line className="w-5 h-5 duration-200 text-red-500 hover:text-red-600 cursor-pointer" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductsTable;
