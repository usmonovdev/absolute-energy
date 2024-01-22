import React from 'react'
import { Inter } from "next/font/google";
import { MainLayout } from '@/layouts';
import { ContactPageHero } from '@/components';
const inter = Inter({ subsets: ["latin"] });

const contact = () => {
  return (
    <main className={`${inter.className}`}>
      <MainLayout navUrlsColorIsBlack={true}>
        <ContactPageHero />
      </MainLayout>
    </main>
  )
}

export default contact