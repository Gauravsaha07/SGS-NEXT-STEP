import React, { useState } from 'react';

// Import all 20 page screens for workshop previewing
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import CareerExplorer from './pages/CareerExplorer';
import CareerDetail from './pages/CareerDetail';
import CounselorList from './pages/CounselorList';
import CounselorProfile from './pages/CounselorProfile';
import ChatPage from './pages/ChatPage';
import RoadmapGenerator from './pages/RoadmapGenerator';
import RoadmapResult from './pages/RoadmapResult';
import MyCredits from './pages/MyCredits';
import BecomeCounselor from './pages/BecomeCounselor';
import CounselorDashboard from './pages/CounselorDashboard';
import AdminOverview from './pages/AdminOverview';
import AdminUsers from './pages/AdminUsers';
import AdminCategories from './pages/AdminCategories';
import AdminCounselorApprovals from './pages/AdminCounselorApprovals';
import AdminCreditRequests from './pages/AdminCreditRequests';
import AdminAiAssistant from './pages/AdminAiAssistant';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('student_dashboard');
  const [isOpen, setIsOpen] = useState(true);

  const screens = [
    { group: '🌐 Public Landing Page', items: [
      { id: 'landing_page', label: 'LandingPage', component: <LandingPage /> },
    ]},
    { group: '🔑 Auth Pages', items: [
      { id: 'login', label: 'LoginPage', component: <LoginPage /> },
      { id: 'register', label: 'RegisterPage', component: <RegisterPage /> },
    ]},
    { group: '🎒 Student Pages', items: [
      { id: 'student_dashboard', label: 'StudentDashboard', component: <StudentDashboard /> },
      { id: 'career_explorer', label: 'CareerExplorer', component: <CareerExplorer /> },
      { id: 'career_detail', label: 'CareerDetail', component: <CareerDetail /> },
      { id: 'counselor_list', label: 'CounselorList', component: <CounselorList /> },
      { id: 'counselor_profile', label: 'CounselorProfile', component: <CounselorProfile /> },
      { id: 'chat_page', label: 'ChatPage', component: <ChatPage /> },
      { id: 'roadmap_generator', label: 'RoadmapGenerator', component: <RoadmapGenerator /> },
      { id: 'roadmap_result', label: 'RoadmapResult', component: <RoadmapResult /> },
      { id: 'my_credits', label: 'MyCredits', component: <MyCredits /> },
      { id: 'become_counselor', label: 'BecomeCounselor', component: <BecomeCounselor /> },
    ]},
    { group: '🎓 Counselor Pages', items: [
      { id: 'counselor_dashboard', label: 'CounselorDashboard', component: <CounselorDashboard /> },
    ]},
    { group: '🛡️ Admin Suite Pages', items: [
      { id: 'admin_overview', label: 'AdminOverview', component: <AdminOverview /> },
      { id: 'admin_users', label: 'AdminUsers', component: <AdminUsers /> },
      { id: 'admin_categories', label: 'AdminCategories', component: <AdminCategories /> },
      { id: 'admin_approvals', label: 'AdminCounselorApprovals', component: <AdminCounselorApprovals /> },
      { id: 'admin_credit_requests', label: 'AdminCreditRequests', component: <AdminCreditRequests /> },
      { id: 'admin_ai', label: 'AdminAiAssistant', component: <AdminAiAssistant /> },
    ]},
  ];

  // Flattened list to quickly find active component
  const allItems = screens.flatMap(s => s.items);
  const currentItem = allItems.find(item => item.id === activeScreen) || allItems[0];

  return (
    <div class="relative min-h-screen">
      {/* Floating Interactive Workshop Screen Switcher Bar */}
      <div class="fixed bottom-4 right-4 z-50 flex flex-col items-end">
        {isOpen ? (
          <div class="bg-navy border-4 border-yellow p-4 rounded-2xl shadow-pop-lg max-w-sm text-white font-grotesk space-y-3">
            <div class="flex items-center justify-between border-b-2 border-yellow/30 pb-2">
              <div class="flex items-center space-x-2">
                <span class="w-3 h-3 rounded-full bg-yellow animate-ping"></span>
                <span class="font-extrabold text-sm text-yellow">WORKSHOP PREVIEWER</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                class="font-mono text-xs text-yellow hover:text-white bg-navy-light px-2 py-0.5 rounded border border-yellow"
              >
                Minimize ✖
              </button>
            </div>

            <p class="font-body text-[11px] text-parchment-dim leading-tight">
              Select any of the {allItems.length} static UI screens below to preview them live in your browser:
            </p>

            <div class="space-y-2">
              <label class="block font-mono text-[10px] font-bold text-yellow uppercase">
                Active Screen ({allItems.length} Total):
              </label>
              <select
                value={activeScreen}
                onChange={(e) => setActiveScreen(e.target.value)}
                class="w-full bg-parchment text-navy font-grotesk font-extrabold text-xs p-2.5 rounded-xl border-2 border-yellow focus:outline-none shadow-pop-sm"
              >
                {screens.map((group, idx) => (
                  <optgroup key={idx} label={group.group}>
                    {group.items.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div class="pt-2 border-t border-yellow/20 flex justify-between items-center text-[10px] font-mono text-parchment-dim">
              <span>Current: <strong class="text-yellow">{currentItem.label}.jsx</strong></span>
              <span class="text-rust">Static Scaffold Mode</span>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            class="bg-yellow text-navy font-grotesk font-extrabold text-xs px-4 py-3 rounded-full border-3 border-navy shadow-pop flex items-center space-x-2 hover:bg-yellow-fixed"
          >
            <span>🖥️ Switch UI Screen ({currentItem.label})</span>
          </button>
        )}
      </div>

      {/* Render Current Active Page Component */}
      {currentItem.component}
    </div>
  );
}
