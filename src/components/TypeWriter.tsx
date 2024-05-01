import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypeWriter = () => {

    const text = useTypewriter({
        words: ['Web Developer', 'Software Developer', 'Freelancer'],
        loop: 0,
        deleteSpeed: 50,
    });

    return (

        <span className="text-blue-700 font-bold">{text[0]} <Cursor cursorColor='#0ef' /></span>

    );

}

export default TypeWriter