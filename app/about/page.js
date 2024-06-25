import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        <Link className="cursor-pointer px-1 border-2 border-gray-800" href="/about/1">Yash</Link>
        <br></br>
        <Link className="cursor-pointer border-gray-800 px-1 border-2" href="/about/2">Vaibhav</Link>
        <br></br>
        <Link className="cursor-pointer border-gray-800 px-1 border-2" href="/about/3">Suresh</Link>
        <br></br>
      </div>
    </div>
  );
};

export default About;
