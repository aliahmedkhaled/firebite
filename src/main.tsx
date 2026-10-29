import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/cairo'
import '@fontsource-variable/bricolage-grotesque'
import './index.css'
import App from './App.tsx'
import { LangProvider } from './i18n/LangProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
)