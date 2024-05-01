import TeamCard from "../components/DoctorCard";

const mockDoctors = [
  {
    id: '1',
    title: 'Dr. V. Goba',
    shortDescription: 'General Doctor',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww',
  },
  {
    id: '2',
    title: 'Dr. T. Musiyambiri',
    shortDescription: 'Neurologist',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: '3',
    title: 'Dr. T. Musiyambiri',
    shortDescription: 'Dermatologist',
    imageUrl: 'https://images.unsplash.com/photo-1585928642599-31f15a88c002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE1fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D'
  },
];

const Teams = () => {

  const renderDoctors = mockDoctors.map((project) => (
    <TeamCard
      key={project.id}
      id={project.id}
      title={project.title}
      shortDescription={project.shortDescription}
      imageUrl={project.imageUrl}
    />
  ));

  return (

    <div>
      <div className="flex flex-col items-center bg-white px-72 pb-24">
        <div className="text-center mt-20">
          <h2 className="text-4xl font-extrabold text-black">OUR <span className="text-blue-700">SPECIAL DOCTORS</span></h2>
          <h2 className="text-lg text-blue-700 my-4">We take pride in our exceptional team of doctors, each a specialist in their respective fields.</h2>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderDoctors}
        </div>
      </div>




      <div className="flex flex-col items-center bg-gray-300 px-72 pb-24">
        <div className="text-center mt-20">
          <h2 className="text-4xl font-extrabold text-black">OUR <span className="text-blue-700">SPECIAL DOCTORS</span></h2>
          <h2 className="text-lg text-blue-700 my-4">We take pride in our exceptional team of doctors, each a specialist in their respective fields.</h2>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderDoctors}
        </div>
      </div>




      <div className="flex flex-col items-center bg-white px-72 pb-24">
        <div className="text-center mt-20">
          <h2 className="text-4xl font-extrabold text-black">OUR <span className="text-blue-700">SPECIAL DOCTORS</span></h2>
          <h2 className="text-lg text-blue-700 my-4">We take pride in our exceptional team of doctors, each a specialist in their respective fields.</h2>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderDoctors}
        </div>
      </div>




      <div className="flex flex-col items-center bg-gray-300 px-72 pb-24">
        <div className="text-center mt-20">
          <h2 className="text-4xl font-extrabold text-black">OUR <span className="text-blue-700">SPECIAL DOCTORS</span></h2>
          <h2 className="text-lg text-blue-700 my-4">We take pride in our exceptional team of doctors, each a specialist in their respective fields.</h2>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderDoctors}
        </div>
      </div>



      <div className="flex flex-col items-center bg-white px-72 pb-24">
        <div className="text-center mt-20">
          <h2 className="text-4xl font-extrabold text-black">OUR <span className="text-blue-700">SPECIAL DOCTORS</span></h2>
          <h2 className="text-lg text-blue-700 my-4">We take pride in our exceptional team of doctors, each a specialist in their respective fields.</h2>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderDoctors}
        </div>
      </div>




      <div className="flex flex-col items-center bg-gray-300 px-72 pb-24">
        <div className="text-center mt-20">
          <h2 className="text-4xl font-extrabold text-black">OUR <span className="text-blue-700">SPECIAL DOCTORS</span></h2>
          <h2 className="text-lg text-blue-700 my-4">We take pride in our exceptional team of doctors, each a specialist in their respective fields.</h2>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderDoctors}
        </div>
      </div>





    </div>


  )
}

export default Teams
