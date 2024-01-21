import { About, Clients, Contact, FAQ, Hero, Partners, Pricing, Projects, Services } from "@/components";
import { MainLayout } from "@/layouts";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <MainLayout>
        <Hero />
        <About />
        <Services />
        {/* <Projects /> */}
        <Contact />
        <Pricing />
        <Clients />
        <Partners />
        <FAQ />
      </MainLayout>
    </main>
  );
}
