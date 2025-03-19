import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './routes/App.tsx';
import Authentication from './routes/Authentication.tsx';
import { AuthContextWrapper } from './context/AuthContext.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <App/> } />
          <Route path='authenticate' element={ <Authentication />  } />
        </Routes>
      </BrowserRouter>
    </AuthContextWrapper>
  </StrictMode>,
)
