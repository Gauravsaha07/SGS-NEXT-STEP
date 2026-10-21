import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function AdminCreditRequests() {
  const requests = [
    { id: 'cr-401', student: 'Rohan Gupta', college: 'DTU Delhi', credits: '100 Credits', reason: 'Financial Hardship Grant Request', date: '24 Jul 2026', status: 'Pending Review' },
    { id: 'cr-402', student: 'Meera Nambiar', college: 'CUSAT Kerala', credits: '50 Credits', reason: 'Manual Bank Transfer Verification (Ref #8932)', date: '23 Jul 2026', status: 'Pending Review' },
  ];

  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="admin" />

      <div class="flex-1 flex">
        <Sidebar activeTab="admin_credit_requests" role="admin" />

        <main class="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          <div class="mb-8">
            <div class="inline-block bg-yellow border-3 border-navy px-3 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-2">
              CREDIT AUDIT
            </div>
            <h1 class="font-grotesk font-extrabold text-3xl text-navy">
              Manual Credit <span class="text-rust">Requests & Grants</span>
            </h1>
            <p class="font-body text-sm text-navy-muted mt-1">
              Approve student hardship grant requests or manual bank transfer credit additions.
            </p>
          </div>

          <div class="space-y-4 max-w-4xl">
            {requests.map((r) => (
              <div key={r.id} class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div class="flex items-center space-x-2">
                    <h3 class="font-grotesk font-extrabold text-lg text-navy">{r.student}</h3>
                    <StatusBadge text={r.credits} status="success" />
                  </div>
                  <p class="font-mono text-xs text-navy-muted">{r.college} • {r.date}</p>
                  <p class="font-body text-xs text-navy mt-1">Reason: "{r.reason}"</p>
                </div>

                <div class="flex space-x-3 w-full md:w-auto">
                  <button type="button" class="px-4 py-2 bg-parchment border-2 border-navy rounded-xl font-grotesk font-bold text-xs text-navy shadow-pop-sm">
                    Decline
                  </button>
                  <button type="button" class="px-4 py-2 bg-yellow hover:bg-yellow-fixed border-2 border-navy rounded-xl font-grotesk font-extrabold text-xs text-navy shadow-pop-sm">
                    Grant {r.credits} ✓
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
