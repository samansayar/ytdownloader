import React from 'react'
import ItemMenu from '../ItemMenu'



export default function Sidebar({ hidden = false }) {
    if (!hidden) {
        return (
            <div className='w-2/12 h-screen hidden lg:flex flex-col pr-2'>
                <ItemMenu />
            </div>
        )
    }
}



