const Edit = ({ params }) => {
  console.log(params);
  return (
    <div>
      edit - {params.categoryId}
      <h1> فرمی برای ادیت کردن دیتای دسته بندی ساخته میشه</h1>
    </div>
  );
};

export default Edit;
