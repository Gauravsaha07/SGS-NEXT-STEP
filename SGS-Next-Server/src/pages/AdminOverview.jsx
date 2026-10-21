import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function AdminOverview() {
  const systemLogs = [
    { time: '14:22 IST', event: 'New Counselor Approval Request', detail: 'Prof. Rajesh Verma applied' },
    { time: '13:45 IST', event: 'Credit Purchase Completed', detail: 'Student #ST-902 bought 300 Credits (₹699)' },
    { time: '12:10 IST', event: 'AI Engine Execution', detail: 'Generated 42 roadmaps in past 1 hour' },
  ];

  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="admin" />

      <div class="flex-1 flex">
        <Sidebar activeTab="admin_overview" role="admin" />

        <main class="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Header */}
          <div class="bg-navy text-white border-4 border-navy rounded-3xl p-6 shadow-pop mb-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div class="inline-block bg-yellow text-navy font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-2">
                  ADMIN SUPERVISOR SUITE
                </div>
                <h1 class="font-grotesk font-extrabold text-3xl text-white">
                  CareerBridge <span class="text-yellow">Platform Control</span>
                </h1>
                <p class="font-body text-xs text-parchment-dim mt-1">
                  Global system metrics, user growth analytics, counselor approvals, and credit circulation monitoring.
                </p>
              </div>

              <div class="flex items-center space-x-3">
                <Button variant="primary" size="md">
                  System Health Report 📊
                </Button>
              </div>
            </div>
          </div>

          {/* Metrics Overview Grid */}
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card color="white">
              <div class="font-mono text-xs font-bold text-navy-muted uppercase">Total Registered Users</div>
              <div class="font-grotesk font-extrabold text-3xl text-navy mt-2">24,520</div>
              <div class="text-xs text-rust font-bold mt-1">+1,240 students this week</div>
            </Card>

            <Card color="white">
              <div class="font-mono text-xs font-bold text-navy-muted uppercase">Active Counselors</div>
              <div class="font-grotesk font-extrabold text-3xl text-navy mt-2">142 Mentors</div>
              <div class="text-xs text-teal font-bold mt-1">8 Pending Applications</div>
            </Card>

            <Card color="white">
              <div class="font-mono text-xs font-bold text-navy-muted uppercase">Credits Circulating</div>
              <div class="font-grotesk font-extrabold text-3xl text-navy mt-2">1.82M pts</div>
              <div class="text-xs text-rust font-bold mt-1">₹4.2L Monthly Credit Revenue</div>
            </Card>

            <Card color="yellow">
              <div class="font-mono text-xs font-bold text-navy uppercase">AI Roadmaps Generated</div>
              <div class="font-grotesk font-extrabold text-3xl text-navy mt-2">84,100</div>
              <div class="text-xs text-navy font-bold mt-1">99.8% System Uptime</div>
            </Card>
          </div>

          {/* Activity Log & Pending Actions */}
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2">
              <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <h2 class="font-grotesk font-extrabold text-xl text-navy mb-4">Real-Time System Log</h2>
                <div class="space-y-3 font-mono text-xs">
                  {systemLogs.map((log, i) => (
                    <div key={i} class="bg-parchment border-2 border-navy p-3 rounded-xl flex justify-between items-center">
                      <div>
                        <span class="font-bold text-rust">[{log.time}]</span>{' '}
                        <span class="font-bold text-navy">{log.event}</span>
                        <div class="text-navy-muted text-[11px] mt-0.5">{log.detail}</div>
                      </div>
                      <StatusBadge text="LOGGED" status="info" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div class="bg-rust-container border-4 border-navy rounded-3xl p-6 shadow-pop">
                <StatusBadge text="ACTION REQUIRED" status="warning" />
                <h3 class="font-grotesk font-extrabold text-lg text-navy mt-3">Pending Moderation Queue</h3>
                <ul class="mt-3 space-y-2 font-mono text-xs text-navy">
                  <li class="flex justify-between">
                    <span>• Counselor Approvals:</span>
                    <span class="font-bold text-rust">8 Applications</span>
                  </li>
                  <li class="flex justify-between">
                    <span>• Manual Credit Grants:</span>
                    <span class="font-bold text-rust">3 Requests</span>
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
