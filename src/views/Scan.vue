<template>
  <div>
    <center>
      <h1>Control de tarimas</h1>
    </center>
    <el-row :gutter="12">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-button type="primary" @click="showModal()" style="width:100%;">ESCANEAR CON CAMARA</el-button>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div v-if="inputScanQR">
          <el-input v-model="resultQR" maxlength="20" type="number"></el-input>
        </div>
        <div v-else>
          <el-input v-model="buscarTarima" maxlength="20" type="number" ref="buscarTarima"></el-input>
        </div>
      </el-col>
      <el-dialog :visible.sync="modalScanQR" width="80%" center>
        <h2>Escanear QR</h2>
        <ScanCam />
      </el-dialog>
    </el-row>
    <div v-for="(tarima, id) in filtrarTarima" :key="id">
      <el-row :gutter="12">
        <center><h2>Añadir ubicacion</h2></center>
        <el-col :span="24">          
          <el-input v-model="test" @keydown.native.tab="getInfo"></el-input>
        </el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
          <Card name="Tarima" :description="tarima.tarima" center="center" medium="medium" />
        </el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
          <Card name="Trabajo" :description="tarima.trabajo" center="center" medium="medium" />
        </el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
          <Card name="Parte" :description="tarima.parte" center="center" medium="medium" />
        </el-col>

        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
          <Card name="Cantidad" :description="tarima.cantidad" center="center" medium="medium" />
        </el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
          <Card name="Maquina" :description="tarima.maquina" center="center" medium="medium" />
        </el-col>
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
          <Card name="Ubicacion" :description="tarima.ubicacion" center="center" medium="medium" />
        </el-col>
      </el-row>
    </div>
    <pre>{{ $data }}</pre>
    <el-dialog title="Añadir ubicacion" :visible.sync="dialogUbicacion" width="90%">
      <h3>Hola</h3>
    </el-dialog>
  </div>
</template>
<script>
import ScanCam from "@/components/ScanCam.vue";
import Card from "@/components/Card.vue";
export default {
  components: {
    Card,
    ScanCam
  },
  mounted() {
    this.autofocusFirst();
  },
  computed: {
    resultQR() {
      return this.$store.state.resultQR;
    },
    inputScanQR() {
      return this.$store.state.inputScanQR;
    },
    modalScanQR() {
      return this.$store.state.modalScanQR;
    },
    filtrarTarima: function() {
      let tarima = this.tarimas.filter(
        tarima => tarima.tarima == this.buscarTarima
      );
      return tarima;
    }
  },
  methods: {
    showModal: function() {
      this.$store.dispatch("showModalScanQR"),
        this.$store.dispatch("showInputScanQR");
    },
    autofocusFirst() {
      this.$refs.buscarTarima.focus();
    },
    getInfo() {
      console.log(this.test)
    }
  },
  data() {
    return {
      dialogUbicacion: false,
      test: '',
      buscarTarima: "",
      tarimas: [
        {
          id: 1,
          tarima: 19347,
          trabajo: 195288,
          parte: "A006287",
          cantidad: 237,
          maquina: "MINILINE 618",
          ubicacion: "ALM05"
        },
        {
          id: 2,
          tarima: 19348,
          trabajo: 195289,
          parte: "A006288",
          cantidad: 236,
          maquina: "MINILINE 618",
          ubicacion: "ALM05"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-dialog__headerbtn .el-dialog__close {
  display: none !important;
}
.el-col-24 {
  margin-bottom: 20px;
}
</style>