import { useSelector } from "react-redux";
import { selectCodecById } from "../../redux/entities/codec/selectors";

export const Category = ({ id, onClick }) => {
  const codec = useSelector((state) => selectCodecById(state, id));

  if (!codec) {
    return null;
  }

  return <button onClick={onClick}>{codec.type}</button>;
};
