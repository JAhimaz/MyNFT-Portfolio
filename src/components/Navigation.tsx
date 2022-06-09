import styled from 'styled-components'
import { userData } from '../util/myData'
// "extra-link" : "",
// "extra-link-text" : "",
// "my-name" : "Joshua Ahimaz",
// "my-social" : "",

export const Navigation = styled(({ className }) => {
    return (
        <div className={className}>
            <a href={userData['extra-link']} target="_blank" rel="noreferrer">{userData['extra-link-text']}</a>
            <a href={userData['my-social']} target="_blank" rel="noreferrer">{userData['my-name']}</a>
        </div>
    )
})`
    display: flex;
    width: 100%;
    justify-content: space-between;

    p, a {
        text-decoration: none;
        font-size: 18px;
        margin: 2em 3em;
    }
`