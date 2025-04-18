import CardService from "../../fragments/CardService";
import servicesData from "../../../data/servicesData";

const ServicesSection = () => {
  return (
    <section className="bg-secondary text-main px-10 py-40">
      <h1 className="font-orbitron font-bold text-5xl leading-19">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 justify-items-center">
        {servicesData.map((service, index) => {
          // Jika card terakhir dan di desktop, buat dia span 3 dan posisikan di tengah
          const isLastItem =
            servicesData.length % 3 === 1 && index === servicesData.length - 1;

          return (
            <div
              key={service.id}
              className={`
                w-full 
                ${isLastItem ? "lg:col-span-3 lg:flex lg:justify-center" : ""}
              `}
            >
              <CardService {...service} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
