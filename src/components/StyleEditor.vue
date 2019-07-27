<template>
  <div class="styleEditor" ref="container">
    <div class="code" v-html="codeInStyleTag">hah</div>
    <pre class v-html="highlightedCode"></pre>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  name: "styleEditor",
  // props: {
  //   code: String
  // },
  props: ["code"],
  computed: {
    codeInStyleTag: function() {
      return `<style>${this.code}</style>`;
    },
    // 使用prismjs实现代码高亮
    highlightedCode: function() {
      return Prism.highlight(this.code, Prism.languages.css);
    }
  },
  methods: {
    // 实现向下自动滚动
    goBottom() {
      this.$refs.container.scrollTop = 100000;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
pre {
}
@media (max-width: 500px) {
  pre {
  }
}
.code {
  display: none;
}
</style>
