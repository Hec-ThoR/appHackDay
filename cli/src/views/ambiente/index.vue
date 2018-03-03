<template>
  <div >
    <el-form ref="form" :model="form" label-width="120px">
      <h1>AQUI AMBIENTE</h1>
        <el-form-item label="Nombre :">
          <el-input v-model="form.nombre"/>
        </el-form-item>
        <el-form-item label="capacidad :">
          <el-input v-model="form.capacidad"/>
        </el-form-item>
        <el-form-item label="Tipo">
          <el-select v-model="form.tipo" placeholder="Seleccione Opcion">
            <el-option label="Aula" value="Aula"/>
            <el-option label="Auditorio" value="Auditorio"/>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button>Limpiar</el-button>
          <el-button type="primary" @click="setAmb">Registrar?</el-button>
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
            prop="capacidad"
            label="Capacidad"
          >
          </el-table-column>
          <el-table-column
            prop="tipo"
            label="Tipo">
          </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "index",
      data() {
        return {
          lista: [],
          form: {
            nombre:'',
            capacidad: '',
            tipo: ''
          }
        }
      },
      created: function () {
        this.getAmb();
      },
      methods: {
        setAmb: function () {
          axios.post('http://127.0.0.1:3001/api/ambNew',this.form)
            .then(res=>{
              this.getAmb();
              console.log(res.data);
            }).catch(error=>{
            console.log(error);
          })
        },
        getAmb: function () {
          axios.get('http://127.0.0.1:3001/api/ambAll')
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
