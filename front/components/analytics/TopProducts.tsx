"use client";

import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Mobile App",
    rating: 4.9,
    reviews: 3245,
  },
  {
    id: 2,
    name: "Website",
    rating: 4.8,
    reviews: 2810,
  },
  {
    id: 3,
    name: "Dashboard",
    rating: 4.7,
    reviews: 2450,
  },
  {
    id: 4,
    name: "Support",
    rating: 4.6,
    reviews: 2100,
  },
];

export default function TopProducts() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-xl font-bold">
          Top Rated Products
        </h2>

        <p className="text-sm text-slate-500">
          Based on customer reviews
        </p>
      </div>

      <div className="space-y-5">

        {products.map((product) => (

          <div
            key={product.id}
            className="flex items-center justify-between rounded-xl border border-slate-100 p-4 hover:bg-slate-50"
          >

            <div>

              <h3 className="font-semibold">
                {product.name}
              </h3>

              <p className="text-sm text-slate-500">
                {product.reviews.toLocaleString()} Reviews
              </p>

            </div>

            <div className="flex items-center gap-2">

              <Star
                className="fill-yellow-400 text-yellow-400"
                size={18}
              />

              <span className="font-bold">
                {product.rating}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}