"use client";

import { Course, Section } from "course-kit";
import "course-kit/dist/index.css";
import test from "./test.json";

export default function Home() {
  return (
    <main className="dark flex flex-col w-full">
      <div className="w-screen h-screen">
        <Course
          id={0}
          lessons={test.lessons as Section[]}
          canExit={false}
          darkMode={true}
        />
      </div>
    </main>
  );
}