import { NextPage } from "next";
import Router from "next/router";
import React, { useState } from "react";
import Layout from "../../components/templates/layouts/Layout";

const Login: NextPage = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ id, password }),
    });

    console.log(response);

    if (response.status == 201) {
      Router.push("/blog/create");
    }
  };

  return (
    <Layout>
      <div>
        <div className="py-6 bg-white sm:py-8 lg:py-12">
          <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-8">
              Login
            </h2>

            <div className="max-w-lg mx-auto border rounded-lg">
              <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label
                    htmlFor="id"
                    className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                  >
                    id
                  </label>
                  <input
                    name="id"
                    className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
                    value={id}
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 focus:ring ring-indigo-300"
                  />
                </div>

                <button
                  className="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-gray-800 rounded-lg outline-none hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 md:text-base"
                  onClick={handleLogin}
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
