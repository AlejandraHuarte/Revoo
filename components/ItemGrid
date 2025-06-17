// components/ItemGrid.tsx

import Image from "next/image";

const items = [
  {
    title: "Canon Camera",
    price: "€5/day",
    image: "/items/camera.jpg",
  },
  {
    title: "Party Speaker",
    price: "€3/day",
    image: "/items/speaker.jpg",
  },
  {
    title: "Iron",
    price: "€2/day",
    image: "/items/iron.jpg",
  },
  {
    title: "Fan",
    price: "€2/day",
    image: "/items/fan.jpg",
  },
  {
    title: "Tripod",
    price: "€4/day",
    image: "/items/tripod.jpg",
  },
];

export default function ItemGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border border-gray-200 p-4 shadow hover:shadow-md transition"
        >
          <div className="w-full h-40 relative rounded-lg overflow-hidden mb-3">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-md font-semibold">{item.title}</h3>
          <p className="text-sm text-purple-600">{item.price}</p>
        </div>
      ))}
    </div>
  );
}
