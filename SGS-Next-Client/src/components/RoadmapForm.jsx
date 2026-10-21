import React from 'react'
import Card from './Card'

const RoadmapForm = () => {
    return (
        <Card className='my-6' color="white">
            <form >
                <div className="flex justify-between items-start mb-3">
                    <input className="w-full p-2" type="text" placeholder='Enter Category Name' />
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

export default RoadmapForm
