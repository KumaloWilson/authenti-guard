
import Button from '../components/Button'

interface projectCardProps {
  id?: string
  title: string;
  shortDescription: string;
  imageUrl: string;
  // Add more props as needed
}

const ProjectCard = ({id, title, shortDescription: description, imageUrl}: projectCardProps) => {

  const eventLister = () =>{
    alert('click')
  }

  return (
    <div className=" text-white flex shadow-xl shadow-slate-900 relative rounded-2xl overflow-hidden bg-slate-700">
    <img src={imageUrl} alt='' className='w-full transition duration-500 hover:scale-110'></img>
    <div className="absolute left-0 bottom-0 h-full w-full flex flex-col justify-center items-center text-center transform transition duration-500 bg-gradient-to-t from-cyan-400 to-transparent translate-y-40 hover:translate-y-0">
        <h3 className='font-bold text-xl'>{title}</h3>
        <p>{description}</p>
        
  <div className="flex items-center justify-center mt-3">
    <Button
        text={'Read More'}
        textColor={'text-black'}
        color={'bg-cyan-300'}
        hoverColor={'bg-cyan-500'}
        onClick={eventLister}
    />
</div>
    </div>
</div>
  )
}

export default ProjectCard