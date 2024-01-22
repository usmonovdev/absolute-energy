import { AboutPageHero, AboutWithPhoto, OurTasks } from "@/components";
import { MainLayout } from "@/layouts";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const about = () => {
  return (
    <main
    className={`${inter.className}`}
    >
      <MainLayout navUrlsColorIsBlack={true}>
        <AboutPageHero />
        <AboutWithPhoto />
        <OurTasks />
      </MainLayout>
    </main>
  )
}

export default about