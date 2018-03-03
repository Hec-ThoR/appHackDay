<template>
  <div id="login" class="login_body">
    <div class='login'>
      <div class='login_title'>
        <span>Iniciar Sesion</span>
      </div>
      <div class='login_fields'>
        <div class='login_fields__user'>
          <div class='icon'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png'>
          </div>
          <input type='text' placeholder='Nombre de Usuario'>
        </div>
        <div class='login_fields__password'>
          <div class='icon'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png'>
          </div>
          <input type='password' placeholder='Contraseña'>
        </div>
        <div class='login_fields__submit'>
          <div class="el-row text-center">
            <button class="btn " v-on:click="handleLogin"> Entrar</button>
          </div>
          <br/>
          <div class="grid text-right">
            <a href='#'>Olvidó su password?</a>
          </div>
        </div>
      </div>
      <div class='disclaimer'>
        <div class="grid text-left">
          <a href='#' @click="dialogVisible=true">Soy nuevo</a>
        </div>
        <p>Prueba de inicio de sesión esperamos sus observaciones gracias <br/>Atte: ThoR.</p>
      </div>
      <el-dialog title="Nuevo Usuario" :visible.sync="dialogVisible" :modal="false">
      <h3>pruebaaa</h3>
      </el-dialog>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    showPwd: () => {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin: function () {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only
 @import '../../assets/scss/main.scss';-->
<style>
  .el-dialog__wrapper .el-dialog {
    position: relative;
    margin: 0 auto 50px;
    background: #ddcf08;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 50%;
  }
  .el-dialog__wrapper> .el-dialog__body .el-form {
    padding: 30px 20px;
    color: #000000!important;
    line-height: 24px;
    font-size: 14px;
  }
</style>
