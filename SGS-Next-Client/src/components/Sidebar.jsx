export default function Sidebar({ activeTab = 'overview', role = 'student' }) {
  const studentNav = [
    { id: 'overview', label: 'My Dashboard', icon: '📊' },
    { id: 'explorer', label: 'Career Explorer', icon: '🧭' },
    { id: 'roadmap', label: 'AI Roadmap', icon: '⚡' },
    { id: 'messages', label: 'Messages & Chat', icon: '💬' },
    { id: 'credits', label: 'My Credits & Wallet', icon: '🪙' },
    { id: 'become_counselor', label: 'Join as Counselor', icon: '🎓' },
  ];

  const adminNav = [
    { id: 'admin_overview', label: 'System Overview', icon: '🛡️' },
    { id: 'admin_users', label: 'User Directory', icon: '👥' },
    { id: 'admin_categories', label: 'Categories & Tags', icon: '🏷️' },
    { id: 'admin_approvals', label: 'Counselor Approvals', icon: '📝' },
    { id: 'admin_credit_requests', label: 'Credit Requests', icon: '💳' },
    { id: 'admin_ai', label: 'AI Prompt Engine', icon: '🤖' },
  ];

  const counselorNav = [
    { id: 'counselor_overview', label: 'Counselor Workspace', icon: '📈' },
    { id: 'counselor_sessions', label: 'Student Bookings', icon: '📅' },
    { id: 'counselor_messages', label: 'Student Messages', icon: '💬' },
    { id: 'counselor_earnings', label: 'Earnings & Credits', icon: '💰' },
  ];

  const items = role === 'admin' ? adminNav : role === 'counselor' ? counselorNav : studentNav;

  return (
    <aside class="w-64 bg-parchment-card border-r-4 border-navy p-4 flex flex-col justify-between min-h-[calc(100vh-65px)]">
      <div class="space-y-6">
        {/* Role Badge */}
        <div class="bg-yellow border-2 border-navy p-3 shadow-pop-sm flex items-center justify-between">
          <div>
            <div class="font-mono text-[10px] font-bold text-navy-muted uppercase">Workspace Mode</div>
            <div class="font-grotesk font-extrabold text-sm text-navy uppercase">{role} Portal</div>
          </div>
          <span class="text-xl">
            {role === 'admin' ? '⚙️' : role === 'counselor' ? '🎓' : '🎒'}
          </span>
        </div>

        {/* Navigation Items */}
        <nav class="space-y-2">
          {items.map((item) => (
            <a
              key={item.id}
              href="#"
              class={`flex items-center space-x-3 px-3 py-2.5 rounded-lg border-2 border-navy transition-all font-grotesk font-bold text-sm ${
                activeTab === item.id
                  ? 'bg-yellow text-navy shadow-pop-sm'
                  : 'bg-parchment text-navy hover:bg-parchment-dim'
              }`}
            >
              <span class="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Footer info box */}
      <div class="bg-rust-container border-2 border-navy p-3 text-xs space-y-1">
        <div class="font-grotesk font-extrabold text-navy">Workshop Scaffold</div>
        <p class="font-mono text-[10px] text-navy-muted">Static UI Template for API integration practice.</p>
      </div>
    </aside>
  );
}
