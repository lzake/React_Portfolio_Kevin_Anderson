import React from "react";
// import PropTypes from 'prop-types'

import styled from "styled-components";

const ProjectsContainer = props => (
    <StyledContainer>{props.children}</StyledContainer>
);

export default ProjectsContainer;

const StyledContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 0;
    margin: 70px auto 0 auto;
    overflow: hidden;
`;