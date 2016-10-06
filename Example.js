$(function() {
  // Example object.
  var exMap = new CartoLib
  exMap.setTableName('large_lots_citywide_expansion_data');
  exMap.setUserName('datamade');
  exMap.setFields('pin');
  exMap.setMapDivName('mapCanvas');
  exMap.setDefaultZoom(12);
  exMap.setCentroid(41.7872, -87.6345)
  exMap.initiateMap()
  exMap.addInfoBox('bottomright', 'infoBox')
  var layer1 = exMap.defineSublayer("select * from large_lots_citywide_expansion_data", '#carto-result-style');
  // Custom code.
  exMap.createCartoLayer(layer1).addTo(exMap._mapSettings.map)
      .done(function(layer) {
        var mapName = "#" + exMap._mapSettings.mapDivName + " div"

        layerZero = layer.getSubLayer(0);
        layerZero.setInteraction(true);

        layerZero.on('featureOver', function(data) {
          $(mapName).css('cursor','pointer');
          CartoLib.prototype.updateInfoBox("Text about a location", "infoBox");
        });
        layerZero.on('featureOut', function() {
          $(mapName).css('cursor','inherit');
          CartoLib.prototype.clearInfoBox("infoBox");
        });
        layerZero.on('featureClick', function(data){
          // Add something here, e.g., a modal window.
        });
      }).error(function(e) {
        console.log(e)
      });

});