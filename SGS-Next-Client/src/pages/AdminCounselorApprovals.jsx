import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function AdminCounselorApprovals() {
  const pendingApps = [
    { id: 'app-901', name: 'Prof. Rajesh Verma', title: 'Admissions Mentor @ IIM Ahmedabad', exp: '20+ Yrs', domain: 'MBA & Leadership', status: 'Pending Review', linkedin: 'linkedin.com/in/rajesh-verma' },
    { id: 'app-902', name: 'Kavita Sundaram', title: 'Senior Data Scientist @ Flipkart', exp: '7+ Yrs', domain: 'Data Science & AI', status: 'Pending Review', linkedin: 'linkedin.com/in/kavita-s' },
  ];

  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="admin" />

      <div class="flex-1 flex">
        <Sidebar activeTab="admin_approvals" role="admin" />

        <main class="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          <div class="mb-8">
            <div class="inline-block bg-yellow border-3 border-navy px-3 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-2">
              MODERATION QUEUE
            </div>
            <h1 class="font-grotesk font-extrabold text-3xl text-navy">
              Pending Counselor <span class="text-rust">Approvals</span>
            </h1>
            <p class="font-body text-sm text-navy-muted mt-1">
              Review credential documents and approve or reject mentor partner applications.
            </p>
          </div>

          <div class="space-y-6 max-w-4xl">
            {pendingApps.map((app) => (
              <div key={app.id} class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b-2 border-navy/20">
                  <div>
                    <div class="flex items-center space-x-2">
                      <h2 class="font-grotesk font-extrabold text-xl text-navy">{app.name}</h2>
                      <StatusBadge text={app.status} status="warning" />
                    </div>
                    <p class="font-mono text-xs font-bold text-navy-muted">{app.title} • {app.exp}</p>
                    <p class="font-mono text-xs text-rust mt-0.5">🔗 {app.linkedin}</p>
                  </div>
                  <div class="font-mono text-xs font-bold text-navy bg-yellow px-3 py-1.5 rounded-full border-2 border-navy">
                    Domain: {app.domain}
                  </div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-4">
                  <div class="font-mono text-xs text-navy-muted">
                    📄 Verified Document: <span class="font-bold underline text-navy">Work_ID_Proof.pdf</span>
                  </div>

                  <div class="flex space-x-3">
                    <Button variant="accent" size="sm">
                      Reject Application
                    </Button>
                    <Button variant="primary" size="sm">
                      Approve & Issue Badge ✓
                    </Button>
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
