import AddProductForm from "../components/ProductForm/AddProductForm";
import PageHeader from "../components/PageHeader/PageHeader";

const AddProduct = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader title="Add New Product" />
      <AddProductForm />
    </div>
  );
};

export default AddProduct;
