import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import ChatPage from './ChatPage';
import ChatBubble from '../components/ChatBubble';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setMessage } from '../features/admin/adminSlice';
import { useMutation } from '@tanstack/react-query';
import adminService from '../services/adminService';
import toast from 'react-hot-toast';
import LoadingScreen from '../components/LoadingScreen';


export default function AdminAiAssistant() {

  const dispatch = useDispatch()

  //  { id: 101, sender: 'Dr. Ramesh Kumar', time: '10:15 AM', message: 'Namaste Aarav! I reviewed your GitHub repository for the Next.js e-commerce app.', isSelf: false }

  const { user } = useSelector(state => state.auth)
  const { messages } = useSelector(state => state.admin)

  const { mutate, data, isPending, isSuccess, isError, error } = useMutation({ mutationFn: (credentials) => adminService.askQuestion(credentials) })

  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate({
      token: user.token,
      text: text
    })
    dispatch(setMessage({ id: crypto.randomUUID(), sender: 'Admin', time: new Date(Date.now()).toLocaleTimeString('EN-IN'), message: text, isSelf: true }))

    setText("")
  }


  useEffect(() => {

    if (isSuccess && data) {
      dispatch(setMessage({ id: crypto.randomUUID(), sender: 'A.I', time: new Date(Date.now()).toLocaleTimeString('EN-IN'), message: data.answer, isSelf: false }))
    }

    if (isError && error) {
      toast.error(error)
    }


  }, [data, isSuccess, isError, error])




  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="admin" />

      <div className="flex-1 flex">
        <Sidebar activeTab="admin_ai" role="admin" />
        <div className="flex-1 flex flex-col justify-between bg-parchment-card">
          {/* Chat Window Header */}
          <div className="p-4 border-b-4 border-navy bg-yellow/30 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sky border-2 border-navy flex items-center justify-center font-grotesk font-extrabold text-sm text-navy">
                A.I
              </div>
              <div>
                <h2 className="font-grotesk font-extrabold text-base text-navy">{isPending ? "Thinking...." : "A.I Assistant"}</h2>
              </div>
            </div>
          </div>

          {/* Chat Messages Log */}
          <div className="p-6 overflow-y-auto space-y-4 max-h-[460px] bg-grid-pattern">
            {messages?.map((msg) => (
              <ChatBubble key={msg.id} sender={msg.sender} time={msg.time} message={msg.message} isSelf={msg.isSelf} />
            ))}
          </div>

          {/* Chat Input Bar */}
          <div className="p-4 border-t-4 border-navy bg-parchment">
            <form onSubmit={handleSubmit} className="flex items-center space-x-3">
              <input
                onChange={(e) => setText(e.target.value)}
                type="text"
                defaultValue={text}
                placeholder="Type your message here..."
                className="flex-1 bg-white border-3 border-navy rounded-xl px-4 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
              />
              <Button type='submit' variant="primary" size="md">
                Send Message ➔
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
