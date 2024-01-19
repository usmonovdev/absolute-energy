import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin-ext"] });

export default function Home() {
  return (
    <main
      className={`${lexend.className}`}
    >
      absolute energy
    </main>
  );
}
