import React from 'react'
import { Inter } from "next/font/google";
import { MainLayout } from '@/layouts';
import { ContactPageHero, FormContact } from '@/components';
const inter = Inter({ subsets: ["latin"] });

const contact = () => {
  return (
    <main className={`${inter.className}`}>
      <MainLayout navUrlsColorIsBlack={true}>
        <ContactPageHero />
        <FormContact />
      </MainLayout>
    </main>
  )
}

export default contact