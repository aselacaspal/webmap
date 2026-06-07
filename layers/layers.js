var wms_layers = [];


        var lyr_EsriStreet_0 = new ol.layer.Tile({
            'title': 'Esri Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_tza_admbnda_adm1_20181019_1 = new ol.format.GeoJSON();
var features_tza_admbnda_adm1_20181019_1 = format_tza_admbnda_adm1_20181019_1.readFeatures(json_tza_admbnda_adm1_20181019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tza_admbnda_adm1_20181019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tza_admbnda_adm1_20181019_1.addFeatures(features_tza_admbnda_adm1_20181019_1);
var lyr_tza_admbnda_adm1_20181019_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tza_admbnda_adm1_20181019_1, 
                style: style_tza_admbnda_adm1_20181019_1,
                popuplayertitle: 'tza_admbnda_adm1_20181019',
                interactive: true,
    title: 'tza_admbnda_adm1_20181019<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_0.png" /> Arusha<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_1.png" /> Dar-es-salaam<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_2.png" /> Dodoma<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_3.png" /> Geita<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_4.png" /> Iringa<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_5.png" /> Kagera<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_6.png" /> Kaskazini Pemba<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_7.png" /> Kaskazini Unguja<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_8.png" /> Katavi<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_9.png" /> Kigoma<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_10.png" /> Kilimanjaro<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_11.png" /> Kusini Pemba<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_12.png" /> Kusini Unguja<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_13.png" /> Lindi<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_14.png" /> Manyara<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_15.png" /> Mara<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_16.png" /> Mbeya<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_17.png" /> Mjini Magharibi<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_18.png" /> Morogoro<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_19.png" /> Mtwara<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_20.png" /> Mwanza<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_21.png" /> Njombe<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_22.png" /> Pwani<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_23.png" /> Rukwa<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_24.png" /> Ruvuma<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_25.png" /> Shinyanga<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_26.png" /> Simiyu<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_27.png" /> Singida<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_28.png" /> Songwe<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_29.png" /> Tabora<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_30.png" /> Tanga<br />\
    <img src="styles/legend/tza_admbnda_adm1_20181019_1_31.png" /> <br />' });

lyr_EsriStreet_0.setVisible(true);lyr_tza_admbnda_adm1_20181019_1.setVisible(true);
var layersList = [lyr_EsriStreet_0,lyr_tza_admbnda_adm1_20181019_1];
lyr_tza_admbnda_adm1_20181019_1.set('fieldAliases', {'ADM0_EN': 'ADM0_EN', 'ADM0_SW': 'ADM0_SW', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', });
lyr_tza_admbnda_adm1_20181019_1.set('fieldImages', {'ADM0_EN': 'TextEdit', 'ADM0_SW': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', });
lyr_tza_admbnda_adm1_20181019_1.set('fieldLabels', {'ADM0_EN': 'no label', 'ADM0_SW': 'no label', 'ADM0_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', });
lyr_tza_admbnda_adm1_20181019_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});