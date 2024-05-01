import { useInView } from "react-intersection-observer";
import TypeWriter from "../components/TypeWriter";
import { animated, useSpring } from "react-spring";




const Dashboard = () => {


  const [ref, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.25
  });

  const [ref1, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

  const [ref2, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.75
  });

  const [ref3, inView4] = useInView({
    triggerOnce: false,
    threshold: 1.0
  });

  const fadeIn = useSpring({
    opacity: inView1 ? 1 : 0,
    from: { opacity: 0 },
  });

  const fadeIn1 = useSpring({
    opacity: inView2 ? 1 : 0,
    from: { opacity: 0 },
  });

  const fadeIn2 = useSpring({
    opacity: inView3 ? 1 : 0,
    from: { opacity: 0 },
  });

  const fadeIn3 = useSpring({
    opacity: inView4 ? 1 : 0,
    from: { opacity: 0 },
  });



  return (
    <div className=" flex flex-col items-center bg-white">
      <div className="text-center mt-20">
        <h2 className="text-4xl font-extrabold text-black">ABOUT <span className="text-blue-700">US</span></h2>
      </div>

      <div className="mt-4">
        <TypeWriter />
      </div>


      <div className="bg-white  px-72 py-40">
        <h1 className="text-blue-700 text-2xl font-bold mb-4">
          Lorem Ipsum
        </h1>

        <animated.div style={fadeIn}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center gap-8 pt-4 justify-center items-center" ref={ref}>

            <div>
              <p className="text-black">
                I am currently studying a Bachelor's Degree in Information Technology at Chinhoyi University of Technology. As a IT student, I have had the opportunity to explore several fields of specialty and I have gained experience with a variety of Technologies.

                I have also developed strong problem solving skills, communication skills, attention to detail, and the ability to work effectively in a team environment. I am also highly organized and able to manage multiple tasks simultaneously.

                I am passionate about using my skills and knowledge to contribute to the success of any organization I am a part of. In my free time, I enjoy coding, reading books related to my field and attending industry conferences to stay up-to-date with the latest trends and technologies.

                Thank you for considering me for any potential opportunities. I look forward to discussing how I can add value to your organization.
              </p>

            </div>


            <div className="w-1/2 mx-auto border-blue-500 border-8">
              <img className="h-100 w-full" src="https://avatars.githubusercontent.com/u/60302385?v=4" alt="Profile" />
            </div>

          </div>

        </animated.div>
      </div>


      <div className="bg-gray-300  px-72 py-40">
        <h1 className="text-blue-700 text-2xl font-bold mb-4 text-right">
          Lorem Ipsum
        </h1>

        <animated.div style={fadeIn1}>
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 place-content-center gap-8 pt-4 justify-center items-center" ref={ref1}>


            <div className="w-1/2 mx-auto border-blue-500 bg-opacity-75 border-8">
              <img className="h-100 w-full" src="https://avatars.githubusercontent.com/u/60302385?v=4" alt="Profile" />
            </div>

            <div>
              <p className="text-black text-right">
                I am currently studying a Bachelor's Degree in Information Technology at Chinhoyi University of Technology. As a IT student, I have had the opportunity to explore several fields of specialty and I have gained experience with a variety of Technologies.

                I have also developed strong problem solving skills, communication skills, attention to detail, and the ability to work effectively in a team environment. I am also highly organized and able to manage multiple tasks simultaneously.

                I am passionate about using my skills and knowledge to contribute to the success of any organization I am a part of. In my free time, I enjoy coding, reading books related to my field and attending industry conferences to stay up-to-date with the latest trends and technologies.

                Thank you for considering me for any potential opportunities. I look forward to discussing how I can add value to your organization.
              </p>

            </div>

          </div>

        </animated.div>
      </div>


      <div className="bg-white  px-72 py-40">
        <h1 className="text-blue-700 text-2xl font-bold mb-4">
          Lorem Ipsum
        </h1>

        <animated.div style={fadeIn2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center gap-8 pt-4 justify-center items-center" ref={ref2}>

            <div>
              <p className="text-black">
                I am currently studying a Bachelor's Degree in Information Technology at Chinhoyi University of Technology. As a IT student, I have had the opportunity to explore several fields of specialty and I have gained experience with a variety of Technologies.

                I have also developed strong problem solving skills, communication skills, attention to detail, and the ability to work effectively in a team environment. I am also highly organized and able to manage multiple tasks simultaneously.

                I am passionate about using my skills and knowledge to contribute to the success of any organization I am a part of. In my free time, I enjoy coding, reading books related to my field and attending industry conferences to stay up-to-date with the latest trends and technologies.

                Thank you for considering me for any potential opportunities. I look forward to discussing how I can add value to your organization.
              </p>

            </div>


            <div className="w-1/2 mx-auto border-blue-500 border-8">
              <img className="h-100 w-full" src="https://avatars.githubusercontent.com/u/60302385?v=4" alt="Profile" />
            </div>

          </div>

        </animated.div>
      </div>


      <div className="bg-gray-300  px-72 py-40">
        <h1 className="text-blue-700 text-2xl font-bold mb-4 text-right">
          Lorem Ipsum
        </h1>

        <animated.div style={fadeIn3}>
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 place-content-center gap-8 pt-4 justify-center items-center" ref={ref3}>


            <div className="w-1/2 mx-auto border-blue-500 bg-opacity-75 border-8">
              <img className="h-100 w-full" src="https://avatars.githubusercontent.com/u/60302385?v=4" alt="Profile" />
            </div>

            <div>
              <p className="text-black text-right">
                I am currently studying a Bachelor's Degree in Information Technology at Chinhoyi University of Technology. As a IT student, I have had the opportunity to explore several fields of specialty and I have gained experience with a variety of Technologies.

                I have also developed strong problem solving skills, communication skills, attention to detail, and the ability to work effectively in a team environment. I am also highly organized and able to manage multiple tasks simultaneously.

                I am passionate about using my skills and knowledge to contribute to the success of any organization I am a part of. In my free time, I enjoy coding, reading books related to my field and attending industry conferences to stay up-to-date with the latest trends and technologies.

                Thank you for considering me for any potential opportunities. I look forward to discussing how I can add value to your organization.
              </p>

            </div>

          </div>

        </animated.div>
      </div>



    </div>
  );
};

export default Dashboard;
