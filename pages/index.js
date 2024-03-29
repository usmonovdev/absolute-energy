import { About, Clients, Contact, FAQ, Hero, Partners, Pricing, Projects, Services, UsedGenerators } from "@/components";
import { MainLayout } from "@/layouts";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <MainLayout navUrlsColorIsBlack={true}>
        <Hero />
        <About />
        <Partners />
        <UsedGenerators />
        <Services />
        <Projects />
        <Contact />
        <Pricing />
        <Clients />
        <FAQ />
      </MainLayout>
    </main>
  );
}
