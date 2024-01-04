'use client'

import { AiOutlineSearch } from 'react-icons/ai'
import { words } from '@/lib/data'
import { useState } from 'react'


const Searchbar = () => {

    const [activeSearch, setActiveSearch] = useState([])

    const handleSearch = (e: any) => {
        if (e.target.value == '') {
            setActiveSearch([])
            return false
        }
        setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0, 8))
    }

    return (
        <form className='w-[440px] relative justify-center'>
            <div className="relative">
                <input type="search" placeholder='Type Here' className='w-full p-4
            rounded-full bg-slate-800 text-white' onChange={(e) => handleSearch(e)} />
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4
            bg-slate-300 rounded-full'>
                    <AiOutlineSearch />
                </button>
            </div>
            {
                activeSearch.length > 0 && (
                    <div className='absolute top-20 p-4 bg-slate-700 text-white w-full
                        rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2'>
                        {
                            activeSearch.map(s => (
                                <span>{s}</span>
                                <h1>Hello</h1>
                            ))
                        }
                    </div>
                )
            }
        </form>
    )
}

export default Searchbar