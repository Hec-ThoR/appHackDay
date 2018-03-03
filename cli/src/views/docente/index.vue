<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <h1>AQUI DOCENTES</h1>
      <el-form-item label="Nombre :">
        <el-input v-model="form.nombre"/>
      </el-form-item>
      <el-form-item label="# ci :">
        <el-input v-model="form.ci"/>
      </el-form-item>
      <el-form-item label="Correo">
        <el-input v-model="form.mail"/>
      </el-form-item>
      <el-form-item label="Materia">
        <el-input v-model="form.materia"/>
      </el-form-item>
      <el-form-item>
        <el-button>Cancelar</el-button>
        <el-button type="primary" @click="setDoc">Registrar?</el-button>
      </el-form-item>
    </el-form>
    <div class="el-row">

      <el-table
        :data="lista"
        style="width: 100%">
        <el-table-column
          prop="nombre"
          label="Nombre"
        >
        </el-table-column>
        <el-table-column
          prop="ci"
          label="ci"
        >
        </el-table-column>
        <el-table-column
          prop="mail"
          label="Correo">
        </el-table-column>
        <el-table-column
          prop="materia"
          label="materia">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  //import apidoc from '../../services/apiDocente'
  import axios from 'axios';

  export default {
    name: "index",
    data() {
      return {
        lista: [],
        form: {
          nombre: '',
          ci: '',
          mail: '',
          materia: ''
        }
      }
    },
    created: function () {
      this.getDoc();
    },
    methods: {
      setDoc: function () {
        axios.post('http://127.0.0.1:3001/api/docNew',this.form)
          .then(res=>{
            this.getDoc();
            console.log(res.data);
          }).catch(error=>{
          console.log(error);
        })
      },
      getDoc: function () {
        axios.get('http://127.0.0.1:3001/api/docAll')
          .then(res => {
            this.lista = res.data;
          })
      },
      onSubmit() {
        console.log('submit!'+this.form);
      },
      // fetchItem() {
      //   return docService.get(to.params.id)
      //     .then(result => {
      //       this.item = result.json()
      //     })
      // }
    }
  }
</script>

<style scoped>

</style>
