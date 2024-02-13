import React from "react";
import Checkbox from "../checkbox/checkbox";
import { Ul } from "../../styled";

export default function CheckboxList({
  selectValues, // массив выбранных значений
  labelComponent, // компонент для отображения label
  options, // массив с объектами для выбора {title: заголовок, value: значение}
  name, // имя
  onChange, // событие при изменении
  isGridList,
  onClickLabel = () => {},
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };
  return (
    <Ul $isGridList={isGridList}>
      {options.map((option, index) => (
        <li key={option.value}>
          <Checkbox
            labelComponent={labelComponent}
            selectValues={selectValues}
            isChecked={selectValues.includes(option.value)}
            name={name}
            value={option.value}
            text={option.title}
            onClick={(value) => onClickLabel(value, index)}
            onChange={handleChange}
          />
        </li>
      ))}
    </Ul>
  );
}
