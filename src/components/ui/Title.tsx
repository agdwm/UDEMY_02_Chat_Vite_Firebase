interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return <h1 className="text-2xl font-medium mb-6">{text}</h1>;
};

export default Title;
