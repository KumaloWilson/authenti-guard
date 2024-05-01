import ProjectCard from '../components/ProjectCard'


const mockProjects = [
    {
        id: '1',
        title: 'Project 1',
        shortDescription: 'Description for Project 1',
        imageUrl: 'https://placekitten.com/300/200', // Replace with your actual image URL
    },
    {
        id: '2',
        title: 'Project 2',
        shortDescription: 'Description for Project 2',
        imageUrl: 'https://placekitten.com/300/208', // Replace with your actual image URL
    },
    {
        id: '3',
        title: 'Project 2',
        shortDescription: 'Description for Project 2',
        imageUrl: 'https://placekitten.com/300/202', // Replace with your actual image URL
    },
    {
        id: '4',
        title: 'Project 2',
        shortDescription: 'Description for Project 2',
        imageUrl: 'https://placekitten.com/300/203', // Replace with your actual image URL
    },
    {
        id: '5',
        title: 'Project 2',
        shortDescription: 'Description for Project 2',
        imageUrl: 'https://placekitten.com/300/204', // Replace with your actual image URL
    },
];

const AdminDashboard = () => {

    return (

        <div className="px-72 bg-white">
            <h2 className="text-3xl font-bold mb-4 text-center">
                <span className="text-white">Our </span><span className="text-cyan-400">Departments</span>
            </h2>

        </div>
    )
}

export default AdminDashboard
