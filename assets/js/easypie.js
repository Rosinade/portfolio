jQuery(document).ready(function ($) {
  $('.percentage').easyPieChart({
    scaleColor: false,
    /*scaleColor: true,*/
    animate: 1000,
    lineWidth: 4,
    onStep: function(value) {
      this.$el.find('span').text(Math.round(value));
    },
    onStop: function(value, to) {
      this.$el.find('span').text(Math.round(to));
    }
  });
