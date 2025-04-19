import CardService from "../../fragments/CardService";
import servicesData from "../../../data/servicesData";

const ServicesSection = () => {
  return (
    <section className="bg-secondary text-main px-12 py-40 md:px-24 lg:px-14 xl:px-38">
      <h1 className="font-orbitron font-bold text-5xl md:text-5xl leading-18 text-left mb-5 md:text-center xl:text-left
      xl:ps-4">
        Our Services
      </h1>

      <div className="flex flex-wrap justify-center gap-3">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] max-w-sm"
          >
            <CardService {...service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
