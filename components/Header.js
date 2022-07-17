import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
    HomeIcon,
    CollectionIcon,
    SearchIcon,
} from "@heroicons/react/outline"
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title='HOME' Icon={HomeIcon} />
            <HeaderItem title='COLLECTION' Icon={CollectionIcon} />
            <HeaderItem title='SEARCH' Icon={SearchIcon} />
        </div>
        {/* <Image
        className="object-contain"
        src="https://res.cloudinary.com/db31tyok/image/upload/v1656407872/jcsuomv6y0agie250rtr.png"
        width={200} height={100}
        /> */}
        <p className="tracking-widest text-2xl text-white">Our Gallery</p>
    </header>
  )
}

export default Header