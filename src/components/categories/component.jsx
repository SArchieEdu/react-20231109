import { useSelector } from "react-redux";
import { Category } from "../category/component";

import styles from "./styles.module.css";
import { selectCodecIds } from "../../redux/features/entities/codec/selectors";

export const Categories = ({ onCategorySelect }) => {
  const codecIds = useSelector(selectCodecIds);

  return (
    <div>
      {codecIds.map((codecId) => (
        <Category id={codecId} onClick={() => onCategorySelect(codecId)} />
      ))}
    </div>
  );
};
