var app = new Vue({
  el: '#app',
  data: {
    blocks: [] },

  methods: {
    generateBlocks: function generateBlocks() {
      for (var i = 0; i < 10; i++) {if (window.CP.shouldStopExecution(0)) break;
        this.blocks.push({
          colSpan: Math.floor(Math.random() * 3 + 1),
          rowSpan: Math.floor(Math.random() * 3 + 1),
          colorIndex: Math.floor(Math.random() * 6 + 1) });

      }window.CP.exitedLoop(0);
    },
    regenerate: function regenerate() {var _this = this;
      this.blocks = [];
      setTimeout(function () {return _this.generateBlocks();}, 0);
    } },

  mounted: function mounted() {
    this.generateBlocks();
  } });
