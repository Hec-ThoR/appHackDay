import axios from 'axios'
export default new axios ({
  allPersonas:()=>{
    axios.get('http://127.0.0.1:3001/api/docAll')
      .then( res => {
       return res.data;
      });
  },
  getAll: (id)=> {
    Axios.all(`/api/post/${id}`);
  },
  createPersona: () =>{
    Axios.post('/api/posts');
  }
})
