import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function RoadmapResult() {
  const phases = [
    {
      phase: 'Phase 1 (Month 1-2)',
      title: 'Frontend Foundations & Modern React',
      status: 'COMPLETED (100%)',
      badgeStatus: 'success',
      topics: [
        'HTML5 Semantic Markup & Accessibility',
        'CSS Grid, Flexbox & Tailwind CSS Utility Styling',
        'ES6+ JavaScript (Promises, Async/Await, Array Methods)',
        'React 18 Component Architecture & Hooks',
      ],
      project: 'Build a Responsive Portfolio & E-commerce Product Showcase UI',
    },
    {
      phase: 'Phase 2 (Month 3-4)',
      title: 'Node.js Backend, REST APIs & Databases',
      status: 'IN PROGRESS (65%)',
      badgeStatus: 'info',
      topics: [
        'Node.js Runtime & Express Server Setup',
        'RESTful API Design & Middleware Authentication',
        'PostgreSQL & MongoDB Database Schemas',
        'JWT Tokens, Password Hashing & Security',
      ],
      project: 'Build a Full-Stack Career Guidance Portal with User Auth',
    },
    {
      phase: 'Phase 3 (Month 5)',
      title: 'Full-Stack Integration & Next.js SSR',
      status: 'UPCOMING',
      badgeStatus: 'warning',
      topics: [
        'Next.js App Router, Server Components & SSR',
        'Vercel & Render Deployment Pipelines',
        'State Management with Zustand & React Query',
        'Docker Container Basics',
      ],
      project: 'Deploy a Production-Ready SaaS Application',
    },
    {
      phase: 'Phase 4 (Month 6)',
      title: 'Interview Prep & Campus Placements',
      status: 'LOCKED',
      badgeStatus: 'purple',
      topics: [
        'Top 50 LeetCode Medium DSA Questions in JS',
        'System Design Fundamentals (Load Balancers, DB Indexing)',
        'Mock Interviews with Verified Counselors',
        'Resume ATS Optimization & LinkedIn Networking',
      ],
      project: 'Land 3+ Interview Offers at Top Indian Product Startups',
    },
  ];

  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="roadmap" />

      <div class="flex-1 flex">
        <Sidebar activeTab="roadmap" role="student" />

        <main class="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Header Banner */}
          <div class="bg-yellow border-4 border-navy rounded-3xl p-8 shadow-pop mb-8 relative">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div class="flex items-center space-x-3 mb-2">
                  <StatusBadge text="AI GENERATED PATH" status="success" />
                  <span class="font-mono text-xs font-bold text-navy-muted">GENERATED ON: 24 JUL 2026</span>
                </div>
                <h1 class="font-grotesk font-extrabold text-3xl text-navy">
                  Full-Stack Web Engineer Roadmap
                </h1>
                <p class="font-body text-sm text-navy-muted mt-1">
                  Target Role: <span class="font-bold text-navy">Full-Stack Developer</span> • Estimated Timeline: <span class="font-bold text-rust">6 Months</span> • Target Package: <span class="font-bold text-navy">₹8L - ₹15L / yr</span>
                </p>
              </div>

              <div class="flex items-center space-x-3">
                <Button variant="outline" size="md">
                  📥 Export PDF
                </Button>
                <Button variant="accent" size="md">
                  + Add to Active Goals
                </Button>
              </div>
            </div>
          </div>

          {/* Timeline Phases */}
          <div class="space-y-6 max-w-5xl">
            {phases.map((p, idx) => (
              <div key={idx} class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop relative">
                {/* Connecting Line Indicator */}
                {idx < phases.length - 1 && (
                  <div class="hidden lg:block absolute left-8 -bottom-7 w-1 h-7 bg-navy"></div>
                )}

                <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-4 border-b-2 border-navy/20">
                  <div>
                    <div class="font-mono text-xs font-bold text-rust uppercase tracking-wider">{p.phase}</div>
                    <h2 class="font-grotesk font-extrabold text-xl text-navy mt-0.5">{p.title}</h2>
                  </div>
                  <StatusBadge text={p.status} status={p.badgeStatus} />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div class="bg-parchment border-2 border-navy p-4 rounded-2xl">
                    <h3 class="font-grotesk font-bold text-xs text-navy uppercase mb-2">Key Skills & Learning Goals:</h3>
                    <ul class="space-y-1.5 font-body text-xs text-navy">
                      {p.topics.map((t, i) => (
                        <li key={i} class="flex items-start space-x-2">
                          <span class="text-rust font-bold">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div class="bg-sky/20 border-2 border-navy p-4 rounded-2xl flex flex-col justify-between">
                    <div>
                      <h3 class="font-grotesk font-bold text-xs text-navy uppercase mb-2">Milestone Project:</h3>
                      <p class="font-grotesk font-extrabold text-sm text-navy">🛠️ {p.project}</p>
                    </div>
                    <div class="mt-4 pt-2 border-t border-navy/20 flex justify-between items-center">
                      <span class="font-mono text-[10px] font-bold text-navy-muted">Recommended: 15 hrs/wk</span>
                      <Button variant="primary" size="sm">
                        Mark Phase Done
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
