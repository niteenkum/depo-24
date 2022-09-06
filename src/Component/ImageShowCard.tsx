interface IProps{
    image: string;
    title: string;
}

export default function ImageShowCard( {image, title}: IProps) {
  return (
    <div className="image-show-card" >
      <img
        height={100}
        width={100}
        src={image}
        alt=""
      />
     {title}
    </div>
  );
}
