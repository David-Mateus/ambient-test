import cardlist from "./data";
import Image from "next/image";
export default function Card() {
  return (
    <>
    
      <div>
        <div className="grid lg:grid-cols-1">
          {cardlist.map((card) => (
            <Image
            src={card.img}
             width={180} 
             height={180} 
             alt="Logo"/>

            // <p>{card.title}</p>
          ))}
        </div>
      </div>
    </>
  );
}
