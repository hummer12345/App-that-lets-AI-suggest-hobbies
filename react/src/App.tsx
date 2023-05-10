import React from 'react'
import Form from '../src/components/organisms/Form'
import Header from '../src/components/organisms/Header'
import HeadLine from './components/atoms/Headline'

import './App.css'

const App: React.FC = () => (
  <div className="App">
    <Header />
    <HeadLine
      text={'入力された内容をもとにAIがあなたに合いそうな趣味を提案します！'}
    />
    <Form />
  </div>
)

export default App
