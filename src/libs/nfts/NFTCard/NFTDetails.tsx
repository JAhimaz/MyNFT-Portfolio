import styled from 'styled-components'
import { NFTPreview } from '../NFTPreview/NFTPreview';
import useContentType from '../useContentType/useContentType';

export const NFTDetails = styled(({ className, nft }) => {

    const { loading, contentCategory } = useContentType(nft?.mediaUri);

    return (
        loading ? (null) : (
        <div className={className}>
            <p>{nft?.name} #{nft?.serial}</p>
            <NFTPreview mediaUri={nft?.mediaUri} contentCategory={contentCategory}/>
        </div>
        )
    )
})`
    display: flex;
    flex-direction: column;
    p {
        text-align: left;
        font-size: 18px;
    }
`