import React from 'react'
import TitleWithSubTitle from '../molecules/TitleWithSubtitle'

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-[3%] pt-5">
      <TitleWithSubTitle />
    </header>
  )
}

export default Header
