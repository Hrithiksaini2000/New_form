import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { Form } from './components/Form.jsx'
import { Newform } from './components/New_form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Form /> */}
    <Newform/>
  </StrictMode>,
)
