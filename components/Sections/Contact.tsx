import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import emailjs from "emailjs-com";
import Spinner from "../Spinner/Spinner";

type Inputs = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type Props = {};

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const public_key = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const submitSuccess = "Thank you for contacting me.";
const submitError = "Sorry, an error occurred";

const Contact = (props: Props) => {
  const inputClass =
    "px-4 py-2 sm:px-6 sm:py-4 bg-black/80 text-white/80 placeholder:text-white/40 border-[1px] border-black h-full w-full";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const onSubmit: SubmitHandler<Inputs> = (data) => sendEmail(data);

  async function sendEmail(data: Inputs) {
    setLoading(true);
    setSubmitMessage("");
    try {
      if (serviceId && templateId && public_key) {
        const result = await emailjs.send(
          serviceId,
          templateId,
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
          },
          public_key
        );
        console.log(result);
      } else {
        throw new Error("Service ID, template ID, or public key is undefined.");
      }

      setSubmitMessage(submitSuccess);
    } catch (error) {
      setSubmitMessage(submitError);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="min-h-[70vh] lg:min-h-[30vh] py-20 px-4 relative bg-white mt-[-2px] "
    >
      <div className="min-h-[70vh] lg:min-h-[60vh] py-20 w-full flex flex-col justify-center gap-10 animate-div">
        <p className="text-4xl max-w-[1000px] mx-auto w-full">Contact Me.</p>
        {submitMessage && (
          <div
            className={`flex justify-center text-[11px] sm:text-lg max-w-[1000px] font-bold mx-auto w-full py-2 px-4 text-white animate-div-height ${
              submitMessage === submitSuccess ? "bg-green-500" : "bg-red-600"
            }`}
          >
            {submitMessage}
          </div>
        )}
        <div className="flex flex-col max-w-[1000px] mx-auto w-full gap-8">
          <form className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex flex-col flex-1 gap-6 sm:gap-10">
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Enter Name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: { value: /[A-Za-z]/i, message: "Invalid Name" },
                  })}
                />
                {errors.name && (
                  <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <input
                  placeholder="Enter Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Invalid Email",
                    },
                  })}
                  className={inputClass}
                />{" "}
                {errors.email && (
                  <ErrorMessage>{errors?.email?.message}</ErrorMessage>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <input
                  placeholder="Enter Phone"
                  {...register("phone", {
                    minLength: {
                      value: 8,
                      message: "Invalid phone number",
                    },
                    maxLength: { value: 12, message: "Invalid phone number" },
                  })}
                  className={inputClass}
                />
                {errors.phone && (
                  <ErrorMessage>{errors?.phone?.message}</ErrorMessage>
                )}
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-1 ">
              <textarea
                placeholder="Enter Message"
                {...register("message", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Character limit exceeded",
                  },
                })}
                className={`${inputClass} leading-normal resize-none overflow-auto min-h-[150px]`}
              />
              {errors.message && (
                <ErrorMessage>{errors?.message?.message}</ErrorMessage>
              )}
            </div>
          </form>
          <div className="flex justify-end sm:justify-center items-center">
            <button
              onClick={handleSubmit(onSubmit)}
              disabled={loading}
              className="w-fit px-5 sm:px-6 py-2 group hover:bg-black/80 focus:bg-black/80 hover:text-white focus:text-white mt-2 border-[1px] border-black/90 origin-right transition-all ease-linear duration-300"
            >
              {loading ? <Spinner /> : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
