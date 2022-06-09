import styled from 'styled-components'
import { Text } from '../containers/Language';

export const About = styled(({ className }) => {
    return (
        <div className={className}>
            <Header />
            <AboutMe />
        </div>
    )
})`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
`

const Header = styled(({ className }) => {
    return (
        <div className={className}>
            <h2><Text tid="header-title"/></h2>
        </div>
    )
})`
    h2 {
        margin: 0;
        background: -webkit-linear-gradient(#FF2ED1, #2D95A3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media only screen and (min-width: 998px) {
        h2 {
            font-size: 86px;
        }
    }

    @media only screen and (max-width: 998px) {
        h2 {
            font-size: 48px;
        }
    }
`

const AboutMe = styled(({ className }) => {
    return (
        <div className={className}>
            <p>
                <Text tid="about-me"/>
            </p>
        </div>
    )
})`
    @media only screen and (min-width: 998px) {
        width: 40%;

        p {
            font-size: 21px;
            text-align: justify;
        }
    }

    @media only screen and (max-width: 998px) {
        width: 100%;
        padding: 0 0em;
        background-color: rgba(50, 39, 89, 0.5);

        p {
            padding: 0.5em 1em;
            font-size: 16px;
            text-align: justify;
        }
    }

`