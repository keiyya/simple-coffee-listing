"use client";

import { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCoffees(data);
      });
  }, []);

  return (
    <main className="bg-charcoal-black  mt-24 p-7 rounded-md mx-auto max-w-[640px]">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className=" text-ivory-cream text-4xl font-bold">Our Collection</h1>
        <p className="text-steel-blue-grey">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="flex items-center justify-evenly gap-6">
          <Button>All Products</Button>
          <Button>Available Now</Button>
        </div>
      </div>
      {/* Coffee List */}
      <div className="grid">
        {coffees.map((coffee) => (
          <Card
            key={coffee.id}
            name={coffee.name}
            image={coffee.image}
            price={coffee.price}
            rating={coffee.rating}
            votes={coffee.votes}
            popular={coffee.popular}
            available={coffee.available}
          />
        ))}
      </div>
    </main>
  );
}
