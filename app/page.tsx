import "course-kit/dist/index.css";

export default function Home() {
  return (
    <div className="dark flex flex-col w-full max-w-5xl mx-auto">
      <p className="text-center text-white mb-4">
        Environment Test CHANGE: {process.env.NEXT_PUBLIC_TEST || "Not set"}
      </p>
    </div>
  );
}
