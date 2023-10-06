import { useState } from "react";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full py-6">
      <div className="flex gap-10 mb-5">
        <div className="w-1/2 flex items-center justify-center">
          <img
            className="w-80 h-80"
            src="https://www.techxzon.com/wp-content/uploads/2023/08/techxzon-com-Gigabyte-410MH-V3-Motherboard-Price-In-Bangladesh.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-semibold text-gray-700 uppercase">
            Gigabyte H110M-H Motherboard
          </h2>
          <p className="text-gray-700 text-sm">Motherboard</p>
          <div className="flex gap-3 my-3">
            <p className="text-gray-400 font-semibold text-xl line-through">
              <span className="font-extrabold">৳</span>5600
            </p>
            <p className="text-purple-500 font-semibold text-xl">
              <span className="font-extrabold">৳</span>5400
            </p>
          </div>
          <p className="text-gray-700 font-semibold">Stock: 10</p>
        </div>
      </div>
      <div>
        <div className="flex justify-center mb-5">
          <ul className="flex">
            <li
              className={`bg-purple-600 px-4 py-1 text-white font-semibold duration-200 hover:bg-purple-800 cursor-pointer border-r ${
                activeTab === "description" && "bg-purple-800"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </li>
            <li
              className={`bg-purple-600 px-4 py-1 text-white font-semibold duration-200 hover:bg-purple-800 cursor-pointer ${
                activeTab === "reviews" && "bg-purple-800"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </li>
          </ul>
        </div>
        <div className="w-10/12 mx-auto">
          {activeTab === "description" ? (
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              ratione possimus, nobis quisquam officiis aperiam cum libero
              molestias eos, mollitia dicta ex facilis at dolor voluptate iste
              est reprehenderit quas recusandae praesentium temporibus nulla
              incidunt porro. Quibusdam autem pariatur perferendis optio rerum
              quidem esse reprehenderit, blanditiis voluptate, ab iusto atque.
            </p>
          ) : (
            <div>
              <h2 className="text-gray-700 font-semibold mb-4">Add Reviews</h2>
              <textarea className="border border-gray-400 w-full h-48 px-4 py-2 text-gray-700 focus:outline-purple-500 resize-none rounded"></textarea>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
