import Image from "next/image";

function Card({ name, image, price, rating, votes, popular, available }) {
  return (
    <div className="relative">
      <Image
        src={image}
        width={260}
        height={160}
        className="rounded-md "
        alt={name}
      />
      {popular ? (
        <p className="absolute px-3 py-1 bg-golden-sand rounded-xl font-semibold top-3 left-2 text-sm">
          Popular
        </p>
      ) : (
        ""
      )}
      <div className="flex items-center justify-between my-2">
        <h2 className="text-ivory-cream font-bold text-xl">{name}</h2>
        <p className="bg-mint-green px-3 py-1 rounded-md font-bold">{price}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex">
          {rating ? (
            <Image src={"Star_fill.svg"} width={20} height={20} alt="rating" />
          ) : (
            <Image src={"Star.svg"} width={20} height={20} alt="rating" />
          )}
          <p className="text-ivory-cream font-semibold">
            {rating} <span className="text-slate-grey">({votes})</span>
          </p>
        </div>
        {!available ? <p className="text-coral-red">Sold Out</p> : ""}
      </div>
    </div>
  );
}

export default Card;

{
  /* <Image src={"Star.svg"} width={20} height={20} alt="rating" />; */
}
