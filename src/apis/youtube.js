import axios from 'axios';
const KEY = 'AIzaSyCnCXLrvhfreEWoxs5wj-JnZ-PtIsuJZPY';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key:KEY
      
    }

});


