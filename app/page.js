"use client";

import { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
      );
      const data = await res.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  const filteredProducts =
    filter === "available"
      ? products.filter((product) => product.available)
      : products;

  return (
    <main className="bg-charcoal-black  mt-24 p-7 rounded-md mx-auto max-w-[640px] lg:max-w-[1280px] md:mt-32 ">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className=" text-ivory-cream text-4xl font-bold">Our Collection</h1>
        <p className="text-steel-blue-grey md:text-center md:max-w-[450px]">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="flex items-center justify-evenly gap-6">
          <Button selected={filter === "all"} onClick={() => setFilter("all")}>
            All Products
          </Button>
          <Button
            selected={filter === "available"}
            onClick={() => setFilter("available")}
          >
            Available Now
          </Button>
        </div>
      </div>
      {/* Coffee List */}
      <div className="grid gap-6 items-center justify-center my-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            rating={product.rating}
            votes={product.votes}
            popular={product.popular}
            available={product.available}
          />
        ))}
      </div>
    </main>
  );
}
