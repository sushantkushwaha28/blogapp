import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeContextProvider, ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <ThemeContextProvider>
        <div className='container'>
          <div className='wrapper'>
            <Navbar/>{children}
            <Footer/></div>
          </div>
          </ThemeContextProvider>
          </body>
    </html>
  )
}
