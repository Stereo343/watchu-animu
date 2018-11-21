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
                    res.json().then(r => {console.log(r); return r});
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

    getCategories = async () => {
        let options = '';
        let url = this.getKistuApiUrl('genres', options);
        /*let result = this.getRequest(url).then(r => {
            if (r.links.hasOwnProperty('next')) {
                this.getNextCategories(r.links.next, result)
            }
        });
        return result;*/
        return this.getRequest(url);
    };

    getNextCategories = async (url) => {
        return this.getRequest(url).then(

        )
    }
}

const instance = new KistuApiController();
Object.freeze(instance);
export default instance;
