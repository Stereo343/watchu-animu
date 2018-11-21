class KistuApiController {

    categories = [];

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

    getCategories = async () => {
        let options = '';
        let url = this.getKistuApiUrl('genres', options);

        this.getRequest(url).then(r => {
            if (r.links.hasOwnProperty('next')) {
                this.categories.push(r);
                this.getNextCategories(r.links.next)
            } else {
                this.categories.push(r)
            }
        });

        return this.categories;
    };

    getNextCategories = async (url) => {
        this.getRequest(url).then( r => {
            if (r.links.hasOwnProperty('next')) {
                this.categories.push(r);
                this.getNextCategories(r.links.next)
            } else {
                this.categories.push(r)
            }
        });
    }
}

const instance = new KistuApiController();
Object.freeze(instance);
export default instance;
