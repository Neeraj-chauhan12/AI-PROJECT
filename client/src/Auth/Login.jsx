import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [mode, setMode] = useState('login')
      const [isAuthenticated, setIsAuthenticated] = useState(false)
      const [formData, setFormData] = useState({ name: '', email: '', password: '' })
      const [message, setMessage] = useState('')
    
      const googleClientId = import.meta.env.CLIENT_ID
      console.log('Google Client ID:', googleClientId) // Log the Google Client ID to verify it's being read correctly

      const handleSubmit = (event) => {
    event.preventDefault()

    if (mode === 'signup' && !formData.name.trim()) {
      setMessage('Please enter your name to create an account.')
      return
    }

    if (!formData.email.trim() || !formData.password.trim()) {
      setMessage('Please fill in your email and password.')
      return
    }

    setMessage(mode === 'login' ? 'Welcome back! You are now signed in.' : 'Account created successfully!')
    setIsAuthenticated(true)
  }

  const handleGoogleSuccess = () => {
    setMessage('Google sign-in successful.')
    setIsAuthenticated(true)
  }

  const handleGoogleError = () => {
    setMessage('Google sign-in was cancelled or failed.')
  }

  if (isAuthenticated) {
    return (
      <HomeScreen
        name={formData.name || 'there'}
        onLogout={() => {
          setIsAuthenticated(false)
          setFormData({ name: '', email: '', password: '' })
          setMessage('')
        }}
      />
    )
  }
   return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.25),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#111827_40%,_#312e81_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-2xl shadow-black/40 backdrop-blur-xl lg:flex-row">
        <div className="flex flex-1 flex-col justify-between bg-gradient-to-br from-fuchsia-600/25 via-violet-700/15 to-cyan-500/20 p-8 lg:p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Welcome to AI SaaS</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Create your account and unlock a smarter experience.
            </h1>
            <p className="mt-4 max-w-lg text-lg text-slate-200">
              Beautiful authentication, fast setup, and a polished home experience for your next product.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">Why users love it</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Elegant design with vibrant, modern colors</li>
              <li>• Simple login and signup flow</li>
              <li>• Google sign-in included for quick access</li>
            </ul>
          </div>
        </div>

        <div className="flex-1 p-8 lg:p-12">
          <div className="mb-6 flex rounded-full border border-white/10 bg-slate-900/60 p-1">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 rounded-full px-4 py-2 font-semibold transition ${mode === 'login' ? 'bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white shadow-lg shadow-fuchsia-500/20' : 'text-slate-300 hover:text-white'}`}
            >
              Login
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 rounded-full px-4 py-2 font-semibold transition ${mode === 'signup' ? 'bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white shadow-lg shadow-fuchsia-500/20' : 'text-slate-300 hover:text-white'}`}
            >
              Sign up
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Full name</label>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-fuchsia-400"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                />
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Email address</label>
              <input
                type="email"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-fuchsia-400"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
              <input
                type="password"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-fuchsia-400"
                placeholder="Create a password"
                value={formData.password}
                onChange={(event) => setFormData({ ...formData, password: event.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
            >
              {mode === 'login' ? 'Login to your account' : 'Create account'}
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-sm text-slate-400">
            <div className="h-px flex-1 bg-slate-700" />
            <span>or</span>
            <div className="h-px flex-1 bg-slate-700" />
          </div>

          {googleClientId ? (
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
          ) : (
            <button
              type="button"
              onClick={handleGoogleSuccess}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 font-semibold text-slate-100 transition hover:bg-white/20"
            >
              <span className="text-lg">G</span>
              Continue with Google
            </button>
          )}

          {message && <p className="mt-4 text-sm text-cyan-300">{message}</p>}
        </div>
      </div>
    </div>
  )
}

export default Login
