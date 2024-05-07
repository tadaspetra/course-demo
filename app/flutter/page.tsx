"use client";
import { type Section } from "course-kit";
import "course-kit/dist/index.css";
import dynamic from "next/dynamic";

// No SSR for Course component if it uses browser-specific objects
const DynamicCourse = dynamic(
  () => import("course-kit").then((mod) => mod.Course),
  {
    ssr: false,
  }
);

import React from "react";
import course from "./course.json";

export default function Home() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="dark flex flex-col w-full">
      <div className="w-screen h-screen coursekit-dark">
        {isClient ? (
          <DynamicCourse
            id={parseInt(course.id)}
            lessons={course.lessons as Section[]}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
