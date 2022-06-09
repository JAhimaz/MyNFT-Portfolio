import useSWR from 'swr'
import { FetcherURLs } from './FetcherURLS';

const Fetch = new FetcherURLs();

export const useAccounts = (accountUrl : string) => {

    const cacheURL = Fetch.accountFetcherUrl(accountUrl);
    const { data, error } = useSWR(cacheURL, Fetch.fetcher);

    if(data){
        return {
            loading: false,
            data: extractData(data),
            error
        }
    }

    return {
        loading: true,
        data,
        error
    }
}

const extractData = (data : any) => {
    const newList = [];

    for (const nft in data) {        

        const nftData = {
            id: data[nft]?.id,
            metadata: Fetch.toWeb2Url(data[nft]?.metadata),
            collectionId: data[nft]?.collectionId,
            sn: data[nft]?.sn.replace(/^0+/, ''),
        }

        newList.push(nftData);
    }

    return newList
}

