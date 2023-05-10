import React from 'react'
import Header from '../organisms/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="flex justify-center mx-auto w-6/12 my-10">{children}</main>
    </>
  )
}

export default Layout
