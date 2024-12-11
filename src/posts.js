import axios from "axios";


function POSTS () {
    return axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

export default POSTS;