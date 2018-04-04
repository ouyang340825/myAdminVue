<template>
    <div class="buju">
      <PanelGroup />
    </div>
</template>

<script>
  import PanelGroup from "../components/PanelGroup"

    export default {
        name: "layout",
        components:{
          PanelGroup
        },
        data(){
          return{

          }
        }
    }
</script>


<style scoped>
  .buju{
    width: calc(100% - 151px);
    height: calc(100% - 62px);
    margin-left: 151px;
  }
</style>
