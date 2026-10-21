import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function MyCredits() {
  const packs = [
    { name: 'Starter Pack', credits: '100 Credits', price: '₹299', perCredit: '₹2.99 / credit', popular: false, badge: 'STARTER' },
    { name: 'Student Value Pack', credits: '300 Credits', price: '₹699', perCredit: '₹2.33 / credit', popular: true, badge: 'MOST POPULAR 🔥' },
    { name: 'Pro Career Pack', credits: '700 Credits', price: '₹1,299', perCredit: '₹1.85 / credit', popular: false, badge: 'BEST VALUE' },
  ];

  const transactions = [
    { id: 'tx-501', title: '1-on-1 Session with Dr. Ramesh Kumar', type: 'Deduction', credits: '-50 Credits', date: '23 Jul 2026', status: 'Completed' },
    { id: 'tx-502', title: 'AI Roadmap Generation (Full-Stack Track)', type: 'Deduction', credits: '-10 Credits', date: '22 Jul 2026', status: 'Completed' },
    { id: 'tx-503', title: 'Welcome Signup Bonus Grant', type: 'Credit Top-up', credits: '+100 Credits', date: '20 Jul 2026', status: 'Granted' },
    { id: 'tx-504', title: 'UPI Payment #UPI890321 (Starter Pack)', type: 'Purchase', credits: '+80 Credits', date: '20 Jul 2026', status: 'Success' },
  ];

  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="credits" />

      <div class="flex-1 flex">
        <Sidebar activeTab="credits" role="student" />

        <main class="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Header & Balance Banner */}
          <div class="bg-yellow border-4 border-navy rounded-3xl p-8 shadow-pop mb-8 relative">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div class="inline-block bg-navy text-yellow font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-2">
                  WALLET & CREDITS
                </div>
                <h1 class="font-grotesk font-extrabold text-3xl text-navy">
                  Manage CareerBridge Credits
                </h1>
                <p class="font-body text-sm text-navy-muted mt-1">
                  Use credits to generate AI roadmaps and book 1-on-1 mentorship calls with verified industry leaders.
                </p>
              </div>

              <div class="bg-parchment-card border-3 border-navy p-6 rounded-2xl shadow-pop text-center min-w-[220px]">
                <div class="font-mono text-xs font-bold text-navy-muted uppercase">AVAILABLE BALANCE</div>
                <div class="font-grotesk font-extrabold text-4xl text-rust mt-1">120 <span class="text-base text-navy">pts</span></div>
                <StatusBadge text="ACTIVE WALLET" status="success" />
              </div>
            </div>
          </div>

          {/* Top-up Packs Section */}
          <div class="mb-10">
            <h2 class="font-grotesk font-extrabold text-2xl text-navy mb-2">Buy Credit Top-Up Packs</h2>
            <p class="font-body text-xs text-navy-muted mb-6">Instant credit delivery via UPI, GPay, PhonePe, or Net Banking.</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packs.map((p, idx) => (
                <Card
                  key={idx}
                  color={p.popular ? 'yellow' : 'white'}
                  className={`relative flex flex-col justify-between ${p.popular ? 'border-4 shadow-pop-lg' : ''}`}
                >
                  <div>
                    <div class="flex justify-between items-center mb-3">
                      <StatusBadge text={p.badge} status={p.popular ? 'success' : 'info'} />
                      <span class="font-mono text-[10px] font-bold text-navy-muted">{p.perCredit}</span>
                    </div>

                    <h3 class="font-grotesk font-extrabold text-2xl text-navy">{p.name}</h3>
                    <div class="font-grotesk font-extrabold text-3xl text-rust mt-2">{p.credits}</div>
                    <div class="font-mono text-xl font-bold text-navy mt-1">{p.price} <span class="text-xs text-navy-muted">inclusive GST</span></div>

                    <ul class="mt-4 space-y-2 font-body text-xs text-navy border-t-2 border-navy/20 pt-4">
                      <li class="flex items-center space-x-2">
                        <span class="text-rust font-bold">✓</span>
                        <span>Never Expires</span>
                      </li>
                      <li class="flex items-center space-x-2">
                        <span class="text-rust font-bold">✓</span>
                        <span>Valid for AI Roadmaps & Calls</span>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-6 pt-4 border-t-2 border-navy/20">
                    <Button variant={p.popular ? 'accent' : 'primary'} size="md" className="w-full">
                      Pay {p.price} via UPI / Card →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Transaction History Ledger */}
          <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
            <h2 class="font-grotesk font-extrabold text-xl text-navy mb-4">Credit Transaction Ledger</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-left font-body text-xs">
                <thead>
                  <tr class="border-b-3 border-navy font-grotesk font-extrabold text-navy uppercase text-[11px] bg-parchment-dim">
                    <th class="p-3">Transaction Details</th>
                    <th class="p-3">Type</th>
                    <th class="p-3">Credits</th>
                    <th class="p-3">Date</th>
                    <th class="p-3">Status</th>
                  </tr>
                </thead>
                <tbody class="divide-y-2 divide-navy/10">
                  {transactions.map((tx) => (
                    <tr key={tx.id} class="hover:bg-parchment/60 font-mono">
                      <td class="p-3 font-bold text-navy">{tx.title}</td>
                      <td class="p-3 text-navy-muted">{tx.type}</td>
                      <td class={`p-3 font-bold ${tx.credits.startsWith('+') ? 'text-green-600' : 'text-rust'}`}>
                        {tx.credits}
                      </td>
                      <td class="p-3 text-navy-muted">{tx.date}</td>
                      <td class="p-3">
                        <StatusBadge text={tx.status} status={tx.status === 'Success' || tx.status === 'Granted' ? 'success' : 'info'} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
