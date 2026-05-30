
import ButtonNav from './components/ButtonNav'
import Footer from './components/Footer'
import Sra from './components/Sra'
import Topbar from './components/Topbar'
import { Uppertop } from './components/Uppertop'
import RegulatoryTopBar from './components/RegulatoryTopBar'
import CookieConsent from './components/CookieConsent'
import './globals.css'

import { Inter, Roboto } from 'next/font/google'

const roboto = Roboto({   weight: '400',subsets: ['latin'] })

export const metadata = {
  title: 'Jdssolicitors website',
  description: 'lawyers website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      

      <body className={roboto.className}>
        <RegulatoryTopBar/>
        <Uppertop/>
     
      <Topbar/>
        {children}
        <ButtonNav/>
        
        <Footer/>
        <CookieConsent/>
       
        </body>
    </html>
  )
}
