import React from 'react'
import Header from '../organisms/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="flex justify-center mx-auto xl:max-w-3xl max-xl:max-w-3xl md:w-4/5 sm:w-4/5 xs:w-4/5 my-10">{children}</main>
    </>
  )
}

export default Layout
