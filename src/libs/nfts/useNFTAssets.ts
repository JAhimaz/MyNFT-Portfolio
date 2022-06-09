import useSWR from "swr";
import { FetcherURLs } from "./FetcherURLS";
import useContentType from "./useContentType/useContentType";

const Fetch = new FetcherURLs();

export const useNFTAssets = (metadataUrl : string) => {
    const { data, error } = useSWR(metadataUrl, Fetch.fetcher);

    if (data) {
        return {
            loading: false,
            nft: extractNFTData(data), // Define Type
            error
        }
    }

    return {
        loading: true,
        data,
        error
    }
}

const extractNFTData = (data : any) => {
    
    // const {
    //     contentCategory,
    // } = useContentType(Fetch.toWeb2Url(data?.mediaUri))

    return {
        name: data?.name,
        description: data?.description,
        properties: data?.properties,
        // contentType: contentCategory,
        thumb: data?.thumbnailUri
    }
}