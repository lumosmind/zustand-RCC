import { withRC } from "../../withRC/withRC";

interface ICustomTitleProps {
  text: string;
  visible: boolean;
  link?: string;
}
export const CustomTitle = ({ text, visible, link }: ICustomTitleProps) => {
  if (!visible) return null;

  if (link)
    return (
      <a href={link}>
        <h1>{text}</h1>
      </a>
    );
  return <h1>{text}</h1>;
};

// CustomTitleRCC : remote controller component
// CustomTitleRC : remote controller
export const [CustomTitleRCC, customTitleRC, createCustomTitle] = withRC(
  CustomTitle,
  {
    text: "deneme",
    visible: true,
  }
);
