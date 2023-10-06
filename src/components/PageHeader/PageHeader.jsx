const PageHeader = ({ title }) => {
  return (
    <h2 className="text-purple-600 font-semibold my-6 px-4 py-1 text-xl border border-dashed border-purple-600">
      {title}
    </h2>
  );
};

export default PageHeader;
