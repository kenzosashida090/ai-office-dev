import { useState } from 'react'

import './App.css'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout isPanelOpen={true}>
      <section className='agents'>

        HEllo1

      </section>
      <section className='office'>

        HEllo2

      </section>
      <section className='panel'>
        HEllo3
      </section>
    </Layout>
  )
}

export default App
