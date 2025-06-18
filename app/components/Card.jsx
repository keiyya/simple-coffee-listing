import Image from "next/image";

function Card({ name, image, price, rating, votes, popular, available }) {
  return (
    <div>
      <Image src={image} width={260} height={160} alt={name} />
    </div>
  );
}

export default Card;
