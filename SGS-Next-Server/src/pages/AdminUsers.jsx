import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function AdminUsers() {
  const users = [
    { id: 'usr-101', name: 'Aarav Sharma', email: 'aarav.sharma@iitd.ac.in', role: 'Student', credits: '120 pts', status: 'Active', joined: '12 May 2026' },
    { id: 'usr-102', name: 'Dr. Ramesh Kumar', email: 'ramesh.k@iitb.ac.in', role: 'Counselor', credits: '9,200 pts', status: 'Verified', joined: '10 Jan 2026' },
    { id: 'usr-103', name: 'Priya Patel', email: 'priya.patel@gmail.com', role: 'Student', credits: '80 pts', status: 'Active', joined: '20 Jul 2026' },
    { id: 'usr-104', name: 'Ananya Roy', email: 'ananya.roy@swiggy.in', role: 'Counselor', credits: '4,500 pts', status: 'Verified', joined: '04 Mar 2026' },
  ];

  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="admin" />

      <div class="flex-1 flex">
        <Sidebar activeTab="admin_users" role="admin" />

        <main class="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Header */}
          <div class="mb-8">
            <div class="inline-block bg-yellow border-3 border-navy px-3 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-2">
              USER MANAGEMENT
            </div>
            <h1 class="font-grotesk font-extrabold text-3xl text-navy">
              User Directory & <span class="text-rust">Permissions</span>
            </h1>
            <p class="font-body text-sm text-navy-muted mt-1">
              Search, filter, inspect, and manage active student and counselor accounts across India.
            </p>
          </div>

          {/* Search Filter Bar */}
          <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop mb-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="md:col-span-2">
                <input
                  type="text"
                  defaultValue="Aarav Sharma"
                  placeholder="Search user by name or email..."
                  class="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                />
              </div>
              <div>
                <select class="w-full bg-parchment border-3 border-navy rounded-xl px-3 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none">
                  <option>All Roles</option>
                  <option>Student</option>
                  <option>Counselor</option>
                  <option>Admin</option>
                </select>
              </div>
              <div>
                <Button variant="primary" size="md" className="w-full">
                  Filter Users
                </Button>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
            <div class="overflow-x-auto">
              <table class="w-full text-left font-body text-xs">
                <thead>
                  <tr class="border-b-3 border-navy font-grotesk font-extrabold text-navy uppercase text-[11px] bg-parchment-dim">
                    <th class="p-3">User Profile</th>
                    <th class="p-3">Role</th>
                    <th class="p-3">Wallet Credits</th>
                    <th class="p-3">Joined Date</th>
                    <th class="p-3">Status</th>
                    <th class="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y-2 divide-navy/10 font-mono">
                  {users.map((u) => (
                    <tr key={u.id} class="hover:bg-parchment/60">
                      <td class="p-3">
                        <div class="font-bold text-navy">{u.name}</div>
                        <div class="text-[10px] text-navy-muted">{u.email}</div>
                      </td>
                      <td class="p-3 font-bold text-navy">{u.role}</td>
                      <td class="p-3 font-bold text-rust">{u.credits}</td>
                      <td class="p-3 text-navy-muted">{u.joined}</td>
                      <td class="p-3">
                        <StatusBadge text={u.status} status="success" />
                      </td>
                      <td class="p-3 text-right space-x-2">
                        <button type="button" class="px-2 py-1 bg-parchment border border-navy rounded font-mono text-[10px] font-bold text-navy">
                          Edit
                        </button>
                        <button type="button" class="px-2 py-1 bg-rust text-white border border-navy rounded font-mono text-[10px] font-bold">
                          Suspend
                        </button>
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
