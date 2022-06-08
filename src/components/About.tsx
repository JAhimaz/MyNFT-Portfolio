export const About = () : JSX.Element => {
    return (
        <>
            <Header />
            <AboutMe />
        </>
    )
}`
`

const Header = () => {
    return (
        <h2>NFT Collection</h2>
    )
}

const AboutMe = () => {
    return (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in augue felis. 
            Curabitur porttitor libero at elit congue, non vestibulum odio porta. Aenean enim ipsum, congue ac venenatis ac, eleifend vel purus. 
            Aliquam efficitur enim ac ipsum lobortis malesuada. Praesent sit amet convallis massa, eget dignissim ex. Pellentesque at ligula elit. 
            Aenean eu arcu in ligula scelerisque tincidunt. Duis consectetur at velit nec posuere. Aenean ut consectetur ante. Sed vel blandit elit. 
            Ut a viverra sapien, sit amet cursus risus. Proin imperdiet odio lacus, in varius ante vehicula sit amet. 
            Suspendisse elementum magna at nibh ornare volutpat. 
        </p>
    )
}