// ! External
import React, { Component, Fragment } from "react";

// ! Internal
import styled from "styled-components";

// import Aux from '../Aux/Aux';
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import { content } from "../../Assets/Content";
import { mediaAnd, mediaMin } from "../../Theme";

// TODO add styles to match outer container

class Layout extends Component {
    static propTypes = {};
    static defaultProps = {
        footer: content.footer.social
    };

    render() {
        const { footer } = this.props;

        return (
            <Fragment>
                <Navigation />
                <Main>
                    <InnerWrap>{this.props.children}</InnerWrap>
                </Main>
                <Footer content={footer} />
            </Fragment>
        );
    }
}

export default Layout;

export const Main = styled.main`
    display: block;
    box-sizing: border-box;
    margin-left: 0;
    font-family: ${props => props.theme.fontFamilyPrimary};
`;

const InnerWrap = styled.div`
    display: block;
    box-sizing: border-box;
    padding: 4rem 1rem;
    ${mediaMin.tablet`padding: 4rem 3rem;`};
    ${mediaMin.desktop`padding: 0`};
`;

export const FirstFold = styled.div``;
