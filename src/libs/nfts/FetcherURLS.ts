abstract class BaseFetcher {
    abstract RMRK2AccountsUrl: string
    baseWeb2Url = 'https://rmrk.mypinata.cloud/'

    toWeb2Url(metadataUrl: string): string {
        return metadataUrl?.replace('ipfs://', this.baseWeb2Url)
    }

    accountFetcherUrl(account: string): string {
        return `${this.RMRK2AccountsUrl}/${account}`
    }

    fetcher = (url : string) => fetch(url).then(res => res.json());
}

export class FetcherURLs extends BaseFetcher {
    RMRK2AccountsUrl = `https://singular.app/api/rmrk2/account`;
}