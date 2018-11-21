class KistuApiController {

    getKistuApiUrl = (endpoint, options) => {
        return  'https://kitsu.io/api/edge/'
            + endpoint
            + '?page[limit]=20&page[offset]=0'
            + options
    };

    async getRequest(url){
        url = url.replace(/\[/g, '%5B').replace(/]/g, '%5D');
        return await (await (fetch(url)
                .then(res => {
                    return res.json();
                })
                .catch(err => {
                    console.log('Error: ', err)
                })
        ))
    }

    popularAnime = async () => {
        let options = '&sort=-averageRating';
        let url = this.getKistuApiUrl('anime', options);
        return this.getRequest(url);
    };

    recentAnime = async () => {
        let options = '&sort=-startDate&filter[status]=current';
        let url = this.getKistuApiUrl('anime', options);
        return this.getRequest(url);
    };
}

const instance = new KistuApiController();
Object.freeze(instance);
export default instance;
