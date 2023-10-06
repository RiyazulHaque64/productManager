const AddProductForm = () => {
  return (
    <form className="w-10/12 mx-auto border border-gray-300 rounded p-6">
      <div className="w-full flex gap-10 mb-4">
        <div className="w-1/2">
          <label className="font-medium text-gray-700" htmlFor="title">
            Title
          </label>
          <input
            className="w-full border border-gray-300 text-gray-700 px-2 py-1 mt-2 rounded focus:outline-purple-500"
            type="text"
            placeholder="Enter a product name"
          />
        </div>
        <div className="w-1/2">
          <label className="font-medium text-gray-700" htmlFor="category">
            Category
          </label>
          <select
            className="w-full border border-gray-300 text-gray-700 px-2 py-1 mt-2 rounded focus:outline-purple-500"
            name=""
            id=""
          >
            <option value="laptop">Select a product category</option>
            <option value="laptop">Laptop</option>
            <option value="processor">Processor</option>
            <option value="motherboard">Motherboard</option>
          </select>
        </div>
      </div>
      <div className="w-full flex gap-10 mb-4">
        <div className="w-1/2">
          <label className="font-medium text-gray-700" htmlFor="title">
            Quantity
          </label>
          <input
            className="w-full border border-gray-300 text-gray-700 px-2 py-1 mt-2 rounded focus:outline-purple-500"
            type="text"
            placeholder="Enter the stock number of the product"
          />
        </div>
        <div className="w-1/2">
          <label className="font-medium text-gray-700" htmlFor="title">
            Price
          </label>
          <input
            className="w-full border border-gray-300 text-gray-700 px-2 py-1 mt-2 rounded focus:outline-purple-500"
            type="text"
            placeholder="Enter the price of the product"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="font-medium text-gray-700" htmlFor="title">
          Product Image
        </label>
        <input
          className="w-full border border-gray-300 text-gray-700 px-2 py-1 mt-2 rounded focus:outline-purple-500"
          type="text"
          placeholder="Enter a picture url of the product"
        />
      </div>
      <div className="mb-4">
        <label className="font-medium text-gray-700" htmlFor="title">
          Description
        </label>
        <textarea
          className="w-full border border-gray-300 text-gray-700 px-2 py-1 mt-2 rounded focus:outline-purple-500 resize-none"
          placeholder="Write details about the product"
        ></textarea>
      </div>
      <div className="w-full flex justify-end">
        <input
          className="bg-purple-600 px-4 py-2 rounded font-semibold text-white duration-200 hover:bg-purple-700"
          type="submit"
          value="Add Product"
        />
      </div>
    </form>
  );
};

export default AddProductForm;
