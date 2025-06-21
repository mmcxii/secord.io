import Image from "next/image";

const Home: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0">
        <Image
          alt="A sunset over the hills of Montalcino."
          src="/hero.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 z-1 flex flex-col items-center justify-center gap-4 text-center text-white">
        <h2 className="text-6xl">Nich Secord</h2>
        <p>Is a Software Engineer</p>
      </div>
    </>
  );
};

export default Home;
