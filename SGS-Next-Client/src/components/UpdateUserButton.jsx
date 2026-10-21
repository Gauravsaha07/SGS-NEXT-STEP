import { useMutation } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import adminService from '../services/adminService'
import { useDispatch, useSelector } from 'react-redux'
import { setUpdateUser } from '../features/admin/adminSlice'
import toast from 'react-hot-toast'

const UpdateUserButton = ({ u }) => {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)
    const { mutate, data, isPending, isSuccess, isError, error } = useMutation({ mutationFn: (credentials) => adminService.updateUser(credentials) })


    const handleUpdateUser = (id) => {
        mutate({
            uid: id,
            token: user.token
        })
    }


    useEffect(() => {

        if (isSuccess) {
            dispatch(setUpdateUser(data))
        }

        if (isError && error) {
            toast.error(error)
        }

    }, [isSuccess, isError, error, data])




    return (
        <button onClick={() => handleUpdateUser(u._id)} type="button" className={u.isActive ? "px-2.5 py-1.5 bg-rust text-white border border-navy rounded font-mono text-[10px] font-bold" : "px-2 py-1 bg-green-500 text-white border border-navy rounded font-mono text-[10px] font-bold"}>
            {
                u.isActive ? "Suspend" : "Activate"
            }
        </button>
    )
}

export default UpdateUserButton
