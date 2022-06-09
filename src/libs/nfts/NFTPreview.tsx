import styled from 'styled-components'
import { useNFTAssets } from './useNFTAssets';

export const NFTPreview = styled(({ className, nftData }) => {
    
    const { metadata, sn } = nftData; 
    const { nft }  = useNFTAssets(metadata);
    
    return (
        <div className={className}>
            <p>{nft?.name} #{sn}</p>
        </div>
    )
})`

`