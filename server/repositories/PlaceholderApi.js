const https = require('https')
const got = require('got');

class PlaceholderApi {

    static async getPosts(){

        // let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        // let data = await response.json()
        // return data;

        try {
            const response = await got('https://jsonplaceholder.typicode.com/posts', { json: true });
            console.log("Harus awal");
            let datas = JSON.parse(response.body);
            let titles = [];
            datas.forEach(function(data) {
                titles.push(data.title + '\n');
            })
            return titles.toString();         
        } catch (error) {
            console.log(error.response.body);
        }





        // const https = require('https');

        // let url = "https://jsonplaceholder.typicode.com/posts";

        // await https.get(url,(res) => {
        //     let body = "";

        //     res.on("data", (chunk) => {
        //         body += chunk;
        //     });

        //     res.on("end", () => {
        //         try {
        //             let datas = JSON.parse(body);
        //             let titles = [];
        //             datas.forEach(function(data) {
        //                 titles.push(data.title + '\n');
        //             })                     
                    
        //             console.log("end");
        //             return titles.toString();
        //         } catch (error) {
        //             console.error(error.message);
        //         };
        //     });

        // }).on("error", (error) => {
        //     console.error(error.message);
        // });
    }

}


export default PlaceholderApi;