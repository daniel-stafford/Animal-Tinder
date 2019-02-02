import axios from 'axios';

//this is axios.create technique for calling apis using axios.
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID ba298c511203235479c8a0c4e396cd2e5f053e8ac37ab2b65b06115113dba6b7'
  }
});
