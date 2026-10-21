import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function AdminCategories() {
  const categories = [
    { name: 'Software Engineering', count: '48 Careers', tags: ['React', 'Node.js', 'System Design', 'DSA'] },
    { name: 'Data Science & AI', count: '24 Careers', tags: ['Python', 'SQL', 'Machine Learning', 'PowerBI'] },
    { name: 'Government & Public Services', count: '18 Careers', tags: ['UPSC', 'SSC CGL', 'State PSC', 'Public Policy'] },
    { name: 'Design & Product Management', count: '16 Careers', tags: ['Figma', 'User Research', 'Agile', 'Wireframing'] },
  ];

  return (
    <div class="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="admin" />

      <div class="flex-1 flex">
        <Sidebar activeTab="admin_categories" role="admin" />

        <main class="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          <div class="mb-8 flex justify-between items-center">
            <div>
              <div class="inline-block bg-yellow border-3 border-navy px-3 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-2">
                TAXONOMY ENGINE
              </div>
              <h1 class="font-grotesk font-extrabold text-3xl text-navy">
                Career Categories & <span class="text-rust">Skill Tags</span>
              </h1>
            </div>
            <Button variant="accent" size="md">
              + Add New Category
            </Button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, idx) => (
              <Card key={idx} color="white">
                <div class="flex justify-between items-start mb-3">
                  <h3 class="font-grotesk font-extrabold text-xl text-navy">{cat.name}</h3>
                  <StatusBadge text={cat.count} status="info" />
                </div>

                <div class="mb-4">
                  <div class="font-mono text-xs font-bold text-navy-muted uppercase mb-2">Active Tags:</div>
                  <div class="flex flex-wrap gap-1.5">
                    {cat.tags.map((t, i) => (
                      <span key={i} class="bg-yellow/30 border border-navy text-navy font-mono text-xs font-bold px-2.5 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div class="pt-4 border-t-2 border-navy/20 flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Manage Tags
                  </Button>
                  <Button variant="primary" size="sm" className="flex-1">
                    Edit Category
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
