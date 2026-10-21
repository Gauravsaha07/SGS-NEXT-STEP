import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function CounselorDashboard() {
  const pendingRequests = [
    { id: 'req-1', student: 'Aarav Sharma', college: 'IIT Delhi (B.Tech CSE)', topic: 'System Design Mock Interview', time: 'Tomorrow, 5:00 PM IST', fee: '50 Credits' },
    { id: 'req-2', student: 'Priya Patel', college: 'NSUT Delhi (BCA)', topic: 'Resume & Portfolio Feedback', time: 'Sat, 11:00 AM IST', fee: '50 Credits' },
  ];

  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="dashboard" />

      <div class="flex-1 flex">
        <Sidebar activeTab="counselor_overview" role="counselor" />

        <main class="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Welcome Banner */}
          <div class="bg-yellow border-4 border-navy rounded-3xl p-6 shadow-pop mb-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div class="inline-block bg-navy text-yellow font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-2">
                  Counselor Portal • Dr. Ramesh Kumar
                </div>
                <h1 class="font-grotesk font-extrabold text-3xl text-navy">
                  Welcome back, Dr. Ramesh! 🎓
                </h1>
                <p class="font-body text-sm text-navy-muted mt-1">
                  You have <span class="font-bold text-navy">2 pending session requests</span> and <span class="font-bold text-rust">₹34,500</span> in monthly payouts.
                </p>
              </div>

              <div class="flex items-center space-x-3">
                <Button variant="accent" size="md">
                  Update Available Slots
                </Button>
                <Button variant="sky" size="md">
                  Payout History
                </Button>
              </div>
            </div>
          </div>

          {/* Key Counselor Metrics */}
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card color="white">
              <div class="font-mono text-xs font-bold text-navy-muted uppercase">Sessions Completed</div>
              <div class="font-grotesk font-extrabold text-3xl text-navy mt-2">184 Calls</div>
              <div class="text-xs text-rust font-bold mt-1">★ 4.9 Rating Average</div>
            </Card>

            <Card color="white">
              <div class="font-mono text-xs font-bold text-navy-muted uppercase">Total Earnings</div>
              <div class="font-grotesk font-extrabold text-3xl text-navy mt-2">₹1,42,000</div>
              <div class="text-xs text-teal font-bold mt-1">Direct Bank Payouts</div>
            </Card>

            <Card color="white">
              <div class="font-mono text-xs font-bold text-navy-muted uppercase">Credits Earned</div>
              <div class="font-grotesk font-extrabold text-3xl text-navy mt-2">9,200 pts</div>
              <div class="text-xs text-rust font-bold mt-1">50 Credits / Session Rate</div>
            </Card>

            <Card color="yellow">
              <div class="font-mono text-xs font-bold text-navy uppercase">Profile Status</div>
              <div class="font-grotesk font-extrabold text-3xl text-navy mt-2">VERIFIED</div>
              <div class="text-xs text-navy font-bold mt-1">Ex-Google Staff Mentor</div>
            </Card>
          </div>

          {/* Session Requests & Schedule */}
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 space-y-6">
              <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <h2 class="font-grotesk font-extrabold text-xl text-navy mb-4">Pending Student Requests</h2>
                <div class="space-y-4">
                  {pendingRequests.map((req) => (
                    <div key={req.id} class="bg-parchment border-3 border-navy p-4 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-3 shadow-pop-sm">
                      <div>
                        <div class="flex items-center space-x-2">
                          <span class="font-grotesk font-extrabold text-base text-navy">{req.student}</span>
                          <StatusBadge text={req.fee} status="success" />
                        </div>
                        <p class="font-mono text-xs text-navy-muted">{req.college}</p>
                        <p class="font-body text-xs font-bold text-rust mt-1">📌 {req.topic} • {req.time}</p>
                      </div>

                      <div class="flex space-x-2 w-full md:w-auto">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button variant="primary" size="sm">
                          Accept Booking ✓
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Settings */}
            <div class="space-y-6">
              <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <h3 class="font-grotesk font-extrabold text-lg text-navy mb-3">Counselor Settings</h3>
                <div class="space-y-3 font-body text-xs">
                  <div class="flex justify-between items-center bg-parchment p-3 rounded-xl border border-navy">
                    <span>Session Fee (Credits)</span>
                    <span class="font-bold text-navy font-mono">50 Credits</span>
                  </div>
                  <div class="flex justify-between items-center bg-parchment p-3 rounded-xl border border-navy">
                    <span>Auto-Accept Bookings</span>
                    <span class="font-bold text-rust font-mono">ENABLED</span>
                  </div>
                  <div class="flex justify-between items-center bg-parchment p-3 rounded-xl border border-navy">
                    <span>Payout Bank Account</span>
                    <span class="font-bold text-navy font-mono">HDFC Bank ****4920</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
