import React, { useEffect, useState } from 'react'
import Card from './Card'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import adminService from '../services/adminService'
import { setCategories } from '../features/admin/adminSlice'

const CategoryForm = ({ handleShowForm }) => {

    const [title, setTitle] = useState("")

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)
    const { mutate, data, isPending, isSuccess, isError, error } = useMutation({ mutationFn: (credentials) => adminService.addCategory(credentials) })


    const handleAddCategory = (e) => {
        e.preventDefault()
        mutate({
            token: user.token,
            title: title
        })
        setTitle("")
    }


    useEffect(() => {

        if (isSuccess) {
            dispatch(setCategories(data))
            handleShowForm()
        }

        if (isError && error) {
            toast.error(error)
        }

    }, [isSuccess, isError, error, data])




    return (
        <Card className='my-6' color="white">
            <form onSubmit={handleAddCategory}>
                <div className="flex justify-between items-start mb-3">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2" type="text" placeholder='Enter Category Name' />
                </div>
                <div className="pt-4 border-t-2 border-navy/20 flex space-x-2">
                    <Button type="submit" variant="primary" size="sm" className="flex-1">
                        Add
                    </Button>
                    <Button clickAction={handleShowForm} variant="accent" size="sm" className="flex-1">
                        Cancel
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default CategoryForm
