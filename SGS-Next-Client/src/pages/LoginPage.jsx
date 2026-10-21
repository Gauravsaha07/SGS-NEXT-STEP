import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useMutation } from '@tanstack/react-query';
import authService from '../services/authService';
import { useDispatch, useSelector } from 'react-redux';
import AlertModal from '../components/AlertModal';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setUser } from '../features/auth/authSlice';
import LoadingScreen from '../components/LoadingScreen';

export default function LoginPage() {

  const { user } = useSelector(state => state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const { mutate, data, isPending, isSuccess, isError, error } = useMutation({ mutationFn: (credentials) => authService.loginUser(credentials) })
  const [formData, setFormData] = useState({ email: "", password: "" })

  const { email, password } = formData




  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(formData)
  }

  useEffect(() => {

    if (isSuccess) {
      dispatch(setUser(data))
    }


    if (user) {
      navigate("/auth/profile")
    }

    if (isError) {
      toast.error(error?.response.data.message, { position: "top-center" })
    }


  }, [isSuccess, isError, user, data])


  if (isPending) {
    return (
      <LoadingScreen loadingMessage='Logging In...' />
    )
  }


  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-6 bg-grid-pattern">
        <div className="w-full max-w-md bg-parchment-card border-4 border-navy rounded-3xl p-8 shadow-pop-lg relative overflow-hidden">
          {/* Decorative Sticker Badge */}
          <div className="absolute -top-3 -right-3 bg-rust text-white font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 border-2 border-navy rotate-6 shadow-pop-sm">
            Student Portal
          </div>

          <div className="text-center mb-8">
            <div className="inline-block bg-yellow border-3 border-navy px-4 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-3">
              WELCOME BACK!
            </div>
            <h1 className="font-grotesk font-extrabold text-3xl text-navy tracking-tight">
              Sign In to <span className="text-rust">CareerBridge</span>
            </h1>
            <p className="font-body text-xs text-navy-muted mt-2">
              Access your personalized AI career roadmaps and counselor sessions.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-grotesk font-bold text-xs uppercase tracking-wider text-navy mb-2">
                Student Email Address
              </label>
              <input
                type="email"
                name='email'
                onChange={handleChange}
                defaultValue={email}
                placeholder="e.g. aarav@example.com"
                className="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-3 font-body text-sm text-navy focus:outline-none focus:bg-white shadow-pop-sm"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block font-grotesk font-bold text-xs uppercase tracking-wider text-navy">
                  Password
                </label>
                <a href="#" className="font-mono text-[11px] font-bold text-rust hover:underline">
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                name='password'
                onChange={handleChange}
                defaultValue={password}
                placeholder="Enter your password"
                className="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-3 font-body text-sm text-navy focus:outline-none focus:bg-white shadow-pop-sm"
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                defaultChecked
                id="remember"
                className="w-5 h-5 bg-parchment border-2 border-navy rounded text-yellow focus:ring-0"
              />
              <label htmlFor="remember" className="font-body text-xs text-navy font-semibold">
                Remember me on this laptop
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow hover:bg-yellow-fixed text-navy font-grotesk font-extrabold text-base py-3.5 rounded-2xl border-3 border-navy shadow-pop transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              LOG IN TO DASHBOARD →
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t-2 border-navy"></div>
              <span className="flex-shrink mx-4 font-mono text-[10px] font-bold text-navy-muted uppercase bg-parchment-card px-2">
                Or Continue With
              </span>
              <div className="flex-grow border-t-2 border-navy"></div>
            </div>

            <button
              type="button"
              className="w-full bg-sky/30 hover:bg-sky/50 text-navy font-grotesk font-bold text-sm py-3 rounded-2xl border-3 border-navy shadow-pop-sm flex items-center justify-center space-x-2"
            >
              <span className="font-bold text-base">G</span>
              <span>Sign in with Google Student ID</span>
            </button>
          </form>

          <div className="mt-8 text-center pt-4 border-t-2 border-navy/20">
            <p className="font-body text-xs text-navy">
              Don't have an account yet?{' '}
              <a href="#" className="font-grotesk font-extrabold text-rust hover:underline">
                Create Free Student Account
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
