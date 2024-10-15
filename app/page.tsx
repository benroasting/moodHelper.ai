import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center  text-white/80">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-2">Track Your Mood</h1>
        <p className="text-2xl mb-2 text-gray-500">
          track how you are feeling from day-to-day with the help of ai
        </p>
        <div>
          <Link href="/journal">
            <button className="bg-amber-400 px-4 py-2 rounded-lg text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
