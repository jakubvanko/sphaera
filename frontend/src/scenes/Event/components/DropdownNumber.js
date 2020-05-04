import React from "react";
import CreatableSelect from "react-select/creatable";
import styled from "styled-components";

import Icon from "../../../components/Icon/Icon";

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
  height: 100%;
`;

const customStyles = {
  indicatorSeparator: () => ({
    alignSelf: "stretch",
    borderRight: "dashed 1px var(--color-gray-7)",
  }),
  control: (provided, state) => ({ ...provided, transition: "0.25s" }),
};

const DropdownIndicator = () => (
  <IconContainer>
    <Icon name={"arrowdownfilled"} width={8} />
  </IconContainer>
);

const DropdownNumber = (props) => (
  <CreatableSelect
    {...props}
    components={{ DropdownIndicator }}
    isSearchable={false}
    styles={customStyles}
    blurInputOnSelect
    defaultValue={{ value: 1, label: 1 }}
    options={[
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
    ]}
    theme={(theme) => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary: "var(--color-yellow)",
        primary75: "rgb(255, 191, 81)",
        primary50: "rgb(255, 212, 137)",
        primary25: "rgb(255, 233, 196)",
      },
    })}
  />
);

export default DropdownNumber;
