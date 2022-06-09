import styled from 'styled-components'
import { NFTDetails } from './NFTDetails';
import { useNFTAssets } from '../useNFTAssets';

export const NFTCard = styled(({ className, nftData }) => {
    
    const { metadata, sn } = nftData; 
    const { nft }  = useNFTAssets(metadata, sn);

    return (
        <div className={className}>
            <NFTDetails nft={nft}/>
        </div>
    )
})`
    display: flex;
    width: 100%;
    align-items: left;
    justify-content: left;
`