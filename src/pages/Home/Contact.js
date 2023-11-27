import emailjs from "@emailjs/browser";
import doodle from "../../assets/images/doodle.svg";

import { useRef } from "react";
import { useIsVisible } from "../../components/Detect";

import { useState } from "react";

const Contact = () => {
  const contact = useRef();
  const contactIsVisible = useIsVisible(contact);

  const [response, setResponse] = useState({
    display: false,
    status: "",
    message: "",
  });

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const changeState = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const service_id = process.env.REACT_APP_MAIL_SERVICE_ID;
  const template_id = process.env.REACT_APP_MAIL_TEMPLATE_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    let defautResponse = { display: false, status: "", message: "" };
    const reset = () => {
      setTimeout(() => {
        setResponse(defautResponse);
      }, 3000);
    };

    emailjs.send(service_id, template_id, form, "AN856oL-XEunQb8Lw").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setResponse({
          display: true,
          status: "success",
          message: "Merci, votre message a bien été envoyé",
        });
        reset();
      },
      function (error) {
        console.log("FAILED...", error);
        setResponse({
          display: true,
          status: "error",
          message: "Erreur, votre message n'a pas pû être envoyé",
        });
        reset();
      }
    );
  };


  return (
    <section id="Contact" className="w-full h-full mb-10" ref={contact}>
      <div className="flex items-center p-10 sm:p-20">
        <h2 className="text-2xl sm:text-4xl font-bold">Contact</h2>
        <div className="ml-6 w-40 sm:w-60 md:w-96 h-[1px] bg-blue-500 mt-2"></div>
      </div>
      {/*  max-w-screen-xl */}
      <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-bold leadi">
              Envoyez moi un message !
            </h2>
            <div className="dark:text-gray-400">Pas trop quand même...</div>
          </div>
          <img
            // ref={contact}
            src={doodle}
            alt=""
            className={`transition-all duration-300 delay-100 ${
              contactIsVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            } p-6 h-52 md:h-64`}
          />
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Nom
            </label>
            <input
              id="from_name"
              type="text"
              placeholder=""
              className="mt-2 w-full p-3 rounded dark:bg-gray-800 border border-blue-400 border-1 outline-none"
              value={form.from_name}
              onChange={(e) => changeState(e)}
            />
          </div>
          <div>
            <label htmlFor="from_email" className="text-sm">
              Email
            </label>
            <input
              id="from_email"
              type="email"
              className="mt-2 w-full p-3 rounded dark:bg-gray-800 border border-blue-400 border-1 outline-none"
              value={form.from_email}
              onChange={(e) => changeState(e)}
            />
          </div>
          <div className="">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="mt-2 w-full p-3 rounded dark:bg-gray-800 border border-blue-400 border-1 outline-none"
              value={form.message}
              onChange={(e) => changeState(e)}
            ></textarea>
          </div>
          {response.display && (
            <div
              className={`response ${
                response.status === "error"
                  ? "bg-red-100 border border-red-400 text-red-700"
                  : "bg-green-100 border border-green-400 text-green-700"
              } px-4 py-3 rounded relative`}
              role="alert"
            >
              <span className="block sm:inline">{response.message}</span>
            </div>
          )}
          <button
            onClick={(e) => sendEmail(e)}
            type="submit"
            className="w-full p-3 text-sm font-bold tracki uppercase rounded hover:bg-blue-700 bg-blue-500 dark:text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
