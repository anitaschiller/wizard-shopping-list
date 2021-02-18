import PropTypes from "prop-types";

import styled from "styled-components";

export default function Headline({ children }) {
  return <H1>{children}</H1>;
}

Headline.propTypes = {
  children: PropTypes.string,
};

const H1 = styled.h1`
  color: #3a86ff;
`;
