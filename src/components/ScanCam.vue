<template>
  <div>
    <p class="error">{{ error }}</p>
    <center><qrcode-stream @decode="onDecode" @init="onInit" /></center>
    <center><h2>{{ this.$store.state.resultQR }}</h2></center>
    <el-button type="danger" @click="closeModal()">CANCELAR</el-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      error: ""
    };
  },
  methods: {
    closeModal: function () {
        this.$store.dispatch('closeInputScanQR');
        this.$store.dispatch('closeModalScanQR');
    },
    onDecode(result) {
      this.$store.state.resultQR = result;
      this.$store.dispatch('closeModalScanQR');
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    }
  }
};
</script>
<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>