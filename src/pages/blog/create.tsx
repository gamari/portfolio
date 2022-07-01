import { GetServerSideProps } from "next";
import React, { useState } from "react";
import Button from "../../components/atoms/Button";
import Markdown from "../../components/atoms/markdown/Markdown";
import Layout from "../../components/templates/layouts/Layout";

const create = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Layout>
      <div className="h-32"></div>

      <div className="w-full">
        <div className="flex items-center justify-center">
          <div className="w-[40%]">
            <InputArea value={value} setValue={setValue} />
          </div>

          <div className="hidden md:block w-[40%] bg-white border-2 border-black py-2">
            <Markdown content={value} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const InputArea = ({ value, setValue }: any) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handlePost = async () => {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ title, description, content: value }),
    });

    if (response.status == 201) {
      alert("投稿が完了しました。");
    } else {
      alert("投稿に失敗しました。");
    }
  };

  return (
    <div>
      <h2></h2>
      <div className="mb-10">
        <label htmlFor="">タイトル</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="border-[1px] border-black"
        />
      </div>

      <div className="mb-10">
        <label htmlFor="">説明</label>
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="border-[1px] border-black"
        />
      </div>
      <div>
        <label htmlFor="">内容</label>
        <textarea
          name="value"
          className="border-[1px] border-black w-[80%]"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></textarea>
      </div>

      <Button onClick={handlePost}>送信</Button>
      <Button>保存</Button>
    </div>
  );
};

export default create;
