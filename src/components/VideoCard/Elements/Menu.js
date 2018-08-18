import React from 'react';
import styled from 'styled-components';
import { MdMoreVert as _DotsIcon } from "react-icons/md";

const DotsIcon = styled(_DotsIcon)`
  color: hsl(0, 0%, 53.3%);
`;

export default () => {
  return (
    <React.Fragment>
      <DotsIcon />
    </React.Fragment>
  )
}
