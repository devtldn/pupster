import axios from 'axios';

const BASEURL = "https://dog.ceo/api/breed/";
const ENDURL = "/images";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + ENDURL);
    }
};