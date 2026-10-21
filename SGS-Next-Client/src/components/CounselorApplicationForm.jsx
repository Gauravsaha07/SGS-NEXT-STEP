import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from './Button'
import { useMutation } from '@tanstack/react-query'
import authService from '../services/authService'
import toast from 'react-hot-toast'

const CounselorApplicationForm = ({ categories }) => {

    const { user } = useSelector(state => state.auth)

    const { data, isPending, isSuccess, isError, error, mutate } = useMutation({ mutationFn: (credentials) => authService.becomeCounselor(credentials) })

    const [formData, setFormData] = useState({
        category: "",
        experience: ""
    })

    const { category, experience } = formData

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {

        e.preventDefault()

        console.log(formData)

        mutate({
            token: user.token,
            category: category,
            experience: experience
        })

    }


    useEffect(() => {
        if (isSuccess) {
            toast.success(data.message)
        }

        if (isError && error) {
            toast.error(error)
        }

    }, [data, isSuccess, isError, error])



    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                        Full Name & Title
                    </label>
                    <input
                        type="text"
                        defaultValue={user.name}
                        placeholder="e.g. Vikramaditya Singh"
                        className="disabled:bg-gray-200 w-full bg-parchment border-3 border-navy rounded-xl px-4 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                        disabled
                    />
                </div>

                <div>
                    <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                        Qualification
                    </label>
                    <input
                        type="text"
                        defaultValue={user.qualification}
                        placeholder="e.g. Lead Designer @ Swiggy"
                        className="disabled:bg-gray-200 w-full bg-parchment border-3 border-navy rounded-xl px-4 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                        disabled
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                        Email
                    </label>
                    <input
                        type="text"
                        defaultValue={user.email}
                        placeholder="jhon@gmail.com"
                        className="disabled:bg-gray-200 w-full bg-parchment border-3 border-navy rounded-xl px-4 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                        disabled
                    />
                </div>

                <div>
                    <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                        Years of Industry Experience
                    </label>
                    <select name='experience' value={experience} onChange={handleChange} className="w-full bg-parchment border-3 border-navy rounded-xl px-3 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none">
                        <option value={3}>3 - 5 Years</option>
                        <option value={6}>6 - 10 Years</option>
                        <option value={10}>10+ Years</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                    Primary Domain Expertise
                </label>
                <select name='category' value={category} onChange={handleChange} className="w-full bg-parchment border-3 border-navy rounded-xl px-3 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none">
                    {
                        categories.map(category => {
                            return (
                                <option key={category._id} value={category._id} >{category.title}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="pt-4 border-t-2 border-navy/20">
                <Button type='submit' variant="accent" size="lg" className="w-full">
                    SUBMIT COUNSELOR APPLICATION →
                </Button>
            </div>
        </form>
    )
}

export default CounselorApplicationForm
