import { User2 } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="w-full flex flex-col  p-16 gap-10">
      <div className="flex text-[#565656] ">
        <div className="border rounded-full items-center flex p-1 gap-2">
          <User2 size={15} />
          <h1 className="font-normal text-xs">ABOUT</h1>
        </div>
      </div>
      <div className="">
        <h1 className="font-normal text-6xl text-[#fff] mb-10">
          Im a <span className="text-primary-color">Matheus</span>, <br /> im a
          fullstack developer
        </h1>
        <h2>email</h2>
        <div className="form-control gap-5">
          <label className="label">
            <span className="label-text">Your bio</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-5"
            placeholder="Bio"
          ></textarea>
          <textarea
            className="textarea textarea-bordered h-5"
            placeholder="Bio"
          ></textarea>
          <textarea
            className="textarea textarea-bordered h-5"
            placeholder="Bio"
          ></textarea>
          <textarea
            className="textarea textarea-bordered h-5"
            placeholder="Bio"
          ></textarea>
          <textarea
            className="textarea textarea-bordered h-5"
            placeholder="Bio"
          ></textarea>
          <textarea
            className="textarea textarea-bordered h-5"
            placeholder="Bio"
          ></textarea>

          <button className="btn btn-outline btn-warning w-1/5">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
