import Button from "./Button"


interface serviceProps {
    id?: string,
    icon: any,
    title: string,
    description: string,
    onClick?: () => void;
}

function ServicesCard({ id, icon, title, description, onClick }: serviceProps) {


    return (
        <div onClick={onClick} className="border-4 border-solid border-gray-300 min-w-1/4 max-w-1/4 p-8 bg-white text-center duration-500 ease-in hover:border-blue-700 hover:transform transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
                {icon}
            </div>

            <h2 className="font-bold text-xl text-blue-700 my-4">{title}</h2>
            <p className="text-black">
                {description}
            </p>

        </div>
    )
}

export default ServicesCard
