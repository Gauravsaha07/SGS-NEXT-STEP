import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ChatBubble from '../components/ChatBubble';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function ChatPage() {
  const conversations = [
    { id: 1, name: 'Dr. Ramesh Kumar', role: 'Full-Stack Mentor', active: true, unread: 0, avatar: 'RK' },
    { id: 2, name: 'Ananya Roy', role: 'UI/UX Mentor', active: false, unread: 2, avatar: 'AR' },
    { id: 3, name: 'CareerBridge AI Bot', role: 'Automated Support', active: false, unread: 0, avatar: 'AI' },
  ];

  const messages = [
    { id: 101, sender: 'Dr. Ramesh Kumar', time: '10:15 AM', message: 'Namaste Aarav! I reviewed your GitHub repository for the Next.js e-commerce app.', isSelf: false },
    { id: 102, sender: 'Aarav Sharma', time: '10:17 AM', message: 'Thanks Dr. Ramesh! Did you spot any performance issues in the API routes?', isSelf: true },
    { id: 103, sender: 'Dr. Ramesh Kumar', time: '10:20 AM', message: 'Your MongoDB query inside getStaticProps needs indexing on the category field. Other than that, the UI looks very solid!', isSelf: false },
    { id: 104, sender: 'Aarav Sharma', time: '10:22 AM', message: 'Got it! I will add the compound index today. Can we discuss system design mock prep tomorrow at 5 PM?', isSelf: true },
    { id: 105, sender: 'Dr. Ramesh Kumar', time: '10:25 AM', message: 'Yes, absolutely! Make sure to revise load balancer algorithms (Round Robin, Least Connections) beforehand. See you tomorrow!', isSelf: false },
  ];

  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="messages" />

      <div class="flex-1 flex">
        <Sidebar activeTab="messages" role="student" />

        <main class="flex-1 p-8 bg-grid-pattern overflow-y-auto flex">
          <div class="w-full bg-parchment-card border-4 border-navy rounded-3xl shadow-pop flex flex-col lg:flex-row overflow-hidden min-h-[650px]">
            {/* Left Chat Sidebar */}
            <div class="w-full lg:w-80 border-b-4 lg:border-b-0 lg:border-r-4 border-navy bg-parchment p-4 flex flex-col justify-between">
              <div>
                <div class="font-grotesk font-extrabold text-lg text-navy mb-3">Messages & Chats</div>
                <input
                  type="text"
                  placeholder="Search conversations..."
                  class="w-full bg-white border-2 border-navy rounded-xl px-3 py-2 font-body text-xs text-navy shadow-pop-sm mb-4 focus:outline-none"
                />

                <div class="space-y-2">
                  {conversations.map((c) => (
                    <div
                      key={c.id}
                      class={`p-3 rounded-2xl border-2 border-navy cursor-pointer transition-all flex items-center justify-between ${
                        c.active ? 'bg-yellow shadow-pop-sm' : 'bg-white hover:bg-parchment-dim'
                      }`}
                    >
                      <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 rounded-xl bg-sky border-2 border-navy flex items-center justify-center font-grotesk font-extrabold text-sm text-navy shadow-pop-sm">
                          {c.avatar}
                        </div>
                        <div>
                          <div class="font-grotesk font-extrabold text-sm text-navy">{c.name}</div>
                          <div class="font-mono text-[10px] text-navy-muted">{c.role}</div>
                        </div>
                      </div>
                      {c.unread > 0 && (
                        <span class="w-5 h-5 rounded-full bg-rust text-white font-mono text-[10px] font-bold flex items-center justify-center border border-navy">
                          {c.unread}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div class="bg-rust-container border-2 border-navy p-3 rounded-xl mt-4 text-xs font-mono">
                <span class="font-bold text-navy">💡 Quick Tip:</span> Share your GitHub link before every mentorship session.
              </div>
            </div>

            {/* Right Main Chat Window */}
            <div class="flex-1 flex flex-col justify-between bg-parchment-card">
              {/* Chat Window Header */}
              <div class="p-4 border-b-4 border-navy bg-yellow/30 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 rounded-xl bg-sky border-2 border-navy flex items-center justify-center font-grotesk font-extrabold text-sm text-navy">
                    RK
                  </div>
                  <div>
                    <h2 class="font-grotesk font-extrabold text-base text-navy">Dr. Ramesh Kumar</h2>
                    <p class="font-mono text-[10px] text-navy-muted">Online • Next Session: Tomorrow 5:00 PM IST</p>
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <StatusBadge text="ACTIVE MENTORSHIP" status="success" />
                  <Button variant="outline" size="sm">
                    Book Extension
                  </Button>
                </div>
              </div>

              {/* Chat Messages Log */}
              <div class="p-6 overflow-y-auto space-y-4 max-h-[460px] bg-grid-pattern">
                {messages.map((msg) => (
                  <ChatBubble key={msg.id} sender={msg.sender} time={msg.time} message={msg.message} isSelf={msg.isSelf} />
                ))}
              </div>

              {/* Chat Input Bar */}
              <div class="p-4 border-t-4 border-navy bg-parchment">
                <form class="flex items-center space-x-3">
                  <button
                    type="button"
                    class="p-2.5 bg-white border-2 border-navy rounded-xl hover:bg-parchment-dim shadow-pop-sm font-mono text-sm"
                  >
                    📎
                  </button>
                  <input
                    type="text"
                    defaultValue="Thanks Dr. Ramesh! I will push the indexed MongoDB queries now."
                    placeholder="Type your message here..."
                    class="flex-1 bg-white border-3 border-navy rounded-xl px-4 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                  />
                  <Button variant="primary" size="md">
                    Send Message ➔
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
