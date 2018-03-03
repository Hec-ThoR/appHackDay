<template>
  <div class="el-row">
    <h1> HAGA UN RESERVA </h1>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Motivo">
        <el-input v-model="form.motivo"/>
      </el-form-item>
      <el-form-item label="Periodo">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="01/01/0000" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="01/01/0000" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Que dias?">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Lunes" name="type"/>
          <el-checkbox label="Martes" name="type"/>
          <el-checkbox label="Miercoles" name="type"/>
          <el-checkbox label="Jueves" name="type"/>
          <el-checkbox label="Viernes" name="type"/>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Horario">
        <el-time-picker
          v-model="value2"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="Arbitrary time">
        </el-time-picker>
        <el-time-picker
          arrow-control
          v-model="value3"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="Arbitrary time">
        </el-time-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    <full-calendar :events="fcEvents" locale="en"/>
  </div>
</template>

<script>


export default {
  name: 'home',
  data() {
    return {
      fcEvents : this.demoEvents,
      date1:'',
      date2:'',
      hra1:'',
      hra2:'',
      form: {
        motivo: '',
        periodo: '',
        dias: '',
        horario: '',
        id_ambt_F: '',
        id_doc_F: ''
      }
    }
  },

}
</script>

<style scoped>

</style>
