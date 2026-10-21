import React, { useEffect } from 'react'
import Button from './Button'
import StatusBadge from './StatusBadge'
import { useMutation } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import adminService from '../services/adminService'
import { setApprovals } from '../features/admin/adminSlice'

const ApprovalCard = ({ app }) => {


    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)
    const { mutate, data, isPending, isSuccess, isError, error } = useMutation({ mutationFn: (credentials) => adminService.updateCounselor(credentials) })


    const handleUpdate = (status, id) => {
        mutate({
            token: user.token,
            crid: id,
            status: status
        })
    }


    useEffect(() => {

        if (isSuccess) {
            dispatch(setApprovals(data))
        }



        if (isError && error) {
            toast.error(error)
        }

    }, [isSuccess, isError, error, data])




    return (
        <div className={app.status === "rejected" ? "bg-red-200 border-4 border-navy rounded-3xl p-6 shadow-pop" : "bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop"}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b-2 border-navy/20">
                <div>
                    <div className="flex items-center space-x-2">
                        <h2 className="font-grotesk font-extrabold text-xl text-navy">{app.user.name}</h2>
                        <StatusBadge text={app.status} status="warning" />
                    </div>
                    <p className="font-mono text-xs font-bold text-navy-muted">{app.category.title} • {app.user.location}</p>
                    <p className="font-mono text-xs text-rust mt-0.5">🔗 {app.user.email}</p>
                </div>
                <div className="font-mono text-xs font-bold text-navy bg-yellow px-3 py-1.5 rounded-full border-2 border-navy">
                    Qualification : {app.user.qualification}
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex space-x-3">
                    {
                        app?.status === "pending" && (
                            <Button clickAction={() => handleUpdate("rejected", app._id)} variant="accent" size="sm">
                                Reject Application
                            </Button>
                        )
                    }
                    <Button clickAction={() => handleUpdate("accepted", app._id)} variant="primary" size="sm">
                        Approve & Issue Badge ✓
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard
