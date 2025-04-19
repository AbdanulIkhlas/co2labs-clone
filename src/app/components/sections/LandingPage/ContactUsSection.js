import ContactUsCard from "../../fragments/ContactUsCard";
import Image from "next/image";

const ContactUsSection = () => {
  return (
    <section className="bg-main px-10 py-20 space-y-10 lg:px-30">
      <div className="mb-16 md:mt-4 md:flex md:justify-between md:items-center md:mb-0">
        <h1 className="font-orbitron text-5xl font-bold leading-19">
          Contact Us
        </h1>
        {/* Icon Section */}
        <div className="flex justify-center space-x-10 mt-10 text-3xl md:gap-10 md:mt-0">
          <a
            href="https://www.google.com/maps/place/Coding+Collective/@1.2752206,103.8001463,18z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/svg/address.svg"
              alt="Location Icon"
              width={40}
              height={40}
              className="hover:opacity-80 transition-opacity md:w-11"
            />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=info@co2labs.com&tf=cm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/svg/email.svg"
              alt="Email Icon"
              width={40}
              height={40}
              className="hover:opacity-80 transition-opacity md:w-11"
            />
          </a>

          <a
            href="https://wa.me/6281234567890" // Ganti dengan nomor WA asli
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="svg/telephone.svg"
              alt="Phone Icon"
              width={40}
              height={40}
              className="hover:opacity-80 transition-opacity md:w-11"
            />
          </a>
        </div>
      </div>
      <div className="lg:flex lg:gap-6 lg:items-stretch lg:mt-8 xl:gap-26 xl:pb-4">
        {/* Contact Card */}
        <div className="w-full lg:w-1/2 flex ">
          <div className="flex-grow">
            <ContactUsCard />
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-10 w-full lg:w-1/2 flex">
          <div className="flex-grow">
            <div className="relative w-full h-40 lg:h-full">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.1900578780717!2d103.8001463!3d1.2752206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b27c7a1b85f%3A0xd6085c5205635a1c!2sCoding%20Collective!5e0!3m2!1sen!2ssg!4v1713439933312!5m2!1sen!2ssg"
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
