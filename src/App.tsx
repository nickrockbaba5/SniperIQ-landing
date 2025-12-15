import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import DisclaimerPage from './pages/DisclaimerPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/disclaimer" element={<DisclaimerPage />} />
      {/* Redirect research and screener to app */}
      <Route path="/research/*" element={<RedirectToApp path="research" />} />
      <Route path="/screener" element={<RedirectToApp path="screener" />} />
    </Routes>
  )
}

function RedirectToApp({ path }: { path: string }) {
  window.location.href = 'https://app.sniperiq.ai/' + path
  return null
}

export default App
