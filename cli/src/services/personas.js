import Axios from 'axios'
export default new Axios ({
  getAll: (id)=> {
    Axios.all(`/api/post/${id}`);
  },
  createPersona: () =>{
    Axios.post('/api/posts');
  }
})


