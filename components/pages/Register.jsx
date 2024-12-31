"use client";

import Link from "next/link";
import React, { useState } from "react";
import { registerUser } from "../server/register";
import { useRouter } from "next/navigation";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const router = useRouter();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    registerUser(formData)
      .then((data) => {
        router.push("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="mt-header layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="text-center mb-60 md:mb-30">
              <h1 className="text-30">Register</h1>
              <div className="text-18 fw-500 mt-20 md:mt-15">
                Let's create your account!
              </div>
              <div className="mt-5">
                Already have an account?{" "}
                <Link href="/login" className="text-accent-1">
                  Log In!
                </Link>
              </div>
            </div>

            <form
              onSubmit={handleFormSubmit}
              className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30"
            >
              <label className="">Username</label>
              <div className="form-input ">
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                  }}
                  placeholder="Username"
                />
              </div>

              <label className="">First Name</label>
              <div className="form-input">
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, firstname: e.target.value });
                  }}
                  placeholder="first name"
                />
              </div>

              <label className="l1">Last Name</label>
              <div className="form-input">
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, lastname: e.target.value });
                  }}
                  placeholder="last name"
                />
              </div>

              <label className="">Your Email</label>
              <div className="form-input">
                <input
                  type="email"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  placeholder="email"
                />
              </div>

              <label className="">Password</label>
              <div className="form-input">
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                  }}
                  placeholder="password"
                />
              </div>

              <button className="button -md -dark-1 bg-accent-1 text-white col-12 mt-30">
                Register
                <i className="icon-arrow-top-right ml-10"></i>
              </button>

              {/* <div className="relative line mt-50 mb-30">
                <div className="line__word fw-500">OR</div>
              </div>

              <div className="row y-gap-15">
                <div className="col">
                  <button
                    type="submit"
                    className="button -md -outline-blue-1 text-blue-1 col-12"
                  >
                    <i className="icon-facebook mr-10"></i>
                    Continue Facebook
                  </button>
                </div>

                <div className="col">
                  <button className="button -md -outline-red-1 text-red-1 col-12">
                    <i className="icon-google mr-10"></i>
                    Continue Google
                  </button>
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
