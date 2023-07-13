import axios from "axios";



async function getData(number) {
        const {data:user1 } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
        
        const {data:post1 } = await axios ("https://jsonplaceholder.typicode.com/posts?id=" + number );
        
        return {user: user1,post:post1}
        
    /* console.log("users: ", user);
    console.log("posts: ", post); */
    }

export default getData;