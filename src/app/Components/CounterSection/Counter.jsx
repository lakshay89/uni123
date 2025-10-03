"use client";
import { useEffect, useState } from "react";
import { FaDumbbell, FaCrown, FaDownload, FaSmile } from "react-icons/fa";
import "./counter.css";

const counters = [
  {
    id: 1,
    icon: <FaDumbbell className="text-dark" />,
    number: 32,
    label: "Free Widgets",
    bg: "box-purple",
  },
  {
    id: 2,
    icon: <FaCrown className="text-primary" />,
    number: 43,
    label: "Premium Widgets",
    bg: "box-teal",
  },
  {
    id: 3,
    icon: <FaDownload className="text-dark" />,
    number: 1000,
    label: "Downloads",
    bg: "box-pink",
  },
  {
    id: 4,
    icon: <FaSmile className="text-warning" />,
    number: 300,
    label: "Happy Clients",
    bg: "box-yellow",
  },
];

export default function CounterSection() {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < counters[i].number
            ? count + Math.ceil(counters[i].number / 30)
            : counters[i].number
        )
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="counter-main d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side text */}
          <div className="col-md-5 counterCol-5 text-white mb-4 mb-md-0">
            <h2 className="counter-heading ">Uniform Vala</h2>
            <p className="counter-subtext">
            Uniform Wala is a leading uniform manufacturer providing customized solutions for schools, hotels, healthcare, and corporate sectors. Our dedication to quality and timely delivery has made us the preferred choice for thousands of happy clients across India.
            </p>
          </div>

          {/* Right side counters */}
          <div className="col-md-7">
            <div className="row g-3">
              {counters.map((item, i) => (
                <div key={item.id} className="col-6">
                  <div className={`counter-box ${item.bg}`}>
                    <div className="icon ">{item.icon}</div>
                    <h3 className="counter-number">{counts[i]}+</h3>
                    <p className="counter-label">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
