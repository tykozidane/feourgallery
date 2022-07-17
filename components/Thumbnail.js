import Image from "next/image"
import dateFormat, { masks } from "dateformat";

function Thumbnail({result}) {
  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in 
    transform sm:hover:scale-105 hover:z-50">
        <Image 
        layout="responsive"
        src={result.img}
        height={1920} width={1080}
        />
    <div className="p-2">
        <p className="truncate max-w-md">{result.deskripsi}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100
        ease-in-out group-hover:font-bold">{result.title}</h2>
        <p className="flex item-center opacity-0 group-hover:opacity-100">
        {dateFormat(result.tanggal, "dddd, mmmm dS, yyyy")}
        </p>
    </div>
    </div>
  )
}

export default Thumbnail