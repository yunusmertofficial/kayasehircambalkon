import { FaShieldAlt, FaHeadset, FaUsers } from "react-icons/fa";
import Card from "./Card";

const Commitments = () => {
  const cards = [
    {
      icon: <FaShieldAlt />,
      title: "Garantili Hizmet",
      description:
        "Verdiğimiz hizmetler doğrultusunda belirli periyotlarla garanti sunuyoruz.",
    },
    {
      icon: <FaHeadset />,
      title: "7/24 Destek",
      description:
        "Acil veya normal durumlar için 7/24 destek hizmeti sunuyoruz.",
    },
    {
      icon: <FaUsers />,
      title: "10 Bin+ Mutlu Müşteri",
      description:
        "İstanbul'da 15 yıllık deneyimimizle 10 bin mutlu müşteri referansına ulaştık.",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 gap-6 
     lg:grid-cols-3 px-4"
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Commitments;
