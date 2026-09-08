ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32755").setExtent([499521.672636, 9262523.207300, 499747.436963, 9262718.198400]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SeptemberCelebrationVenue_1 = new ol.format.GeoJSON();
var features_SeptemberCelebrationVenue_1 = format_SeptemberCelebrationVenue_1.readFeatures(json_SeptemberCelebrationVenue_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_SeptemberCelebrationVenue_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeptemberCelebrationVenue_1.addFeatures(features_SeptemberCelebrationVenue_1);
var lyr_SeptemberCelebrationVenue_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeptemberCelebrationVenue_1, 
                style: style_SeptemberCelebrationVenue_1,
                popuplayertitle: 'September Celebration Venue',
                interactive: true,
                title: '<img src="styles/legend/SeptemberCelebrationVenue_1.png" /> September Celebration Venue'
            });
var format_OtherStalls_2 = new ol.format.GeoJSON();
var features_OtherStalls_2 = format_OtherStalls_2.readFeatures(json_OtherStalls_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_OtherStalls_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OtherStalls_2.addFeatures(features_OtherStalls_2);
var lyr_OtherStalls_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OtherStalls_2, 
                style: style_OtherStalls_2,
                popuplayertitle: 'Other Stalls',
                interactive: true,
                title: '<img src="styles/legend/OtherStalls_2.png" /> Other Stalls'
            });
var format_ProvincalAssociationStalls_3 = new ol.format.GeoJSON();
var features_ProvincalAssociationStalls_3 = format_ProvincalAssociationStalls_3.readFeatures(json_ProvincalAssociationStalls_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_ProvincalAssociationStalls_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvincalAssociationStalls_3.addFeatures(features_ProvincalAssociationStalls_3);
var lyr_ProvincalAssociationStalls_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvincalAssociationStalls_3, 
                style: style_ProvincalAssociationStalls_3,
                popuplayertitle: 'Provincal Association Stalls',
                interactive: true,
                title: '<img src="styles/legend/ProvincalAssociationStalls_3.png" /> Provincal Association Stalls'
            });
var format_SponsorsStalls_4 = new ol.format.GeoJSON();
var features_SponsorsStalls_4 = format_SponsorsStalls_4.readFeatures(json_SponsorsStalls_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_SponsorsStalls_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SponsorsStalls_4.addFeatures(features_SponsorsStalls_4);
var lyr_SponsorsStalls_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SponsorsStalls_4, 
                style: style_SponsorsStalls_4,
                popuplayertitle: 'Sponsor\'s Stalls ',
                interactive: true,
                title: '<img src="styles/legend/SponsorsStalls_4.png" /> Sponsor\'s Stalls '
            });
var format_SchoolsStalls_5 = new ol.format.GeoJSON();
var features_SchoolsStalls_5 = format_SchoolsStalls_5.readFeatures(json_SchoolsStalls_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_SchoolsStalls_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchoolsStalls_5.addFeatures(features_SchoolsStalls_5);
var lyr_SchoolsStalls_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchoolsStalls_5, 
                style: style_SchoolsStalls_5,
                popuplayertitle: 'Schools Stalls',
                interactive: true,
                title: '<img src="styles/legend/SchoolsStalls_5.png" /> Schools Stalls'
            });
var format_uotstaffstalls_6 = new ol.format.GeoJSON();
var features_uotstaffstalls_6 = format_uotstaffstalls_6.readFeatures(json_uotstaffstalls_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_uotstaffstalls_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uotstaffstalls_6.addFeatures(features_uotstaffstalls_6);
var lyr_uotstaffstalls_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uotstaffstalls_6, 
                style: style_uotstaffstalls_6,
                popuplayertitle: 'uot staff stalls',
                interactive: true,
                title: '<img src="styles/legend/uotstaffstalls_6.png" /> uot staff stalls'
            });
var format_Gates_7 = new ol.format.GeoJSON();
var features_Gates_7 = format_Gates_7.readFeatures(json_Gates_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Gates_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gates_7.addFeatures(features_Gates_7);
var lyr_Gates_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gates_7, 
                style: style_Gates_7,
                popuplayertitle: 'Gates',
                interactive: true,
                title: '<img src="styles/legend/Gates_7.png" /> Gates'
            });
var format_Grandstand_8 = new ol.format.GeoJSON();
var features_Grandstand_8 = format_Grandstand_8.readFeatures(json_Grandstand_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Grandstand_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grandstand_8.addFeatures(features_Grandstand_8);
var lyr_Grandstand_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grandstand_8, 
                style: style_Grandstand_8,
                popuplayertitle: 'Grand stand',
                interactive: true,
                title: '<img src="styles/legend/Grandstand_8.png" /> Grand stand'
            });
var format_Arena_9 = new ol.format.GeoJSON();
var features_Arena_9 = format_Arena_9.readFeatures(json_Arena_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Arena_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arena_9.addFeatures(features_Arena_9);
var lyr_Arena_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arena_9, 
                style: style_Arena_9,
                popuplayertitle: 'Arena',
                interactive: true,
                title: '<img src="styles/legend/Arena_9.png" /> Arena'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SeptemberCelebrationVenue_1.setVisible(true);lyr_OtherStalls_2.setVisible(true);lyr_ProvincalAssociationStalls_3.setVisible(true);lyr_SponsorsStalls_4.setVisible(true);lyr_SchoolsStalls_5.setVisible(true);lyr_uotstaffstalls_6.setVisible(true);lyr_Gates_7.setVisible(true);lyr_Grandstand_8.setVisible(true);lyr_Arena_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SeptemberCelebrationVenue_1,lyr_OtherStalls_2,lyr_ProvincalAssociationStalls_3,lyr_SponsorsStalls_4,lyr_SchoolsStalls_5,lyr_uotstaffstalls_6,lyr_Gates_7,lyr_Grandstand_8,lyr_Arena_9];
lyr_SeptemberCelebrationVenue_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'Name': 'Name', });
lyr_OtherStalls_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Booth_ID': 'Booth_ID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ProvincalAssociationStalls_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Booth_IID': 'Booth_ID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SponsorsStalls_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SchoolsStalls_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Booth_ID': 'Booth_ID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_uotstaffstalls_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Booth_ID': 'Booth_ID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Gates_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'Name': 'Name', });
lyr_Grandstand_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'length': 'length', 'width': 'width', });
lyr_Arena_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'Shape_Width': 'Shape_Width', });
lyr_SeptemberCelebrationVenue_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Name': 'TextEdit', });
lyr_OtherStalls_2.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Booth_ID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_ProvincalAssociationStalls_3.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Booth_IID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_SponsorsStalls_4.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Name': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_SchoolsStalls_5.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Booth_ID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_uotstaffstalls_6.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Booth_ID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Gates_7.set('fieldImages', {'fid': '', 'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', 'Name': '', });
lyr_Grandstand_8.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Name': '', 'SHAPE_Length': '', 'SHAPE_Area': '', 'length': '', 'width': '', });
lyr_Arena_9.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Name': '', 'SHAPE_Length': '', 'SHAPE_Area': '', 'Shape_Width': '', });
lyr_SeptemberCelebrationVenue_1.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_OtherStalls_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Booth_ID': 'inline label - always visible', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_ProvincalAssociationStalls_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Booth_IID': 'inline label - always visible', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_SponsorsStalls_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_SchoolsStalls_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Booth_ID': 'inline label - always visible', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_uotstaffstalls_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Booth_ID': 'inline label - always visible', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Gates_7.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'Name': 'inline label - always visible', });
lyr_Grandstand_8.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'length': 'hidden field', 'width': 'hidden field', });
lyr_Arena_9.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'Shape_Width': 'hidden field', });
lyr_Arena_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});