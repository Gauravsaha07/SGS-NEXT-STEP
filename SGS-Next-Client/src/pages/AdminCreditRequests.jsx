import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import LoadingScreen from '../components/LoadingScreen';
import toast from 'react-hot-toast';
import { setAdminData } from '../features/admin/adminSlice';
import { useEffect } from 'react';
import adminService from '../services/adminService';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import CreditRequestCard from '../components/CreditRequestCard';

export default function AdminCreditRequests() {
  const requests = [
    { id: 'cr-401', student: 'Rohan Gupta', college: 'DTU Delhi', credits: '100 Credits', reason: 'Financial Hardship Grant Request', date: '24 Jul 2026', status: 'Pending Review' },
    { id: 'cr-402', student: 'Meera Nambiar', college: 'CUSAT Kerala', credits: '50 Credits', reason: 'Manual Bank Transfer Verification (Ref #8932)', date: '23 Jul 2026', status: 'Pending Review' },
  ];


  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)

  const { data, isLoading, isSuccess, isError, error } = useQuery({ queryKey: ["admin"], queryFn: () => adminService.fetchAdminOverview(user.token) })
  const { credits } = useSelector(state => state.admin)

  const pendingRequests = credits?.filter(item => item.status !== "granted")



  useEffect(() => {

    if (isSuccess) {
      dispatch(setAdminData(data))
    }

    if (isError) {
      toast.error(error?.response?.data?.message, { position: "top-center" })
    }

  }, [isSuccess, isError, error, data])


  if (isLoading) {
    return (
      <LoadingScreen loadingMessage='Fetching All Data...' />
    )
  }



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
            {pendingRequests?.map((r) => (
              <CreditRequestCard key={r} r={r} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
