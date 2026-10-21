import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import roadmapService from '../services/roadmapService';
import LoadingScreen from '../components/LoadingScreen';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function RoadmapGenerator() {

  const navigate = useNavigate()


  const { user } = useSelector(state => state.auth)

  const { mutate, data, isPending, isSuccess, isError, error } = useMutation({ mutationFn: (credentials) => roadmapService.generateRoadmap(credentials) })

  const [formData, setFormData] = useState({
    interest: "",
    skill_level: "beginner",
    budget: "",
    learning_mode: "",
    additional_info: ""
  })

  const { interest, skill_level, budget, learning_mode, additional_info } = formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    mutate({
      token: user.token,
      ...formData
    })
  }


  useEffect(() => {

    if (isSuccess && data) {
      navigate("/auth/profile/my-roadmaps")
    }

    if (isError && error) {
      toast.error(error?.response.data.message)
    }

  }, [isError, error, data, isSuccess])


  if (isPending) {
    return (
      <LoadingScreen loadingMessage='Generating Roadmap....' />
    )
  }

  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="roadmap" />

      <div className="flex-1 flex">
        <Sidebar activeTab="roadmap" role="student" />

        <main className="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Header */}
          <div className="mb-8 max-w-3xl">
            <div className="inline-block bg-yellow border-3 border-navy px-3 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-2">
              AI ENGINE V2.4
            </div>
            <h1 className="font-grotesk font-extrabold text-3xl text-navy">
              Generate Custom <span className="text-rust">AI Career Roadmap</span>
            </h1>
            <p className="font-body text-sm text-navy-muted mt-1">
              Answer a few questions to generate a step-by-step learning path customized for the Indian tech and job market.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-parchment-card border-4 border-navy rounded-3xl p-8 shadow-pop relative">
                <div className="absolute -top-3 -right-3 bg-rust text-white font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 border-2 border-navy rotate-3 shadow-pop-sm">
                  10 Credits / Generation
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Target Role */}
                  <div>
                    <label className="block font-grotesk font-extrabold text-sm uppercase tracking-wider text-navy mb-2">
                      1. Target Career Role
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      value={interest}
                      name='interest'
                      onChange={handleChange}
                      placeholder="e.g. Data Scientist, IAS Officer, Product Manager..."
                      className="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-3 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-grotesk font-extrabold text-sm uppercase tracking-wider text-navy mb-2">
                      Budget
                    </label>
                    <input
                      type="number"
                      defaultValue=""
                      value={budget}
                      name='budget'
                      onChange={handleChange}
                      placeholder="5000 INR"
                      className="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-3 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                    />
                  </div>

                  {/* Step 2: Current Experience */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-2">
                        2. Current Knowledge Level
                      </label>
                      <select
                        value={skill_level}
                        name='skill_level'
                        onChange={handleChange} className="w-full bg-parchment border-3 border-navy rounded-xl px-3 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none">
                        <option selected value={"beginner"}>Beginner </option>
                        <option value={"intermediate"}>Intermediate </option>
                        <option value={"advanced"}>Advanced</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-2">
                        3. Learning Mode
                      </label>
                      <select value={learning_mode}
                        name='learning_mode'
                        onChange={handleChange} className="w-full bg-parchment border-3 border-navy rounded-xl px-3 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none">
                        <option value={'offline'}>Offline</option>
                        <option value={'online'}>Online</option>
                        <option value={'hybrid'}>Hybrid</option>
                      </select>
                    </div>
                  </div>
                  {/* Step 4: Special Instructions */}
                  <div>
                    <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-2">
                      5. Specific Goal / Background Notes
                    </label>
                    <textarea
                      value={additional_info}
                      name='additional_info'
                      onChange={handleChange}
                      rows={3}
                      defaultValue=""
                      placeholder="Share your specific constraints..."
                      className="w-full bg-parchment border-3 border-navy rounded-xl p-4 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="pt-4 border-t-2 border-navy/20 flex items-center justify-between">
                    <div className="font-mono text-xs text-navy-muted font-bold">
                      Cost: <span className="text-rust">10 Credits</span> (Balance: {user.credits})
                    </div>
                    <Button type='submit' variant="primary" size="lg">
                      ⚡ GENERATE AI ROADMAP NOW →
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Information Side Panel */}
            <div className="space-y-6">
              <div className="bg-yellow border-4 border-navy rounded-3xl p-6 shadow-pop">
                <StatusBadge text="HOW IT WORKS" status="success" />
                <h3 className="font-grotesk font-extrabold text-xl text-navy mt-3">Tailored for Indian Students</h3>
                <p className="font-body text-xs text-navy mt-2 leading-relaxed">
                  Our AI engine analyzes real hiring patterns across Indian IT hubs (Bengaluru, Hyderabad, Gurgaon, Pune) to build month-by-month phase milestones.
                </p>
              </div>

              <div className="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <h3 className="font-grotesk font-extrabold text-lg text-navy mb-3">What You Will Get:</h3>
                <ul className="space-y-3 font-body text-xs text-navy">
                  <li className="flex items-start space-x-2">
                    <span className="text-rust font-bold">✓</span>
                    <span>Month-by-month phase breakdown with project ideas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-rust font-bold">✓</span>
                    <span>Direct links to top free documentation & courses</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-rust font-bold">✓</span>
                    <span>Interview question banks & salary expectations</span>
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
