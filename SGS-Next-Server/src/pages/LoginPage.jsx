import Navbar from '../components/Navbar';

export default function LoginPage() {
  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="login" />

      <main class="flex-1 flex items-center justify-center p-6 bg-grid-pattern">
        <div class="w-full max-w-md bg-parchment-card border-4 border-navy rounded-3xl p-8 shadow-pop-lg relative overflow-hidden">
          {/* Decorative Sticker Badge */}
          <div class="absolute -top-3 -right-3 bg-rust text-white font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 border-2 border-navy rotate-6 shadow-pop-sm">
            Student Portal
          </div>

          <div class="text-center mb-8">
            <div class="inline-block bg-yellow border-3 border-navy px-4 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-3">
              WELCOME BACK!
            </div>
            <h1 class="font-grotesk font-extrabold text-3xl text-navy tracking-tight">
              Sign In to <span class="text-rust">CareerBridge</span>
            </h1>
            <p class="font-body text-xs text-navy-muted mt-2">
              Access your personalized AI career roadmaps and counselor sessions.
            </p>
          </div>

          <form class="space-y-5">
            <div>
              <label class="block font-grotesk font-bold text-xs uppercase tracking-wider text-navy mb-2">
                Student Email Address
              </label>
              <input
                type="email"
                defaultValue="aarav.sharma@iitd.ac.in"
                placeholder="e.g. aarav@example.com"
                class="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-3 font-body text-sm text-navy focus:outline-none focus:bg-white shadow-pop-sm"
              />
            </div>

            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="block font-grotesk font-bold text-xs uppercase tracking-wider text-navy">
                  Password
                </label>
                <a href="#" class="font-mono text-[11px] font-bold text-rust hover:underline">
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                defaultValue="••••••••••••"
                placeholder="Enter your password"
                class="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-3 font-body text-sm text-navy focus:outline-none focus:bg-white shadow-pop-sm"
              />
            </div>

            <div class="flex items-center space-x-3">
              <input
                type="checkbox"
                defaultChecked
                id="remember"
                class="w-5 h-5 bg-parchment border-2 border-navy rounded text-yellow focus:ring-0"
              />
              <label htmlFor="remember" class="font-body text-xs text-navy font-semibold">
                Remember me on this laptop
              </label>
            </div>

            <button
              type="button"
              class="w-full bg-yellow hover:bg-yellow-fixed text-navy font-grotesk font-extrabold text-base py-3.5 rounded-2xl border-3 border-navy shadow-pop transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              LOG IN TO DASHBOARD →
            </button>

            <div class="relative flex py-2 items-center">
              <div class="flex-grow border-t-2 border-navy"></div>
              <span class="flex-shrink mx-4 font-mono text-[10px] font-bold text-navy-muted uppercase bg-parchment-card px-2">
                Or Continue With
              </span>
              <div class="flex-grow border-t-2 border-navy"></div>
            </div>

            <button
              type="button"
              class="w-full bg-sky/30 hover:bg-sky/50 text-navy font-grotesk font-bold text-sm py-3 rounded-2xl border-3 border-navy shadow-pop-sm flex items-center justify-center space-x-2"
            >
              <span class="font-bold text-base">G</span>
              <span>Sign in with Google Student ID</span>
            </button>
          </form>

          <div class="mt-8 text-center pt-4 border-t-2 border-navy/20">
            <p class="font-body text-xs text-navy">
              Don't have an account yet?{' '}
              <a href="#" class="font-grotesk font-extrabold text-rust hover:underline">
                Create Free Student Account
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
