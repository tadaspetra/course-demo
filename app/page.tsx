import "course-kit/dist/index.css";

export default function Home() {
  return (
    <div className="dark flex flex-col w-full max-w-5xl mx-auto">
      <h1 className="text-4xl text-center pt-20 pb-10 font-bold text-white">
        Agora Courses
      </h1>
      <p className="text-center text-white mb-4">
        Environment Test: {process.env.NEXT_PUBLIC_TEST || "Not set"}
      </p>
      <div className=" flex coursekit-dark">
        <a
          href="/nextjs"
          className="flex flex-col items-center hover:bg-neutral-800 rounded-lg shadow md:flex-row md:max-w-xl"
        >
          <img
            className="object-cover h-48 w-48 p-4"
            src="/nextjs.png"
            alt="NextJS"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              Video Call with Tokens
            </h5>
            <p className="mb-3 font-normal ">
              Learn to build a fully featured video call app using Agora and
              Next.js.
            </p>
          </div>
        </a>

        <a
          href="/flutter"
          className="flex flex-col items-center  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-neutral-800"
        >
          <img
            className="object-cover h-48 w-48 p-4"
            src="/flutter.png"
            alt="Flutter"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight ">
              Video Call with Tokens
            </h5>
            <p className="mb-3 font-normal ">
              Learn to build a fully featured video call app using Agora and
              Flutter.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
