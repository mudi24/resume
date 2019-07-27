<template>
  <div class="resumeEditor" :class="{htmlMode:enableHtml}" ref="container">
    <div v-if="enableHtml" v-html="result"></div>
    <pre v-else>{{result}}</pre>
  </div>
</template>

<script>
import marked from "marked";
export default {
  // props: {
  //   markdown: String,
  //   enableHtml: Boolean
  // },
  props: ["markdown", "enableHtml"],
  computed: {
    result: function() {
      // 判断使用是否为markdown
      return this.enableHtml ? marked(this.markdown) : this.markdown;
    }
  },
  methods: {
    goBottom: function() {
      // 设置内容垂直滚动距离为100000px
      this.$refs.container.scrollTop = 100000;
    },
    goTop: function() {
      this.$refs.container.scrollTop = 0;
    }
  }
};
</script>

<style scoped>
@media (max-width: 500px) {
  .resumeEditor {
  }
}
.htmlMode {
  animation: flip 2s;
}

@keyframes flip {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
