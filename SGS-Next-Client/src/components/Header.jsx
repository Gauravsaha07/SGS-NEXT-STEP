import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="w-full bg-navy text-white px-6 lg:px-12 py-5 border-b-2 border-navy sticky top-0 z-40">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-3 group">
                    <div className="w-9 h-9 bg-yellow border-2 border-navy text-navy font-grotesk font-medium text-lg flex items-center justify-center">
                        CB
                    </div>
                    <div className="flex flex-col">
                        <span className="font-grotesk font-medium text-xl tracking-tight text-white leading-none">
                            CAREER<span className="text-yellow">BRIDGE</span>
                        </span>
                        <span className="font-mono text-[10px] font-bold text-parchment-dim tracking-wider uppercase">
                            India Guidance Portal
                        </span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center space-x-6 font-grotesk font-medium text-sm text-parchment-dim">
                    <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
                    <a href="#audiences" className="hover:text-white transition-colors">For Mentors</a>
                    <a href="#previews" className="hover:text-white transition-colors">Directory Preview</a>
                    <a href="#credits" className="hover:text-white transition-colors">Credits & Pricing</a>
                </nav>

                <div className="flex items-center space-x-4">
                    <Link to="/login" className="font-grotesk font-medium text-sm text-parchment-dim hover:text-white">
                        Log In
                    </Link>
                    <Link
                        to={"/register"}
                        className="bg-rust text-white font-grotesk font-medium text-xs px-5 py-2.5 rounded-full border border-navy hover:bg-rust/90 transition-all"
                    >
                        Get Started Free →
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
