import { FaShieldAlt, FaHeadset, FaUsers } from "react-icons/fa";
import Card from "./Card";

const Commitments = () => {
  const cards = [
    {
      icon: <FaHeadset />,
      title: "7/24 Cam Balkon Destek",
      description:
        "Kayaşehir cam balkon hizmetlerinde 7/24 destekle her zaman yanınızdayız.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Garantili Cam Balkon Hizmeti",
      description:
        "Kayaşehir'de garantili cam balkon çözümleriyle uzun ömürlü kalite sunuyoruz.",
    },
    {
      icon: <FaUsers />,
      title: "10 Bin+ Mutlu Müşteri",
      description:
        "15 yıllık tecrübeyle İstanbul'da 10.000’den fazla mutlu müşteri referansına sahibiz.",
    },
  ];

  return (
    <section
      className="relative w-full max-w-screen-xl mx-auto  bottom-20 grid grid-cols-1 gap-6 
     lg:grid-cols-3 px-4"
      aria-label="Taahhütler"
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default Commitments;
