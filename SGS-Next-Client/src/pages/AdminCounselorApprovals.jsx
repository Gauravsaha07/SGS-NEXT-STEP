import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import LoadingScreen from '../components/LoadingScreen';
import toast from 'react-hot-toast';
import { setAdminData } from '../features/admin/adminSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import adminService from '../services/adminService';
import ApprovalCard from '../components/ApprovalCard';

export default function AdminCounselorApprovals() {


  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)

  const { data, isLoading, isSuccess, isError, error } = useQuery({ queryKey: ["admin"], queryFn: () => adminService.fetchAdminOverview(user.token) })
  const { counselors } = useSelector(state => state.admin)

  const pendingRequests = counselors?.filter(item => item.status !== "accepted")



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
    <div className="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="admin" />

      <div className="flex-1 flex">
        <Sidebar activeTab="admin_approvals" role="admin" />

        <main className="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          <div className="mb-8">
            <div className="inline-block bg-yellow border-3 border-navy px-3 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-2">
              MODERATION QUEUE
            </div>
            <h1 className="font-grotesk font-extrabold text-3xl text-navy">
              Pending Counselor <span className="text-rust">Approvals</span>
            </h1>
            <p className="font-body text-sm text-navy-muted mt-1">
              Review credential documents and approve or reject mentor partner applications.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl">
            {pendingRequests?.map((app) => (
              <ApprovalCard key={app._id} app={app} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
