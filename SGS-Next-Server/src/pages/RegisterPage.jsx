import Navbar from '../components/Navbar';

export default function RegisterPage() {
  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="register" />

      <main class="flex-1 flex items-center justify-center p-6 bg-grid-pattern">
        <div class="w-full max-w-lg bg-parchment-card border-4 border-navy rounded-3xl p-8 shadow-pop-lg relative">
          <div class="absolute -top-3 -right-3 bg-yellow text-navy font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 border-2 border-navy -rotate-3 shadow-pop-sm">
            Claim 100 Free Credits
          </div>

          <div class="text-center mb-8">
            <div class="inline-block bg-rust-container border-3 border-navy px-4 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-3">
              START YOUR JOURNEY 🚀
            </div>
            <h1 class="font-grotesk font-extrabold text-3xl text-navy tracking-tight">
              Join <span class="text-rust">CareerBridge</span> India
            </h1>
            <p class="font-body text-xs text-navy-muted mt-2">
              Build AI career roadmaps, discover Indian tech & Govt jobs, and connect with top counselors.
            </p>
          </div>

          <form class="space-y-4">
            <div>
              <label class="block font-grotesk font-bold text-xs uppercase tracking-wider text-navy mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Priya Patel"
                placeholder="e.g. Priya Patel"
                class="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
              />
            </div>

            <div>
              <label class="block font-grotesk font-bold text-xs uppercase tracking-wider text-navy mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="priya.patel@gmail.com"
                placeholder="priya@example.com"
                class="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
              />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block font-grotesk font-bold text-xs uppercase tracking-wider text-navy mb-1.5">
                  Primary Goal
                </label>
                <select class="w-full bg-parchment border-3 border-navy rounded-xl px-3 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none">
                  <option>Software Engineering</option>
                  <option>Data Science & AI</option>
                  <option>UI/UX Product Design</option>
                  <option>UPSC / SSC Govt Exams</option>
                  <option>MBA / Management</option>
                </select>
              </div>

              <div>
                <label class="block font-grotesk font-bold text-xs uppercase tracking-wider text-navy mb-1.5">
                  Current Status
                </label>
                <select class="w-full bg-parchment border-3 border-navy rounded-xl px-3 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none">
                  <option>College Student (Undergrad)</option>
                  <option>Recent Graduate</option>
                  <option>Working Professional</option>
                  <option>High School (11th/12th)</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block font-grotesk font-bold text-xs uppercase tracking-wider text-navy mb-1.5">
                Create Password
              </label>
              <input
                type="password"
                defaultValue="••••••••••••"
                placeholder="Minimum 8 characters"
                class="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
              />
            </div>

            <div class="flex items-start space-x-3 pt-2">
              <input
                type="checkbox"
                defaultChecked
                id="terms"
                class="w-5 h-5 bg-parchment border-2 border-navy rounded text-yellow focus:ring-0 mt-0.5"
              />
              <label htmlFor="terms" class="font-body text-xs text-navy">
                I agree to the <a href="#" class="font-bold underline text-rust">Terms of Service</a> and{' '}
                <a href="#" class="font-bold underline text-rust">Privacy Policy</a> of CareerBridge India.
              </label>
            </div>

            <button
              type="button"
              class="w-full bg-yellow hover:bg-yellow-fixed text-navy font-grotesk font-extrabold text-base py-3.5 rounded-2xl border-3 border-navy shadow-pop transition-all active:translate-x-1 active:translate-y-1 active:shadow-none mt-4"
            >
              CREATE FREE ACCOUNT & CLAIM CREDITS →
            </button>
          </form>

          <div class="mt-6 text-center pt-4 border-t-2 border-navy/20">
            <p class="font-body text-xs text-navy">
              Already have an account?{' '}
              <a href="#" class="font-grotesk font-extrabold text-rust hover:underline">
                Sign In Instead
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
