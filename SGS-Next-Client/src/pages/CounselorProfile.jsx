import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function CounselorProfile() {
  const slots = [
    { day: 'Tomorrow (Fri)', time: '05:00 PM IST', available: true },
    { day: 'Tomorrow (Fri)', time: '07:30 PM IST', available: true },
    { day: 'Saturday (Sat)', time: '11:00 AM IST', available: true },
    { day: 'Saturday (Sat)', time: '04:00 PM IST', available: false },
    { day: 'Sunday (Sun)', time: '06:00 PM IST', available: true },
  ];

  const reviews = [
    { student: 'Rahul Sharma (DTU 2025)', text: 'Dr. Ramesh reviewed my system design architecture for an Amazon interview. Passed all 4 rounds! Worth every single credit.', rating: '5.0 ★' },
    { student: 'Sneha Reddy (NIT Trichy)', text: 'Very practical advice for Tier-2 students looking to crack remote US startup jobs from India.', rating: '5.0 ★' },
  ];

  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="counselors" />

      <div class="flex-1 flex">
        <Sidebar activeTab="counselors" role="student" />

        <main class="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Back Button */}
          <div class="mb-4">
            <a href="#" class="font-grotesk font-bold text-xs text-navy hover:text-rust flex items-center space-x-1">
              <span>← Back to Counselor List</span>
            </a>
          </div>

          {/* Profile Banner */}
          <div class="bg-yellow border-4 border-navy rounded-3xl p-8 shadow-pop mb-8 relative">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div class="flex items-center space-x-5">
                <div class="w-20 h-20 rounded-3xl bg-parchment-card border-4 border-navy flex items-center justify-center font-grotesk font-extrabold text-3xl text-navy shadow-pop">
                  RK
                </div>
                <div>
                  <div class="flex items-center space-x-3 mb-1">
                    <h1 class="font-grotesk font-extrabold text-3xl text-navy">Dr. Ramesh Kumar</h1>
                    <StatusBadge text="VERIFIED MENTOR" status="success" />
                  </div>
                  <p class="font-mono text-sm font-bold text-navy-muted">Ex-Google Staff Engineer • IIT Bombay CSE Alumnus</p>
                  <p class="font-body text-xs text-navy mt-1">📍 Bengaluru, Karnataka • 14+ Years Industry Experience</p>
                </div>
              </div>

              <div class="bg-parchment-card border-3 border-navy p-4 rounded-2xl shadow-pop-sm text-center">
                <div class="font-mono text-[10px] font-bold text-navy-muted uppercase">Session Fee</div>
                <div class="font-grotesk font-extrabold text-2xl text-rust">50 Credits</div>
                <div class="font-mono text-[10px] font-bold text-navy mt-0.5">45 Min Video Call + Notes</div>
              </div>
            </div>
          </div>

          {/* 2 Col Grid: Details & Slot Selector */}
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Bio, Experience & Reviews */}
            <div class="lg:col-span-2 space-y-8">
              <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <h2 class="font-grotesk font-extrabold text-xl text-navy mb-3">About Dr. Ramesh</h2>
                <p class="font-body text-sm text-navy leading-relaxed mb-4">
                  Dr. Ramesh spent 9 years building distributed storage infrastructure at Google Mountain View and Google India (Bengaluru). He holds a Ph.D. in Computer Science from IIT Bombay and has personally mentored over 500+ engineering graduates from IITs, NITs, and state universities into top tech companies worldwide.
                </p>

                <h3 class="font-grotesk font-bold text-sm text-navy mb-2">Primary Consultation Areas:</h3>
                <div class="grid grid-cols-2 gap-2 mb-6">
                  <div class="bg-sky/20 border-2 border-navy p-2.5 rounded-xl font-mono text-xs text-navy font-bold">
                    ✔ Distributed Systems Design
                  </div>
                  <div class="bg-sky/20 border-2 border-navy p-2.5 rounded-xl font-mono text-xs text-navy font-bold">
                    ✔ Resume ATS & Portfolio Review
                  </div>
                  <div class="bg-sky/20 border-2 border-navy p-2.5 rounded-xl font-mono text-xs text-navy font-bold">
                    ✔ LeetCode & Coding Mock Round
                  </div>
                  <div class="bg-sky/20 border-2 border-navy p-2.5 rounded-xl font-mono text-xs text-navy font-bold">
                    ✔ Career Switching (Service to Product)
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <h2 class="font-grotesk font-extrabold text-xl text-navy mb-4">Student Reviews & Ratings</h2>
                <div class="space-y-4">
                  {reviews.map((rev, idx) => (
                    <div key={idx} class="bg-parchment border-2 border-navy p-4 rounded-2xl shadow-pop-sm">
                      <div class="flex justify-between items-center mb-1">
                        <span class="font-grotesk font-bold text-sm text-navy">{rev.student}</span>
                        <span class="font-mono text-xs font-bold text-rust">{rev.rating}</span>
                      </div>
                      <p class="font-body text-xs text-navy-muted">"{rev.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 1 Col: Booking Slot Component */}
            <div class="space-y-8">
              <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <h3 class="font-grotesk font-extrabold text-lg text-navy mb-1">Book 1-on-1 Session</h3>
                <p class="font-body text-xs text-navy-muted mb-4">Select an available IST time slot for your call:</p>

                <div class="space-y-2.5 mb-6">
                  {slots.map((slot, idx) => (
                    <div
                      key={idx}
                      class={`p-3 rounded-xl border-2 border-navy flex justify-between items-center font-mono text-xs ${
                        slot.available
                          ? idx === 0
                            ? 'bg-yellow font-bold shadow-pop-sm'
                            : 'bg-parchment hover:bg-parchment-dim'
                          : 'bg-gray-200 text-gray-400 opacity-60'
                      }`}
                    >
                      <div>
                        <div>{slot.day}</div>
                        <div class="font-bold">{slot.time}</div>
                      </div>
                      <span class="text-[10px] font-bold">
                        {slot.available ? (idx === 0 ? 'SELECTED' : 'Available') : 'Booked'}
                      </span>
                    </div>
                  ))}
                </div>

                <div class="bg-rust-container border-2 border-navy p-3 rounded-xl mb-4 font-mono text-xs flex justify-between items-center">
                  <span>Your Credit Balance:</span>
                  <span class="font-bold text-navy">120 Credits</span>
                </div>

                <Button variant="accent" size="lg" className="w-full">
                  CONFIRM & DEDUCT 50 CREDITS →
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
