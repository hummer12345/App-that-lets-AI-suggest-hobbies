import React from 'react'
import Button from '../atoms/Button'
import TitleWithSubTitle from '../molecules/TitleWithSubtitle'

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-[3%] pt-5">
      <TitleWithSubTitle />

      <Button
        text={'ログイン'}
        bgColor={'red'}
        onClick={() => console.log('test')}
      />
    </header>
  )
}

export default Header
