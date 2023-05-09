import React from 'react'
import Header from '../src/components/organisms/Header'
import HeadLine from './components/atoms/Headline'
import './App.css'

const App: React.FC = () => (
  <div className="App">
    <Header />
    <HeadLine
      text={'入力された内容をもとにAIがあなたに合いそうな趣味を提案します！'}
    />
  </div>
)

export default App
