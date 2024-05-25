import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  App,
  Hero,
  About,
  TechStack,
  Projects,
  Startup,
  ContactMe,
} from '../src/sections'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <section className="px-10 py-20 bg-slate-200">
      <section>
        <App />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <TechStack />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Startup />
      </section>
    </section>
    <section className='bg-black px-10 '>
      <ContactMe />
    </section>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
