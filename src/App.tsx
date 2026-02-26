import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import DisclaimerPage from './pages/DisclaimerPage'
import RefundPage from './pages/RefundPage'
import EngineStackPage from './pages/EngineStackPage'
import ComparePage from './pages/ComparePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/disclaimer" element={<DisclaimerPage />} />
      <Route path="/refund-policy" element={<RefundPage />} />
      <Route path="/engines" element={<EngineStackPage />} />
      <Route path="/compare" element={<ComparePage />} />
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
