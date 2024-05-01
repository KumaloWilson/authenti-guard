interface ButtonProps {
  isRounded: boolean;
  text: string;
  color: string;
  hoverColor: string;
  textColor: string;
  textHoverColor: string;
  link?: string;
  onClick?: () => void;
}

const Button = ({ isRounded, text, textColor, textHoverColor, color, hoverColor, link, onClick }: ButtonProps) => {
  return (
    <div onClick={onClick}
      className={`${color} ${textColor} text-center text-lg font-semibold p-2 pl-7 pr-7 min-w-1/2 max-w-fit ${isRounded ? 'rounded-3xl' : 'rounded-none'} transition duration-300 hover:font-bold hover:${hoverColor} hover:${textHoverColor} hover:scale-105`}>
      <a href={link}>
        <span>{text}</span>
      </a>
    </div>
  )
}


export default Button