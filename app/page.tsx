import Image from 'next/image'
import Searchbar from './components/Searchbar'

export default function Home() {
  return (
    <div className='m-12 flex flex-col justify-center max-w-lg'>
      <Searchbar/>

    </div>
  )
}
