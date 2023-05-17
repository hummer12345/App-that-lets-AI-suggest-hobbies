import React from 'react'
import Form from '../src/components/organisms/Form'
import Layout from '../src/components/templates/Layout'

import './App.css'

const App: React.FC = () => (
  <div>
    <Layout>
      <Form
        SuggestHobby={function ({
          currentInterest1,
          currentInterest2,
          pastInterest1,
          pastInterest2,
          HoursAvailablePerDay,
          budget,
        }: {
          currentInterest1: string
          currentInterest2: string
          pastInterest1: string
          pastInterest2: string
          HoursAvailablePerDay: number
          budget: number
        }): void {
          throw new Error('Function not implemented.')
        }}
        postReqLoding={false}
      />
    </Layout>
  </div>
)

export default App
