function enablePlax(){
  //Enable parallax for elements
  $('#bg').plaxify({"xRange":10,"yRange":10, "invert": false});
  $('#pickle').plaxify({"xRange":20,"yRange":10, "invert": false});
  $('#chargeblade').plaxify({"xRange":80,"yRange":30});
  $('#insectglaive').plaxify({"xRange":50,"yRange":30, "invert": true});
  $.plax.enable();
};
function disablePlax(){
  //Disable parallax and clean all the parallax styles
  $.plax.disable({"clearLayers":true});
  $('#bg[style]').removeAttr('style')
  $('#pickle[style]').removeAttr('style')
  $('#chargeblade[style]').removeAttr('style')
  $('#insectglaive[style]').removeAttr('style')
}

$(document).ready(function() {
  $(".loader").fadeOut("slow")
  enablePlax();
  $( window ).resize(function() {
    disablePlax();
    enablePlax();
  });
});
