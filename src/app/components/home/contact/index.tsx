"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePortfolioData } from "@/utils/hooks";

const Contact = () => {
  const { data, loading } = usePortfolioData();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const reset = () => {
    formData.name = "";
    formData.number = "";
    formData.email = "";
    formData.message = "";
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = data?.contact?.email || "dendysaptoadi160@gmail.com";

    fetch(`https://formsubmit.co/ajax/${email}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        number: formData.number,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setSubmitted(result.success);
        reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (loading) {
    return (
      <section className="no-print">
        <div className="container">
          <div className="pt-16 md:pt-32 pb-20">
            <p className="text-secondary">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  const contact = data?.contact;
  const socialLinks = [
    { title: "LinkedIn", href: contact?.linkedin || "#" },
    { title: "GitHub", href: contact?.github || "#" },
  ];

  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Contact Me</h2>
            <p className="text-xl text-orange-500">( 05 )</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-7 sm:gap-12">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="label">
                      Name *
                    </label>
                    <input
                      required
                      className="input"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="number" className="label">
                      Phone *
                    </label>
                    <input
                      required
                      className="input"
                      id="number"
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="label">
                    Email *
                  </label>
                  <input
                    required
                    className="input"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="label">
                    Message *
                  </label>
                  <textarea
                    required
                    className="input"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>
                {submitted && (
                  <div className="flex items-center gap-2">
                    <Image
                      src={getImgPath("/images/icon/success-icon.svg")}
                      alt="success-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-secondary">
                      Great!!! Email has been Successfully Sent. We will get in
                      touch asap.
                    </p>
                  </div>
                )}
                <button
                  type="submit"
                  className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                >
                  <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-300">
                    Send Now
                  </span>
                </button>
              </div>
            </form>
            <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end">
              <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                {socialLinks.map((link, index) => {
                  return (
                    <div key={index}>
                      <Link
                        className="text-base sm:text-lg font-normal text-secondary hover:text-primary"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                {contact && (
                  <>
                    <Link
                      href={`mailto:${contact.email}`}
                      className="text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary"
                    >
                      {contact.email}
                    </Link>
                    <Link
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary"
                    >
                      {contact.phone}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
