import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";

export default function Navbar({ activePage = 'dashboard' }) {

  const { user } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userType = user?.userType

  const handleLogout = () => {
    localStorage.removeItem('user')
    dispatch(logOutUser())
    navigate("/")
  }


  return (
    <header className="w-full bg-parchment-card border-b-4 border-navy px-4 lg:px-8 py-3 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-yellow border-3 border-navy shadow-pop flex items-center justify-center font-grotesk font-extrabold text-xl text-navy">
              CB
            </div>
            <div className="flex flex-col">
              <span className="font-grotesk font-extrabold text-xl tracking-tight text-navy leading-none">
                CAREER<span className="text-rust">BRIDGE</span>
              </span>
              <span className="font-mono text-[10px] font-bold text-navy-muted tracking-wider uppercase">
                India Platform v2.4
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        {
          userType === "student" && (
            <>
              <nav className="hidden md:flex items-center space-x-2 font-grotesk font-bold text-sm">
                <Link
                  to="/profile"
                  className={`px-4 py-2 rounded-full border-2 border-navy transition-all ${activePage === 'dashboard'
                    ? 'bg-yellow text-navy shadow-pop-sm font-extrabold'
                    : 'bg-parchment text-navy hover:bg-parchment-dim'
                    }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/careers"
                  className={`px-4 py-2 rounded-full border-2 border-navy transition-all ${activePage === 'explorer'
                    ? 'bg-yellow text-navy shadow-pop-sm font-extrabold'
                    : 'bg-parchment text-navy hover:bg-parchment-dim'
                    }`}
                >
                  Explore Careers
                </Link>
                <Link
                  to="/counselors"
                  className={`px-4 py-2 rounded-full border-2 border-navy transition-all ${activePage === 'counselors'
                    ? 'bg-yellow text-navy shadow-pop-sm font-extrabold'
                    : 'bg-parchment text-navy hover:bg-parchment-dim'
                    }`}
                >
                  Find Counselor
                </Link>
                <Link
                  to="/ai-roadmap"
                  className={`px-4 py-2 rounded-full border-2 border-navy transition-all ${activePage === 'roadmap'
                    ? 'bg-yellow text-navy shadow-pop-sm font-extrabold'
                    : 'bg-parchment text-navy hover:bg-parchment-dim'
                    }`}
                >
                  AI Roadmap Generator
                </Link>
              </nav>
            </>
          )
        }

        {/* Right Widgets: Credits & Profile */}
        <div className="flex items-center space-x-3">
          {/* Credits Badge */}
          {
            userType === "student" && (
              <a
                href="#"
                className="flex items-center space-x-2 bg-rust-container border-2 border-navy px-3 py-1.5 rounded-full shadow-pop-sm hover:bg-rust-container/80 transition-all"
              >
                <span className="w-3 h-3 rounded-full bg-rust animate-pulse"></span>
                <span className="font-mono text-xs font-bold text-navy">120 Credits</span>
                <span className="bg-navy text-yellow text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full">
                  + Top-up
                </span>
              </a>
            )
          }

          {/* User Profile Avatar */}
          <div
            className="flex items-center space-x-2 bg-sky/30 border-2 border-navy px-2.5 py-1 rounded-full shadow-pop-sm hover:bg-sky/50"
          >
            <div className="w-7 h-7 rounded-full bg-sky border border-navy flex items-center justify-center font-grotesk font-bold text-xs text-navy">
              {user.name[0]}
            </div>
            <span className="hidden sm:inline font-grotesk font-bold text-xs text-navy">
              {user?.name}
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-red-500 border-2 border-navy px-2.5 py-1 rounded-full shadow-pop-sm hover:bg-red-700"
          >
            <div className="w-7 h-7 rounded-full bg-red-200 border border-navy flex items-center justify-center font-grotesk font-bold text-xs text-navy">
              <LogOut height={12} />
            </div>
            <span className="hidden sm:inline font-grotesk font-bold text-xs text-white">
              Logout
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
