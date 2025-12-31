import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8 lg:p-16">
      <main className="max-w-5xl mx-auto space-y-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </main>
    </div>
  );
}
