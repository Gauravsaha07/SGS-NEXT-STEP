import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function RoadmapGenerator() {
  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="roadmap" />

      <div class="flex-1 flex">
        <Sidebar activeTab="roadmap" role="student" />

        <main class="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Header */}
          <div class="mb-8 max-w-3xl">
            <div class="inline-block bg-yellow border-3 border-navy px-3 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-2">
              AI ENGINE V2.4
            </div>
            <h1 class="font-grotesk font-extrabold text-3xl text-navy">
              Generate Custom <span class="text-rust">AI Career Roadmap</span>
            </h1>
            <p class="font-body text-sm text-navy-muted mt-1">
              Answer a few questions to generate a step-by-step learning path customized for the Indian tech and job market.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div class="lg:col-span-2">
              <div class="bg-parchment-card border-4 border-navy rounded-3xl p-8 shadow-pop relative">
                <div class="absolute -top-3 -right-3 bg-rust text-white font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 border-2 border-navy rotate-3 shadow-pop-sm">
                  10 Credits / Generation
                </div>

                <form class="space-y-6">
                  {/* Step 1: Target Role */}
                  <div>
                    <label class="block font-grotesk font-extrabold text-sm uppercase tracking-wider text-navy mb-2">
                      1. Target Career Role
                    </label>
                    <input
                      type="text"
                      defaultValue="Full-Stack Web Engineer (MERN + Next.js)"
                      placeholder="e.g. Data Scientist, IAS Officer, Product Manager..."
                      class="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-3 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                    />
                  </div>

                  {/* Step 2: Current Experience */}
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block font-grotesk font-bold text-xs uppercase text-navy mb-2">
                        2. Current Knowledge Level
                      </label>
                      <select class="w-full bg-parchment border-3 border-navy rounded-xl px-3 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none">
                        <option>Beginner (No coding background)</option>
                        <option selected>Intermediate (Know basic HTML/JS)</option>
                        <option>Advanced (Building full projects)</option>
                      </select>
                    </div>

                    <div>
                      <label class="block font-grotesk font-bold text-xs uppercase text-navy mb-2">
                        3. Weekly Commitment
                      </label>
                      <select class="w-full bg-parchment border-3 border-navy rounded-xl px-3 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none">
                        <option>5 - 10 Hours / week</option>
                        <option selected>15 - 20 Hours / week</option>
                        <option>30+ Hours (Full-time Prep)</option>
                      </select>
                    </div>
                  </div>

                  {/* Step 3: Target Salary Expectation */}
                  <div>
                    <label class="block font-grotesk font-bold text-xs uppercase text-navy mb-2">
                      4. Desired Starting Package Goal (INR)
                    </label>
                    <div class="grid grid-cols-3 gap-3">
                      <label class="p-3 bg-parchment border-2 border-navy rounded-xl flex items-center space-x-2 cursor-pointer font-mono text-xs text-navy font-bold shadow-pop-sm">
                        <input type="radio" name="salary" class="text-yellow" />
                        <span>₹4L - ₹8L/yr</span>
                      </label>
                      <label class="p-3 bg-yellow border-2 border-navy rounded-xl flex items-center space-x-2 cursor-pointer font-mono text-xs text-navy font-bold shadow-pop-sm">
                        <input type="radio" name="salary" defaultChecked class="text-navy" />
                        <span>₹8L - ₹15L/yr</span>
                      </label>
                      <label class="p-3 bg-parchment border-2 border-navy rounded-xl flex items-center space-x-2 cursor-pointer font-mono text-xs text-navy font-bold shadow-pop-sm">
                        <input type="radio" name="salary" class="text-yellow" />
                        <span>₹15L+/yr</span>
                      </label>
                    </div>
                  </div>

                  {/* Step 4: Special Instructions */}
                  <div>
                    <label class="block font-grotesk font-bold text-xs uppercase text-navy mb-2">
                      5. Specific Goal / Background Notes
                    </label>
                    <textarea
                      rows={3}
                      defaultValue="I am a 3rd year BCA student in Delhi. I want a roadmap tailored to crack tier-1 product startup campus placements within 6 months."
                      placeholder="Share your specific constraints..."
                      class="w-full bg-parchment border-3 border-navy rounded-xl p-4 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                    ></textarea>
                  </div>

                  <div class="pt-4 border-t-2 border-navy/20 flex items-center justify-between">
                    <div class="font-mono text-xs text-navy-muted font-bold">
                      Cost: <span class="text-rust">10 Credits</span> (Balance: 120)
                    </div>
                    <Button variant="primary" size="lg">
                      ⚡ GENERATE AI ROADMAP NOW →
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Information Side Panel */}
            <div class="space-y-6">
              <div class="bg-yellow border-4 border-navy rounded-3xl p-6 shadow-pop">
                <StatusBadge text="HOW IT WORKS" status="success" />
                <h3 class="font-grotesk font-extrabold text-xl text-navy mt-3">Tailored for Indian Students</h3>
                <p class="font-body text-xs text-navy mt-2 leading-relaxed">
                  Our AI engine analyzes real hiring patterns across Indian IT hubs (Bengaluru, Hyderabad, Gurgaon, Pune) to build month-by-month phase milestones.
                </p>
              </div>

              <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <h3 class="font-grotesk font-extrabold text-lg text-navy mb-3">What You Will Get:</h3>
                <ul class="space-y-3 font-body text-xs text-navy">
                  <li class="flex items-start space-x-2">
                    <span class="text-rust font-bold">✓</span>
                    <span>Month-by-month phase breakdown with project ideas</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-rust font-bold">✓</span>
                    <span>Direct links to top free documentation & courses</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-rust font-bold">✓</span>
                    <span>Interview question banks & salary expectations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
