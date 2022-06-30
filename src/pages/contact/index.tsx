import React, { useState } from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { client } from "../../apis/MicrocmsApi";
import Hero from "../../components/templates/Hero";
import Layout from "../../components/templates/layouts/Layout";
import Section from "../../components/templates/Section";

const index = () => {
  return (
    <Layout>
      <Hero title="CONTACT." />

      <Section title="Socialメディア">
        <div className="flex items-center justify-center ">
          <a
            href="https://twitter.com/Marine765_"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <AiFillTwitterCircle className="w-10 h-10 text-[#1da1f2]" />
          </a>
          <a
            href="https://github.com/gamari"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <AiFillGithub className="w-10 h-10" />
          </a>
        </div>
      </Section>

      <Form />
    </Layout>
  );
};

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleSend = async () => {
    const data = {
      name,
      email,
      subject,
      content,
    };

    if (!email || !subject || !content) {
      alert("メール・用件・内容は必須事項です。");
      return;
    }

    setDisabled(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.status != 200) {
      alert("error");
    } else {
      alert("送信が完了しました。");
      resetValue();
    }

    setDisabled(false);
  };

  const resetValue = () => {
    setName("");
    setEmail("");
    setSubject("");
    setContent("");
  };

  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6">
            お問い合わせフォーム
          </h2>

          <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
            以下のフォームからお問い合わせお願い致します。
          </p>
        </div>

        <div className="grid max-w-screen-md gap-4 mx-auto sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="first-name"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              お名前
            </label>
            <input
              name="first-name"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              メールアドレス*
            </label>
            <input
              name="email"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="subject"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              用件*
            </label>
            <input
              name="subject"
              className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
            >
              内容*
            </label>
            <textarea
              name="message"
              className="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button
              className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 md:text-base"
              onClick={async () => {
                handleSend();
              }}
              disabled={disabled}
            >
              送信する
            </button>

            <span className="text-sm text-gray-500">*必須事項</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
