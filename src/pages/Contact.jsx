import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const Contact = () => {
  const formRef = useRef();

  const submit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4rp7dm8",
        "template_qm3j8l6",
        formRef.current,
        "CPV9LcNk1EXeN0DOy",
      )
      .then(
        () => {
          alert("Email send Successfully");
        },
        (err) => {
          console.error(err);
          alert("Email send Fail!");
        },
      );

    formRef.current.reset();

    console.log(formRef.current.name.value);
    console.log(formRef.current.email.value);
    console.log(formRef.current.message.value);
  };

  const center = {
    lat: 11.5996639,
    lng: 104.8853702,
  };

  return (
    <div>
      <div className="w-full md:w-4/5 shadow mx-auto my-4 md:p-5">
        <div className="bg-blue-100 w-2/5 m-auto p-5 rounded-lg shadow-lg">
          <h1 className="text-center font-bold text-4xl ">Contact Us</h1>
          <form ref={formRef} action="" onSubmit={submit} className="p-5">
            <div className="block mb-4">
              <label htmlFor="" className="mb-1.5 text-blue-500">
                User name *
              </label>
              <input
                name="name"
                className="w-full border-2 border-gray-700 rounded-md outline-0 py-2 px-3"
                type="text"
                placeholder="enter name ....."
              />
            </div>
            <div className="block mb-4">
              <label htmlFor="" className="mb-1.5 text-blue-500">
                Email *
              </label>
              <input
                name="email"
                className="w-full border-2 border-gray-700 rounded-md outline-0 py-2 px-3"
                type="email"
                placeholder="enter email ....."
              />
            </div>
            <label htmlFor="" className="mb-1.5 text-blue-500">
              Message
            </label>
            <textarea
              name="message"
              id=""
              className="w-full  border-2 h-25"
              placeholder="Message...."
            ></textarea>
            <button className="py-3 px-7 bg-blue-700 text-gray-100 font-bold mt-3 cursor-pointer hover:bg-indigo-700 transition-all duration-75">
              Send
            </button>
          </form>
        </div>

        <div className="bg-blue-300">
          <LoadScript googleMapsApiKey="">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "500px" }}
              center={center}
              zoom={20}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default Contact;
