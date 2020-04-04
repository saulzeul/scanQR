<template>
  <div>
    <center>
      <h1>Control de tarimas</h1>
    </center>
    <el-row :gutter="12">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div v-if="inputScanQR">
          <el-input v-model="resultQR" maxlength="20"></el-input>
        </div>
        <div v-else>
          <el-input v-model="buscarTarima" maxlength="20"></el-input>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-button type="primary" @click="showModal()" style="width:100%;">ESCANEAR CON CAMARA</el-button>
      </el-col>
      <el-dialog :visible.sync="modalScanQR" width="80%" center>
        <h2>Escanear QR</h2>
        <ScanCam />
      </el-dialog>
    </el-row>
    <el-row :gutter="12">
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
    <el-row>
      <center>
        <h2>Acumulado</h2>
      </center>
    </el-row>
    <el-row  :gutter="12">
      <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
        <Card name="Trabajo" :description="acumulado.trabajo" center="center" medium="medium" />
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
        <Card name="Fecha" :description="acumulado.fecha" center="center" medium="medium" />
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
        <Card name="Piezas" :description="acumulado.piezas" center="center" medium="medium" />
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
        <Card name="Tarimas" :description="acumulado.tarimas" center="center" medium="medium" />
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
        <Card name="Maquina" :description="acumulado.maquina" center="center" medium="medium" />
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
        <Card name="Almacen" :description="acumulado.almacen" center="center" medium="medium" />
      </el-col>
    </el-row>
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
    filtrarTarimas: function () {
      return this.tarimas.filter((tarima) => {
        return tarima.tarima.match(this.buscarTarima)
      })
    }
  },
  methods: {
    showModal: function() {
      this.$store.dispatch("showModalScanQR"),
        this.$store.dispatch("showInputScanQR");
    }
  },
  data() {
    return {
      buscarTarima: "",
      tarima: {
        id: 1,
        tarima: 19347,
        trabajo: 195289,
        parte: "A006288",
        cantidad: 236,
        maquina: "MINILINE 618",
        ubicacion: "ALM05"
      },
      tarimas: [
        {
          id: 1,
          tarima: 19347,
          trabajo: 195289,
          parte: "A006288",
          cantidad: 236,
          maquina: "MINILINE 618",
          ubicacion: "ALM05"
        },
        {
          id: 2,
          tarima: 19347,
          trabajo: 195289,
          parte: "A006288",
          cantidad: 236,
          maquina: "MINILINE 618",
          ubicacion: "ALM05"
        }
      ],
      acumulado: {
        id: 1,
        trabajo: 195711,
        fecha: "10/04/2020",
        piezas: 15750,
        tarimas: 5,
        maquina: "DRO",
        almacen: "ALM05"
      }
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