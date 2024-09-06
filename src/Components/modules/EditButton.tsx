"use client";

import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Select, Space } from "antd";
import { CategoryType } from "@/models/Category";
import { FiChrome } from "react-icons/fi";
import toast from "react-hot-toast";
import { revalidatePathAction } from "@/actions/actions";
import { CiEdit } from "react-icons/ci";

const EditButton: React.FC = ({ item }: { item: CategoryType }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [parentCategory, setParentCategory] = useState<CategoryType[]>([]);
  const [options, setOptions] = useState<{ value: string; label: string }[]>([
    { value: "", label: "" },
  ]);

  const [form, setForm] = useState({
    faName: "",
    name: "",
    parentCategory: "",
    images: [],
  });

  useEffect(() => {
    setForm({
      ...form,
      faName: item?.faName,
      name: item?.name,
      images: item?.images,
      parentCategory: item?.parentCategory?.toString(),
    });

    const fetchCategoryDetails = async () => {
      const res = await fetch(`/api/category`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      const data = await res.json();

      if (data.error) return;

      setParentCategory(data.data);
    };

    fetchCategoryDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const option = parentCategory.map((item) => {
      return {
        value: item._id.toString(),
        label: item.faName,
      };
    });
    setOptions([...option, { value: "", label: "بدون والد" }]);
  }, [parentCategory]);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    console.log(form);
    setConfirmLoading(true);

    const res = await fetch("/api/category", {
      method: "PATCH",
      body: JSON.stringify({ id: item._id, ...form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.error) toast.error(data.error);
    if (data.message) {
      setOpen(false);
      setConfirmLoading(false);
      toast.success(data.message);
      revalidatePathAction("/dashboard", "layout");
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const onChange = (value: string) => {
    setForm({ ...form, parentCategory: value });
  };
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <Button
        type="dashed"
        size="small"
        style={{ fontSize: "12px" }}
        onClick={showModal}
      >
       <CiEdit/>
      </Button>
      <Modal
        title={`ویرایش دسته بندی ${item.faName}`}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            برگشت
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={confirmLoading}
            onClick={handleOk}
          >
            ثبت
          </Button>,
        ]}
      >
        <div className="py-3">
          <Space align="center">
            <Input
              onChange={inputChangeHandler}
              value={form.faName}
              name="faName"
              style={{ fontSize: "12px" }}
              placeholder="نام فارسی"
            />
            <Input
              onChange={inputChangeHandler}
              value={form.name}
              name="name"
              style={{ fontSize: "12px" }}
              placeholder="نام انگلیسی"
            />
            <Select
              style={{ minWidth: "140px" }}
              showSearch
              placeholder="انتخاب دسته بندی والد"
              optionFilterProp="label"
              onChange={onChange}
              // onSearch={onSearch}
              value={form.parentCategory}
              options={options}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
            />
          </Space>
        </div>
      </Modal>
    </>
  );
};

export default EditButton;
