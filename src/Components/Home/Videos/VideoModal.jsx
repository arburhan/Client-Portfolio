import Image from 'next/image'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { AiFillCloseCircle } from "react-icons/ai";

const VideoModal = ({ title, description, setModall, videoUrl }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className=' bg-black/10 backdrop-blur-md fixed inset-0 z-10 grid place-items-center'>
            <motion.div initial={{ opacity: 0, y: -30 }} exit={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className='w-5/12 max-w-5xl  drop-shadow-md rounded-lg border px-5 py-4 transition-colors border-gray-300 bg-gray-100/50 dark:border-neutral-700 dark:bg-neutral-700/30'>
                <div className='flex justify-between border-b-2 pb-3 my-3 dark:border-b-neutral-50/10 '>
                    <h2 className='font-bold uppercase text-xl'>{title}</h2>
                    <button title='close' onClick={() => { setModall(false) }}  >
                        <AiFillCloseCircle width={24} ></AiFillCloseCircle>
                    </button>
                </div>
                {/* body */}
                <p className='pb-4'>{description}</p>
                {videoUrl !== '' &&
                    <iframe
                        className="w-[500px] h-[350px]"
                        src={videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                }
                <div className='border-t-2 flex justify-end gap-4 font-bold dark:border-t-neutral-50/10 pt-3 mt-3'>
                    <button type="button" onClick={() => { setModall(false) }} className='py-1 px-2 w-[7rem] border rounded-md border-red-300 hover:border-blue-300 hover:bg-blue-300/20  bg-red-100/50 dark:border-red-700 dark:bg-red-700/30' > Close</button>

                </div>
            </motion.div>
        </motion.div>
    )
}

export default VideoModal