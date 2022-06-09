import styled from 'styled-components'
import { NFTPreview } from '../libs/nfts/NFTPreview';
import { useAccounts } from '../libs/nfts/useAccounts';
import { userData } from '../util/myData';

type NFTItem = {
    id: string,
    metadata: string,
    collectionId: string,
    sn: string,
}

export const NFTSection = styled(({ className }) => {

    const { loading, data, error } = useAccounts(userData['kusama-address']);

    return (
        <div className={className}>
            {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
                data.map((nft : NFTItem) => 
                    <NFTPreview key={nft.id} nftData={nft} />
                )
            )}
        </div>
    )
})`

`