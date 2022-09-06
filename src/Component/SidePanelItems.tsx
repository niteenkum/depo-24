import "./Component.scss";

interface IProps {
  handleScrollToElement: () => void;
  title: string;
}

export default function SidePanelItems({ handleScrollToElement, title }: IProps) {
  return <div className="side-panel-items" onClick={() => {handleScrollToElement()}}>{title}</div>;
}
