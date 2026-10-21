import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import authService from '../services/authService';
import LoadingScreen from '../components/LoadingScreen';
import CounselorApplicationForm from '../components/CounselorApplicationForm';

export default function BecomeCounselor() {

  const { user } = useSelector(state => state.auth)

  const { data, isLoading, isSuccess, isError, error } = useQuery({ queryKey: ["category"], queryFn: () => authService.fetchQueries() })







  if (isLoading) {
    return (
      <LoadingScreen loadingMessage='Fetching Categories...' />
    )
  }

  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="counselors" />

      <div className="flex-1 flex">
        <Sidebar activeTab="become_counselor" role="student" />

        <main className="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Header */}
          <div className="mb-8 max-w-3xl">
            <div className="inline-block bg-yellow border-3 border-navy px-3 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-2">
              COUNSELOR PARTNER PROGRAM
            </div>
            <h1 className="font-grotesk font-extrabold text-3xl text-navy">
              Become a <span className="text-rust">Verified Mentor</span> on CareerBridge
            </h1>
            <p className="font-body text-sm text-navy-muted mt-1">
              Share your industry expertise, guide aspiring Indian students, and earn guaranteed credit payouts in INR.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-parchment-card border-4 border-navy rounded-3xl p-8 shadow-pop relative">
                <div className="text-center mb-6 pb-6 border-b-2 border-navy/20">
                  <StatusBadge text="FAST-TRACK APPLICATION" status="success" />
                  <h2 className="font-grotesk font-extrabold text-xl text-navy mt-2">Counselor Onboarding Application</h2>
                </div>

                <CounselorApplicationForm categories={data} />
              </div>
            </div>

            {/* Perks Side Card */}
            <div className="space-y-6">
              <div className="bg-yellow border-4 border-navy rounded-3xl p-6 shadow-pop">
                <StatusBadge text="MENTOR BENEFITS" status="success" />
                <h3 className="font-grotesk font-extrabold text-xl text-navy mt-3">Why Join CareerBridge?</h3>
                <ul className="mt-4 space-y-3 font-body text-xs text-navy">
                  <li className="flex items-start space-x-2">
                    <span className="text-rust font-bold">✓</span>
                    <span>Set your own hours & flexible session availability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-rust font-bold">✓</span>
                    <span>Guaranteed credit payouts directly into your Indian bank account</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-rust font-bold">✓</span>
                    <span>Verified mentor badge on your profile</span>
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
