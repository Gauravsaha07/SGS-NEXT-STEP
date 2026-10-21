import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function CareerDetail() {
  const hiringCompanies = ['Razorpay', 'Swiggy', 'Flipkart', 'Zomato', 'TCS Digital', 'Infosys Springboard'];

  const salaryPhases = [
    { level: 'Entry Level (0-2 Yrs)', range: '₹6.5L - ₹10L / year', note: 'SDE-1 Roles at Startups & Product Firms' },
    { level: 'Mid Level (3-5 Yrs)', range: '₹14L - ₹24L / year', note: 'Senior Frontend / Fullstack Lead' },
    { level: 'Lead / Principal (6+ Yrs)', range: '₹28L - ₹45L / year', note: 'Staff Architect & Tech Lead' },
  ];

  const skillTree = [
    { title: 'Frontend Technologies', items: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'State Management (Redux/Zustand)'] },
    { title: 'Backend & Databases', items: ['Node.js / Express', 'PostgreSQL', 'MongoDB', 'REST APIs & GraphQL', 'Redis Caching'] },
    { title: 'DevOps & Tooling', items: ['Git & GitHub Workflow', 'Docker Containers', 'AWS S3 & EC2', 'CI/CD Pipelines'] },
  ];

  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="explorer" />

      <div class="flex-1 flex">
        <Sidebar activeTab="explorer" role="student" />

        <main class="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Back Navigation */}
          <div class="mb-4">
            <a href="#" class="font-grotesk font-bold text-xs text-navy hover:text-rust flex items-center space-x-1">
              <span>← Back to Career Explorer</span>
            </a>
          </div>

          {/* Main Title Card */}
          <div class="bg-yellow border-4 border-navy rounded-3xl p-8 shadow-pop mb-8 relative">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div class="flex items-center space-x-3 mb-2">
                  <StatusBadge text="HIGH DEMAND IN INDIA" status="success" />
                  <span class="font-mono text-xs font-bold text-navy-muted">CAREER ID: #FE-309</span>
                </div>
                <h1 class="font-grotesk font-extrabold text-4xl text-navy">Full-Stack Web Engineer</h1>
                <p class="font-body text-sm text-navy-muted mt-1 max-w-2xl">
                  Build modern, scalable web platforms using JavaScript ecosystem (MERN stack + Next.js). High demand across Indian tech hubs like Bengaluru, Gurgaon, and Hyderabad.
                </p>
              </div>

              <div class="bg-parchment-card border-3 border-navy p-4 rounded-2xl shadow-pop-sm text-center min-w-[200px]">
                <div class="font-mono text-[10px] font-bold text-navy-muted uppercase">Avg Starting Package</div>
                <div class="font-grotesk font-extrabold text-2xl text-rust">₹8L - ₹15L/yr</div>
                <div class="font-mono text-[10px] text-navy font-semibold mt-1">14,200+ Active Vacancies</div>
              </div>
            </div>

            <div class="mt-6 pt-6 border-t-3 border-navy flex flex-wrap gap-4 items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="font-grotesk font-bold text-xs text-navy">Top Employers Hiring:</span>
                {hiringCompanies.map((c, i) => (
                  <span key={i} class="bg-white border-2 border-navy px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold text-navy">
                    {c}
                  </span>
                ))}
              </div>

              <Button variant="accent" size="md">
                ⚡ Generate Personal AI Roadmap
              </Button>
            </div>
          </div>

          {/* Grid Layout: Salary & Skills */}
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Salary Progression & Skills Breakdown */}
            <div class="lg:col-span-2 space-y-8">
              {/* Salary Trajectory Card */}
              <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <h2 class="font-grotesk font-extrabold text-xl text-navy mb-4">Indian Salary Trajectory</h2>
                <div class="space-y-4">
                  {salaryPhases.map((sp, idx) => (
                    <div key={idx} class="bg-parchment border-3 border-navy rounded-2xl p-4 flex justify-between items-center shadow-pop-sm">
                      <div>
                        <div class="font-grotesk font-extrabold text-base text-navy">{sp.level}</div>
                        <p class="font-body text-xs text-navy-muted mt-0.5">{sp.note}</p>
                      </div>
                      <div class="font-mono text-sm font-extrabold text-rust bg-rust-container px-3 py-1.5 rounded-full border-2 border-navy">
                        {sp.range}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Tree Card */}
              <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <h2 class="font-grotesk font-extrabold text-xl text-navy mb-4">Required Technology Stack</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {skillTree.map((st, i) => (
                    <div key={i} class="bg-sky/20 border-3 border-navy rounded-2xl p-4">
                      <h3 class="font-grotesk font-extrabold text-sm text-navy mb-3 pb-2 border-b-2 border-navy">
                        {st.title}
                      </h3>
                      <ul class="space-y-2">
                        {st.items.map((item, j) => (
                          <li key={j} class="flex items-center space-x-2 font-mono text-xs text-navy">
                            <span class="text-rust">✔</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 1 Col: Counselor Guidance & Prerequisites */}
            <div class="space-y-8">
              <div class="bg-teal-container border-4 border-navy rounded-3xl p-6 shadow-pop">
                <StatusBadge text="EXPERT COUNSELOR MATCH" status="info" />
                <h3 class="font-grotesk font-extrabold text-xl text-navy mt-3">Dr. Ramesh Kumar</h3>
                <p class="font-mono text-xs text-navy">Ex-Google Senior Staff Engineer</p>
                <p class="font-body text-xs text-navy mt-2">
                  "I have guided over 400+ Indian students into top full-stack developer roles. Book a 1-on-1 resume & portfolio review."
                </p>
                <div class="mt-4 pt-4 border-t-2 border-navy">
                  <Button variant="primary" size="md" className="w-full">
                    Book Session (50 Credits)
                  </Button>
                </div>
              </div>

              <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <h3 class="font-grotesk font-extrabold text-lg text-navy mb-3">Prerequisite Qualifications</h3>
                <ul class="space-y-2 text-xs font-body text-navy">
                  <li class="flex items-start space-x-2">
                    <span class="text-rust font-bold">•</span>
                    <span>B.Tech / B.E. / BCA / MCA or equivalent coding bootcamp degree</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-rust font-bold">•</span>
                    <span>Strong understanding of Data Structures & Algorithms (LeetCode Easy/Medium)</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-rust font-bold">•</span>
                    <span>At least 2 live deployed projects hosted on Vercel or Render</span>
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
