"use client";

const ContactUsCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full mx-auto md:max-w-full md:mt-16 md:p-16 md:pb-15 lg:mt-10">
      <h2 className="text-2xl font-semibold mb-4 font-generalSans">Hi there, how can we help?</h2>
      <form className="space-y-4 md:mt-5 md:space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-gray-200 font-semibold ps-7 rounded-md placeholder-gray-400 focus:outline-none
          md:font-medium"
        />
        <input
          type="email"
          placeholder="Yourmail@example.com"
          className="w-full p-3 bg-gray-200 font-semibold ps-7 rounded-md placeholder-gray-400 focus:outline-none
          md:font-medium"
        />
        <textarea
          placeholder="Ask Our About Services"
          rows={3}
          className="w-full p-3 bg-gray-200 font-semibold ps-7 rounded-md placeholder-gray-400 focus:outline-none
          md:font-medium"
        ></textarea>

        <div className="mt-0">
          <p className="font-semibold mb-2 font-generalSans text-xl">Where Did You Hear About Us?</p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 font-generalSans font-medium leading-8">
            {[
              "Linkedin",
              "Instagram",
              "Job Ads",
              "Events and Seminars",
              "Other",
            ].map((option) => (
              <label
                key={option}
                className="flex items-center space-x-2 basis-1/4 min-w-fit md:basis-0 md:space-x-1 xl:basis-1/8"  
              >
                <input type="radio" name="referral" value={option} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-secondary text-white font-semibold rounded-lg px-4 py-2 mt-2 hover:bg-opacity-80 transition-all"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUsCard;
