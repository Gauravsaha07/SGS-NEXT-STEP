import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function CounselorList() {
  const counselors = [
    {
      id: 'cn-1',
      name: 'Dr. Ramesh Kumar',
      title: 'Ex-Google SDE3 / IIT Bombay Alumnus',
      experience: '14+ Years Exp',
      rating: '4.9 ★ (180+ Reviews)',
      fee: '50 Credits / Session',
      expertise: ['Full-Stack Dev', 'System Design', 'Mock Interviews', 'IIT/NIT Mentorship'],
      bio: 'Guided 500+ Indian students into top MNCs and high-growth YC tech startups.',
      avatar: 'RK',
      badge: 'TOP RATED',
    },
    {
      id: 'cn-2',
      name: 'Ananya Roy',
      title: 'Lead Product Designer @ Swiggy',
      experience: '8+ Years Exp',
      rating: '4.8 ★ (120+ Reviews)',
      fee: '40 Credits / Session',
      expertise: ['UI/UX Design', 'Figma Portfolios', 'Product Strategy', 'Design Sprint'],
      bio: 'Specialist in helping non-CS students switch successfully into Product Design roles.',
      avatar: 'AR',
      badge: 'POPULAR MENTOR',
    },
    {
      id: 'cn-3',
      name: 'Vikramaditya Singh',
      title: 'Ex-IAS Officer & Civil Services Mentor',
      experience: '18+ Years Exp',
      rating: '5.0 ★ (310+ Reviews)',
      fee: '60 Credits / Session',
      expertise: ['UPSC Mains Preparation', 'Interview Guidance', 'Public Administration'],
      bio: 'Former Assistant Collector offering realistic strategy for IAS, IPS, and IFS aspirants.',
      avatar: 'VS',
      badge: 'GOVT EXPERT',
    },
    {
      id: 'cn-4',
      name: 'Sneha Mukherjee',
      title: 'Senior AI Research Engineer @ Microsoft',
      experience: '6+ Years Exp',
      rating: '4.9 ★ (95+ Reviews)',
      fee: '50 Credits / Session',
      expertise: ['Machine Learning', 'Python AI Roadmap', 'Resume ATS Screening'],
      bio: 'Passionate about bridging Tier-3 college students into cutting-edge AI roles.',
      avatar: 'SM',
      badge: 'AI SPECIALIST',
    },
    {
      id: 'cn-5',
      name: 'Prof. Rajesh Verma',
      title: 'Head of Admissions @ IIM Ahmedabad Mentor',
      experience: '20+ Years Exp',
      rating: '4.9 ★ (240+ Reviews)',
      fee: '65 Credits / Session',
      expertise: ['CAT Exam Prep', 'MBA GD/PI Training', 'Corporate Leadership'],
      bio: 'Expert guidance for top Indian B-school admissions and executive career pivots.',
      avatar: 'RV',
      badge: 'MBA MENTOR',
    },
  ];

  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="counselors" />

      <div class="flex-1 flex">
        <Sidebar activeTab="counselors" role="student" />

        <main class="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Header Banner */}
          <div class="mb-8">
            <div class="inline-block bg-yellow border-3 border-navy px-3 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-2">
              VERIFIED MENTORS DIRECTORY
            </div>
            <h1 class="font-grotesk font-extrabold text-3xl text-navy">
              Book 1-on-1 Sessions with <span class="text-rust">Top Indian Experts</span>
            </h1>
            <p class="font-body text-sm text-navy-muted mt-1">
              Connect via video call or chat for resume reviews, mock interviews, and personalized career roadmaps.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop mb-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="md:col-span-2">
                <label class="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                  Search Counselor Name or Expertise
                </label>
                <input
                  type="text"
                  defaultValue="Dr. Ramesh Kumar"
                  placeholder="e.g. System Design, UPSC, AI, IIM..."
                  class="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                />
              </div>

              <div>
                <label class="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                  Domain Specialty
                </label>
                <select class="w-full bg-parchment border-3 border-navy rounded-xl px-3 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none">
                  <option>All Specializations</option>
                  <option>Software Engineering & IT</option>
                  <option>UI/UX & Product</option>
                  <option>UPSC & Government Exams</option>
                  <option>MBA & Management</option>
                </select>
              </div>

              <div>
                <label class="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                  Credit Fee Range
                </label>
                <select class="w-full bg-parchment border-3 border-navy rounded-xl px-3 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none">
                  <option>Any Fee Rate</option>
                  <option>Under 50 Credits</option>
                  <option>50 - 70 Credits</option>
                </select>
              </div>
            </div>
          </div>

          {/* Counselors Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {counselors.map((counselor) => (
              <Card key={counselor.id} color="white" className="flex flex-col justify-between">
                <div>
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center space-x-4">
                      <div class="w-14 h-14 rounded-2xl bg-yellow border-3 border-navy flex items-center justify-center font-grotesk font-extrabold text-xl text-navy shadow-pop-sm">
                        {counselor.avatar}
                      </div>
                      <div>
                        <div class="flex items-center space-x-2">
                          <h3 class="font-grotesk font-extrabold text-lg text-navy">{counselor.name}</h3>
                          <StatusBadge text={counselor.badge} status="success" />
                        </div>
                        <p class="font-mono text-xs font-bold text-navy-muted">{counselor.title}</p>
                        <div class="flex items-center space-x-3 mt-1 text-xs font-mono">
                          <span class="text-rust font-bold">{counselor.rating}</span>
                          <span class="text-navy-muted">• {counselor.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p class="font-body text-xs text-navy mb-4 bg-parchment p-3 rounded-xl border border-navy">
                    "{counselor.bio}"
                  </p>

                  <div class="mb-4">
                    <div class="font-grotesk font-bold text-xs text-navy mb-2">Key Areas of Expertise:</div>
                    <div class="flex flex-wrap gap-1.5">
                      {counselor.expertise.map((exp, idx) => (
                        <span key={idx} class="bg-sky/20 border border-navy text-navy font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div class="pt-4 border-t-2 border-navy/20 flex items-center justify-between">
                  <div class="font-mono text-xs font-bold text-rust bg-rust-container px-3 py-1 rounded-full border border-navy">
                    {counselor.fee}
                  </div>
                  <div class="flex space-x-2">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button variant="primary" size="sm">
                      Book Session →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
