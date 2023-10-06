import PageHeader from "../components/PageHeader/PageHeader";
import ProductsTable from "../components/ProductsTable/ProductsTable";

const AllProducts = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader title="All Products" />
      <ProductsTable />
    </div>
  );
};

export default AllProducts;
