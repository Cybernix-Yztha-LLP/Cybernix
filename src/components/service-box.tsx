
import { BorderBeam } from "../components/ui/border-beam";

const Services = () => {
const services = [
    {
      title: "Cybersecurity Solutions",
      description:
        "Stay one step ahead of cyber threats with our advanced cybersecurity solutions. We provide comprehensive threat detection, penetration testing, and security audits to identify and neutralize risks, ensuring your systems and data remain secure at all times.",
    },
    {
      title: "Security Consultations",
      description:
        "Take control of your cybersecurity strategy with our expert consultations. We provide personalized advice to businesses, enterprises, and individuals, helping you identify vulnerabilities, implement robust defenses, and stay compliant with industry standards to safeguard your assets",
    },
    {
      title: "Cybersecurity Training",
      description:
        "Empower your team with the knowledge and skills needed to defend against emerging cyber threats. From ethical hacking to risk management, our hands-on training and certification programs are tailored to equip individuals and organizations with the expertise to thrive in today’s security landscape",
    },
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black dark:text-white">
          Our Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 md:px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            {/* Border Beam */}
            <BorderBeam size={250} duration={12} delay={index * 2} />
            {/* Content */}
            <h3 className="text-xl text-center font-semibold mb-4 text-black dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
