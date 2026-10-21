import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import counselorService from '../services/counselorService';
import LoadingScreen from '../components/LoadingScreen';
import { useEffect } from 'react';
import { setCounselors } from '../features/counselor/counselor';
import AlertModal from "../components/AlertModal"
import { useNavigate } from 'react-router-dom';

export default function CounselorList() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { counselors } = useSelector(state => state.counselor);


  const queryClient = useQueryClient()
  const { data, isLoading, isError, isSuccess, error } = useQuery({ queryKey: ['counselor'], queryFn: counselorService.fetchCounselors })


  useEffect(() => {

    if (isSuccess) {
      dispatch(setCounselors(data))
    }

  }, [isSuccess])


  if (isError && error) {
    return (
      <AlertModal type='error' open={true} title={"Error Occured"} message={isError && error} onConfirm={() => navigate("/auth/profile")} onClose={() => navigate("/")} />
    )
  }



  if (isLoading) {
    return (
      <LoadingScreen loadingMessage='Loading Counselors' />
    )
  }

  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="counselors" />

      <div className="flex-1 flex">
        <Sidebar activeTab="counselors" role="student" />

        <main className="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Header Banner */}
          <div className="mb-8">
            <div className="inline-block bg-yellow border-3 border-navy px-3 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-2">
              VERIFIED MENTORS DIRECTORY
            </div>
            <h1 className="font-grotesk font-extrabold text-3xl text-navy">
              Book 1-on-1 Sessions with <span className="text-rust">Top Indian Experts</span>
            </h1>
            <p className="font-body text-sm text-navy-muted mt-1">
              Connect via video call or chat for resume reviews, mock interviews, and personalized career roadmaps.
            </p>
          </div>


          {/* Counselors Grid */}
          {
            counselors && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {counselors.map((counselor) => (
                  <Card key={counselor._id} color="white" className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 rounded-2xl bg-yellow border-3 border-navy flex items-center justify-center font-grotesk font-extrabold text-xl text-navy shadow-pop-sm">
                            <img className='w-14 h-14 rounded-2xl bg-yellow border-3 border-navy flex items-center justify-center font-grotesk font-extrabold text-xl text-navy shadow-pop-sm' src={counselor.user.profilePic} alt="" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="font-grotesk font-extrabold text-lg text-navy">{counselor.user.name}</h3>
                              <StatusBadge text={counselor.isAvailable} status="success" />
                            </div>
                            <p className="font-mono text-xs font-bold text-navy-muted">{counselor.title}</p>
                            <div className="flex items-center space-x-3 mt-1 text-xs font-mono">
                              <span className="text-rust font-bold">{5}</span>
                              <span className="text-navy-muted">• {counselor.category.title}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="font-body text-xs text-navy mb-4 bg-parchment p-3 rounded-xl">
                        Location : {counselor.user.location}
                      </p>


                      <div className="mb-4">
                        <div className="font-grotesk font-bold text-xs text-navy mb-2">Qualifications : </div>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="bg-sky/20 border border-navy text-navy font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                            {counselor.user.qualification}
                          </span>

                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t-2 border-navy/20 flex items-center justify-between">
                      <div className="font-mono text-xs font-bold text-rust bg-rust-container px-3 py-1 rounded-full border border-navy">
                        Exp : {counselor.experience} Years
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                        <Button variant="primary" size="sm">
                          Book Session →
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )
          }
        </main>
      </div>
    </div>
  );
}
