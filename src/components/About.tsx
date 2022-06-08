import styled from 'styled-components'

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
            <h2>NFT Collection</h2>
        </div>
    )
})`

    h2 {
        font-size: 86px;
        margin: 0;
        background: -webkit-linear-gradient(#FF2ED1, #2D95A3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

`

const AboutMe = styled(({ className }) => {
    return (
        <div className={className}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in augue felis. 
                Curabitur porttitor libero at elit congue, non vestibulum odio porta. Aenean enim ipsum, congue ac venenatis ac, eleifend vel purus. 
                Aliquam efficitur enim ac ipsum lobortis malesuada. Praesent sit amet convallis massa, eget dignissim ex. Pellentesque at ligula elit. 
                Aenean eu arcu in ligula scelerisque tincidunt. Duis consectetur at velit nec posuere. Aenean ut consectetur ante. Sed vel blandit elit. 
                Ut a viverra sapien, sit amet cursus risus. Proin imperdiet odio lacus, in varius ante vehicula sit amet. 
                Suspendisse elementum magna at nibh ornare volutpat. 
            </p>
        </div>
    )
})`
    width: 40%;

    p {
        font-size: 24px;
        text-align: justify;
    }
`