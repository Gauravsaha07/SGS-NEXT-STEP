import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function StudentDashboard() {

  const { user } = useSelector(state => state.auth)

  const navigate = useNavigate()


  const upcomingSessions = [
    {
      id: 1,
      counselor: 'Dr. Ramesh Kumar',
      role: 'Ex-Google SDE3 / IIT Bombay Mentor',
      date: 'Tomorrow, 5:00 PM IST',
      topic: 'Full-Stack System Design Mock Interview',
      status: 'Confirmed',
      avatar: 'RK',
    },
    {
      id: 2,
      counselor: 'Ananya Roy',
      role: 'Lead Product Designer @ Swiggy',
      date: 'Saturday, 11:00 AM IST',
      topic: 'UI/UX Portfolio & Case Study Review',
      status: 'Pending Host',
      avatar: 'AR',
    },
  ];

  const recentRoadmaps = [
    {
      id: 'rm-101',
      title: 'Full-Stack Web Dev (MERN + Next.js)',
      progress: 65,
      currentStep: 'Phase 3: Backend APIs & MongoDB Security',
      targetSalary: '₹8L - ₹15L / year',
      badge: 'ACTIVE TRACK',
    },
    {
      id: 'rm-102',
      title: 'Data Analyst & Python PowerBI Path',
      progress: 25,
      currentStep: 'Phase 1: Advanced SQL & Data Cleaning',
      targetSalary: '₹6L - ₹10L / year',
      badge: 'IN PROGRESS',
    },
  ];


  useEffect(() => {
    if (user.userType === "ADMIN") {
      navigate("/auth/admin")
    } else if (user.userType === "COUNSELOR") {
      navigate("/auth/counselor")
    }
  }, [user])

  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="dashboard" />

      <div className="flex-1 flex">
        <Sidebar activeTab="overview" role="student" />

        <main className="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Welcome Banner */}
          <div className="bg-yellow border-4 border-navy rounded-3xl p-6 shadow-pop mb-8 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-block bg-navy text-yellow font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-2">
                  Student Workspace • {user.name}
                </div>
                <h1 className="font-grotesk font-extrabold text-3xl text-navy">
                  Namaste, {user.name}! Ready to level up? ⚡
                </h1>
                <p className="font-body text-sm text-navy-muted mt-1">
                  You have <span className="font-bold text-navy">{user.credits} Credits</span> available. Your current level is <span className="font-bold text-rust">{user.qualification}</span>.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Link to={"/auth/ai-roadmap"} className="font-grotesk border border-black tracking-wide rounded-full transition-all active:translate-x-1 active:translate-y-1 active:shadow-none px-5 py-2.5 text-sm font-extrabold bg-yellow text-navy hover:bg-yellow-fixed border-3 border-navy shadow-pop">
                  + Generate Roadmap
                </Link>

              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card color="white" className="border-3">
              <div className="font-mono text-xs font-bold text-navy-muted uppercase">Active Roadmaps</div>
              <div className="font-grotesk font-extrabold text-3xl text-navy mt-2">2 Paths</div>
              <div className="text-xs text-rust font-bold mt-1">⚡ 65% Completed on Main Track</div>
            </Card>

            <Card color="white" className="border-3">
              <div className="font-mono text-xs font-bold text-navy-muted uppercase">Booked Sessions</div>
              <div className="font-grotesk font-extrabold text-3xl text-navy mt-2">2 Upcoming</div>
              <div className="text-xs text-teal font-bold mt-1">Next session tomorrow 5PM</div>
            </Card>

            <Card color="white" className="border-3">
              <div className="font-mono text-xs font-bold text-navy-muted uppercase">Credits Wallet</div>
              <div className="font-grotesk font-extrabold text-3xl text-navy mt-2">120 pts</div>
              <div className="text-xs text-rust font-bold mt-1">+100 Welcome credits added</div>
            </Card>

            <Card color="yellow" className="border-3">
              <div className="font-mono text-xs font-bold text-navy uppercase">Profile Mastery</div>
              <div className="font-grotesk font-extrabold text-3xl text-navy mt-2">85%</div>
              <div className="text-xs text-navy font-bold mt-1">Resume uploaded • College verified</div>
            </Card>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Active Roadmaps & Sessions */}
            <div className="lg:col-span-2 space-y-8">
              {/* Active Roadmaps Section */}
              <div className="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="font-grotesk font-extrabold text-xl text-navy">My AI Career Roadmaps</h2>
                    <p className="font-body text-xs text-navy-muted">Step-by-step guidance powered by real Indian job market data</p>
                  </div>
                  <a href="#" className="font-grotesk font-bold text-xs text-rust hover:underline">
                    View All Roadmaps →
                  </a>
                </div>

                <div className="space-y-4">
                  {recentRoadmaps.map((rm) => (
                    <div key={rm.id} className="bg-parchment border-3 border-navy rounded-2xl p-5 shadow-pop-sm">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-grotesk font-extrabold text-base text-navy">{rm.title}</span>
                            <StatusBadge text={rm.badge} status="success" />
                          </div>
                          <p className="font-body text-xs text-navy-muted mt-1">
                            Current Stage: <span className="font-bold text-navy">{rm.currentStep}</span>
                          </p>
                        </div>
                        <span className="font-mono text-xs font-bold text-rust bg-rust-container px-2.5 py-1 rounded-full border border-navy">
                          {rm.targetSalary}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-4">
                        <div className="flex justify-between text-xs font-mono font-bold mb-1">
                          <span>Overall Progress</span>
                          <span>{rm.progress}%</span>
                        </div>
                        <div className="w-full bg-parchment-dim border-2 border-navy h-4 rounded-full overflow-hidden">
                          <div
                            className="bg-yellow h-full border-r-2 border-navy transition-all"
                            style={{ width: `${rm.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="primary" size="sm">
                          Continue Phase 3 →
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Counseling Sessions */}
              <div className="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="font-grotesk font-extrabold text-xl text-navy">Upcoming 1-on-1 Sessions</h2>
                    <p className="font-body text-xs text-navy-muted">Live 1-on-1 mentorship with verified industry leaders</p>
                  </div>
                  <a href="#" className="font-grotesk font-bold text-xs text-rust hover:underline">
                    Browse Counselors →
                  </a>
                </div>

                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="bg-sky/20 border-3 border-navy rounded-2xl p-4 flex items-center justify-between shadow-pop-sm">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-2xl bg-sky border-2 border-navy flex items-center justify-center font-grotesk font-extrabold text-lg text-navy shadow-pop-sm">
                          {session.avatar}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-grotesk font-extrabold text-base text-navy">{session.counselor}</h3>
                            <StatusBadge text={session.status} status="info" />
                          </div>
                          <p className="font-mono text-xs text-navy-muted">{session.role}</p>
                          <p className="font-body text-xs font-bold text-rust mt-1">📌 {session.topic}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-mono text-xs font-bold text-navy mb-2">{session.date}</div>
                        <Button variant="primary" size="sm">
                          Join Call
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 1 Col: Quick Tools & Credit Summary */}
            <div className="space-y-8">
              {/* Credit Wallet Widget */}
              <div className="bg-rust-container border-4 border-navy rounded-3xl p-6 shadow-pop relative overflow-hidden">
                <div className="font-mono text-xs font-bold text-navy uppercase tracking-wider mb-1">
                  CREDIT BALANCE
                </div>
                <div className="font-grotesk font-extrabold text-4xl text-navy">
                  120 <span className="text-base font-normal">pts</span>
                </div>
                <p className="font-body text-xs text-navy mt-2">
                  1 Session = 50 Credits • 1 AI Roadmap = 10 Credits
                </p>

                <div className="mt-4 pt-4 border-t-2 border-navy/20">
                  <Button variant="accent" size="md" className="w-full">
                    Buy Top-Up Credit Pack →
                  </Button>
                </div>
              </div>

              {/* Quick Actions Card */}
              <div className="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <h3 className="font-grotesk font-extrabold text-lg text-navy mb-4">Quick Student Tools</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block bg-parchment border-2 border-navy p-3 rounded-xl hover:bg-yellow transition-all font-grotesk font-bold text-xs text-navy shadow-pop-sm flex items-center justify-between"
                  >
                    <span>🎯 Explore High Salary Tech Careers</span>
                    <span>→</span>
                  </a>
                  <a
                    href="#"
                    className="block bg-parchment border-2 border-navy p-3 rounded-xl hover:bg-yellow transition-all font-grotesk font-bold text-xs text-navy shadow-pop-sm flex items-center justify-between"
                  >
                    <span>📄 AI Resume Reviewer</span>
                    <span>→</span>
                  </a>
                  <a
                    href="#"
                    className="block bg-parchment border-2 border-navy p-3 rounded-xl hover:bg-yellow transition-all font-grotesk font-bold text-xs text-navy shadow-pop-sm flex items-center justify-between"
                  >
                    <span>💬 Practice Mock Interview Chat</span>
                    <span>→</span>
                  </a>
                  <a
                    href="#"
                    className="block bg-parchment border-2 border-navy p-3 rounded-xl hover:bg-yellow transition-all font-grotesk font-bold text-xs text-navy shadow-pop-sm flex items-center justify-between"
                  >
                    <span>🎓 Apply as Student Ambassador</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Recommended Counselor Highlight */}
              <div className="bg-yellow border-4 border-navy rounded-3xl p-6 shadow-pop">
                <StatusBadge text="SPOTLIGHT MENTOR" status="success" />
                <h3 className="font-grotesk font-extrabold text-xl text-navy mt-3">Sneha Mukherjee</h3>
                <p className="font-body text-xs text-navy-muted">Senior AI Engineer @ Microsoft Hyderabad</p>
                <p className="font-body text-xs text-navy mt-2 italic">
                  "Specialized in helping Tier-2 & Tier-3 college students land top product tech roles."
                </p>
                <div className="mt-4">
                  <Button variant="primary" size="sm" className="w-full">
                    Book Session (50 Credits)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
