<template>
  <v-table
    is-horizontal-resize
    style="width:100%"
    :columns="columns"
    :table-data="tableData"
    :title-rows="titleRows"
    row-hover-color="#eee"
    row-click-color="#edf7ff"
    @on-custom-comp="customCompFunc"
  ></v-table>
</template>

<script>
export default {
  name: "easytable",
  data() {
    return {
      columns: [
        {
          field: "werk",
          title: "工厂",
          width: 50,
          titleAlign: "center",
          columnAlign: "center",
          // isFrozen: true,
          isResize: true
        },
        {
          field: "category",
          title: "采购组",
          width: 50,
          titleAlign: "center",
          columnAlign: "center",
          // isFrozen: true,
          isResize: true
        },
        {
          field: "material",
          title: "物料",
          width: 50,
          titleAlign: "center",
          columnAlign: "center",
          // isFrozen: true,
          isResize: true
        },
        {
          field: "supply",
          title: "供应商",
          width: 50,
          titleAlign: "center",
          columnAlign: "center",
          // isFrozen: true,
          isResize: true
        },
        {
          field: "summary",
          title: "汇总信息",
          width: 50,
          titleAlign: "center",
          columnAlign: "center",
          // isFrozen: true,
          isResize: true
        }
      ]
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
