import React from 'react'
import SubTitle from '../atoms/SubTitle'
import Title from '../atoms/Title'

const TitleWithSubTitle: React.FC = () => {
  return (
    <div className="flex">
      <Title />
      <SubTitle />
    </div>
  )
}

export default TitleWithSubTitle
