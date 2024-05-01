
interface TeamCardProps {
    id?: string
    title: string;
    shortDescription: string;
    imageUrl: string;
    // Add more props as needed
}

const TeamCard = ({ id, title, shortDescription: description, imageUrl }: TeamCardProps) => {



    return (
        <div className=" text-white flex shadow-xl shadow-slate-400 relative rounded-2xl overflow-hidden bg-slate-700">
            <img src={imageUrl} alt='' className='w-full transition duration-500 hover:scale-110'></img>
            <div className="absolute left-0 bottom-0 h-full w-full flex flex-col justify-center items-center text-center transform transition duration-500 bg-gradient-to-t from-blue-400 to-transparent translate-y-60 hover:translate-y-0">
                <h3 className='font-extrabold text-2xl'>{title}</h3>
                <p>{description}</p>

                <div className="flex items-center justify-center mt-3">

                </div>
            </div>
        </div>
    )
}

export default TeamCard