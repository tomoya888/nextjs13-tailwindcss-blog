"use client";

import { useRouter } from "next/navigation";
import React from "react";

type UpdateButtonProps = {
  id: string;
};

const UpdateButton = ({ id }: UpdateButtonProps) => {
  const router = useRouter();

  const handleUpdate = async () => {

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${API_URL}/api/${id}`, {
      method: "Update",
    });

    router.push("/");
    router.refresh();
  };
  return (
    <div
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer"
      onClick={handleUpdate}
    >
      更新
    </div>
  );
};

export default UpdateButton;
