import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import { useEffect, useState } from 'react';
import { setAdminData } from '../features/admin/adminSlice';
import toast from 'react-hot-toast';
import LoadingScreen from '../components/LoadingScreen';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import adminService from '../services/adminService';
import CategoryForm from '../components/CategoryForm';

export default function AdminCategories() {

  const [showForm, setShowForm] = useState(false)


  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)

  const { data, isLoading, isSuccess, isError, error } = useQuery({ queryKey: ["admin"], queryFn: () => adminService.fetchAdminOverview(user.token) })
  const { categories } = useSelector(state => state.admin)

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

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
        <Sidebar activeTab="admin_categories" role="admin" />

        <main className="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <div className="inline-block bg-yellow border-3 border-navy px-3 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-2">
                CAREER CATEGORIES
              </div>
              <h1 className="font-grotesk font-extrabold text-3xl text-navy">
                Career Categories & <span className="text-rust">Skill Tags</span>
              </h1>
            </div>
            <Button clickAction={handleShowForm} variant="accent" size="md">
              + Add New Category
            </Button>
          </div>

          {
            showForm && <CategoryForm handleShowForm={handleShowForm} />
          }


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories?.map((cat, index) => (
              <Card key={cat._id} color="white">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-grotesk font-extrabold text-xl text-navy">{cat.title}</h3>
                  <StatusBadge text={index + 1} status="info" />
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
