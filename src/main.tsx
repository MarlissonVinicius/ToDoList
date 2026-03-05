import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoApp from './ToDoApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoApp />
  </StrictMode>,
)
