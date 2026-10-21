import React, { useEffect } from 'react'
import StatusBadge from './StatusBadge'
import { useMutation } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import adminService from '../services/adminService'
import toast from 'react-hot-toast'
import { setCreditApprovals } from '../features/admin/adminSlice'

const CreditRequestCard = ({ r }) => {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)
    const { mutate, data, isPending, isSuccess, isError, error } = useMutation({ mutationFn: (credentials) => adminService.updateCredits(credentials) })


    const handleUpdate = (status, id) => {
        mutate({
            token: user.token,
            rid: id,
            status: status
        })
    }


    useEffect(() => {

        if (isSuccess) {
            dispatch(setCreditApprovals(data))
        }



        if (isError && error) {
            toast.error(error)
        }

    }, [isSuccess, isError, error, data])





    return (
        <div class="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <div class="flex items-center space-x-2">
                    <h3 class="font-grotesk font-extrabold text-lg text-navy">{r.user.name}</h3>
                    <StatusBadge text={r.credits} status="success" />
                </div>
                <p class="font-mono text-xs text-navy-muted">{r.user.location} • {new Date(r.createdAt).toLocaleDateString('en-IN')}</p>
                {/* <p class="font-body text-xs text-navy mt-1">Reason: "{r.reason}"</p> */}
            </div>

            <div class="flex space-x-3 w-full md:w-auto">
                <button onClick={() => handleUpdate("rejected", r._id)} type="button" class="px-4 py-2 bg-parchment border-2 border-navy rounded-xl font-grotesk font-bold text-xs text-navy shadow-pop-sm">
                    Decline
                </button>
                <button onClick={() => handleUpdate("granted", r._id)} type="button" class="px-4 py-2 bg-yellow hover:bg-yellow-fixed border-2 border-navy rounded-xl font-grotesk font-extrabold text-xs text-navy shadow-pop-sm">
                    Grant {r.credits} ✓
                </button>
            </div>
        </div>
    )
}

export default CreditRequestCard
