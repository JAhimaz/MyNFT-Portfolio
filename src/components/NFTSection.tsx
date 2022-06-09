import styled from 'styled-components'
import { NFTCard } from '../libs/nfts/NFTCard/NFTCard';
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

    console.log(data)

    return (
        <div className={className}>
            {loading ? <h3>Fetching NFTs...</h3> : error ? <p>{error}</p> : (
                data.length > 0 ? (
                    data.map((nft : NFTItem) => 
                    nft.metadata ? (
                        <div className="item">
                            <NFTCard key={nft.id} nftData={nft} />
                        </div>
                        ) : ( null )
                    )
                ) : ( <h1>😔 No NFTs found</h1>)
            
            )}
        </div>
    )
})`
    margin: 4em;
    display: flex;
    flex-direction: row
    flex-wrap: wrap;
    gap: 2em;
    justify-content: center;
    // width: 90%;    
    flex-flow: wrap;
    item {
        align-self: auto
    }
`