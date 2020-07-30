/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = 
    /* color: #99ffff */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-51.85546875, 5.266007882805497],
          [-52.294921875, 3.337953961416485],
          [-51.317138671875, 0.39550467153201946],
          [-49.52124573640583, -0.6920858950288072],
          [-48.49365234375, -1.4610232806227417],
          [-42.890625, -3.8642546157213955],
          [-39.55078125, -4.740675384778361],
          [-35.9912109375, -6.358975327235661],
          [-36.38671875, -9.44906182688142],
          [-38.49609375, -11.695272733029402],
          [-39.7265625, -13.752724664396975],
          [-39.375, -15.961329081596647],
          [-40.25390625, -18.145851771694467],
          [-40.78125, -19.642587534013032],
          [-42.36328125, -22.105998799750555],
          [-45.52734375, -22.593726063929296],
          [-48.69140625, -24.686952411999144],
          [-49.39453125, -26.431228064506428],
          [-49.74609375, -28.613459424004418],
          [-52.3828125, -31.503629305773018],
          [-54.31640625, -32.99023555965106],
          [-52.91015625, -33.72433966174759],
          [-49.39453125, -30.14512718337612],
          [-48.33984375, -28.76765910569124],
          [-47.28515625, -25.482951175355307],
          [-44.47265625, -23.885837699861995],
          [-42.1875, -23.725011735951796],
          [-40.25390625, -22.593726063929296],
          [-37.6171875, -16.130262012034756],
          [-37.96875, -13.752724664396975],
          [-36.2109375, -12.039320557540572],
          [-34.1015625, -9.102096738726443],
          [-33.92578125, -6.315298538330034],
          [-34.63334381058809, -4.370164795779153],
          [-38.14453125, -3.5134210456400323],
          [-42.01171875, -1.9332268264771106],
          [-45.17578125, -0.8788717828324148],
          [-47.63671875, 0.17578097424708533],
          [-49.921875, 1.9332268264771233],
          [-50.625, 3.8642546157214084]]]),
    geometry3 = 
    /* color: #ff99ff */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-50.942767774786546, 5.2329866917050865],
          [-53.03039234468224, 2.252670286516246],
          [-48.669519310253804, -1.3621947476790979],
          [-43.03291974913094, -3.72173820310085],
          [-42.631097541065515, -3.7321061173098014],
          [-41.784875004512514, -2.92824331113464],
          [-41.33523703168902, -1.7399795154404878],
          [-46.724831298839376, 0.05492712969334415],
          [-49.18558695843683, 1.9881514716159001],
          [-50.15202682833427, 4.269584578486535]]]),
    geometry2 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-41.33524293673531, -1.7399793847128584],
          [-41.78494534219726, -2.9279598707692878],
          [-42.63136208195999, -3.7319021520608042],
          [-35.76029026638304, -6.168017340829261],
          [-35.82617440733907, -8.47810242172426],
          [-39.803598743162866, -13.438454522334121],
          [-40.5726356970473, -17.859523670478655],
          [-38.649817764144586, -18.834560035469508],
          [-38.02361011792959, -13.52395102290887],
          [-34.35389021053322, -8.869082337085864],
          [-34.17816943854655, -6.430074543220794],
          [-35.67242082701466, -4.680541002580579],
          [-37.781877807231695, -3.5408996710512306]]]),
    geometry4 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-40.60546875, -19.145168196205283],
          [-42.451171875, -21.94304553343817],
          [-45.615234375, -22.350075806124856],
          [-48.8726806640625, -24.686952411999144],
          [-47.20001220703125, -25.490389073998028],
          [-44.560546875, -23.644524198573677],
          [-42.1875, -23.644524198573677],
          [-40.166015625, -22.431340156360605],
          [-38.64981450140476, -18.834567010312785],
          [-40.57266868650913, -17.859508587968477]]]),
    geometry5 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-47.20001086592674, -25.490387863439995],
          [-48.872681334614754, -24.686952411999144],
          [-49.921875, -28.226970038918328],
          [-54.228515625, -32.76880048488168],
          [-52.822265625, -33.797408767572485],
          [-48.515625, -29.3055613255277],
          [-47.63671875, -26.35249785815401]]]),
    geometry6 = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-45.995635986328125, -0.9892925830239434],
          [-46.087646484375, -1.2529137515304316],
          [-45.867919921875, -1.3297985105274817],
          [-45.76629638671875, -1.049707819510088],
          [-45.918731689453125, -0.9906656690514684]]]),
    table = ee.FeatureCollection("users/luizcf14/ZC_shape"),
    limite = ee.FeatureCollection("users/luizcf14/LimiteAndreia");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
function getImageCollection(studyArea,startDate,endDate){
  var ls;var l4TOAs;var l5TOAs;var l7TOAs;var l8TOAs;var out;
   
  var sensorBandDictLandsatTOA = ee.Dictionary({
                        L8 : ee.List([1,2,3,4,5,11,6,'BQA']),
                        L7 : ee.List([0,1,2,3,4,5,7,'BQA']),
                        L5 : ee.List([0,1,2,3,4,5,6,'BQA']),
                        L4 : ee.List([0,1,2,3,4,5,6,'BQA'])
  });
  var bandNamesLandsatTOA = ee.List(['blue','green','red','nir','swir1','temp','swir2','BQA']);
  l4TOAs = ee.ImageCollection('LANDSAT/LT04/C01/T1_TOA')
      .filterDate(startDate,endDate)
      .filterBounds(studyArea)
      .select(sensorBandDictLandsatTOA.get('L4'),bandNamesLandsatTOA);
    
  l5TOAs = ee.ImageCollection('LANDSAT/LT05/C01/T1_TOA')
      .filterDate(startDate,endDate)
      .filterBounds(studyArea)
      .select(sensorBandDictLandsatTOA.get('L5'),bandNamesLandsatTOA);
  
  l8TOAs = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA')
      .filterDate(startDate,endDate)
      .filterBounds(studyArea)
      .select(sensorBandDictLandsatTOA.get('L8'),bandNamesLandsatTOA);
  l7TOAs = ee.ImageCollection('LANDSAT/LE07/C01/T1_TOA')
      .filterDate(startDate,endDate)
      .filterBounds(studyArea)
      .select(sensorBandDictLandsatTOA.get('L7'),bandNamesLandsatTOA);
  
  ls = ee.ImageCollection(l5TOAs.merge(l7TOAs).merge(l8TOAs));
  console.log(ls);
  out = ls;
  return out
}
var bqaFunction = function(image){
  var bqa = image.select('BQA');
  if(year > 2013){
    image = image.mask(bqa.eq(2720));
  }else{
    image = image.mask(bqa.eq(672));
  }
  return image;
}
var createIndexs = function(image) {
  var MNDWI = null;
  var NDVI = null;
  var MNDWI_calc = null;
  var NDVI_calc = null;
  var EVI = null;
  var EVI_2 = null;
  var NDWI = null;
  var NDWI_GAO_calc = null;
  var CAI = null;
  var PRI = null;
  var SAVI = null;
  var WVI = null;
  var WVI_GAO = null;
  var MMDI_v1 = null;
  var MMDI_v2 = null; 
  var NDSI = null;
    //Gerando NDVI
    NDVI = image.expression(
      '(((banda4 - banda3)/(banda4 + banda3)))', {
        'banda4': image.select('nir'),
        'banda3': image.select('red')
    });
    NDSI = image.expression(
      '(((banda5 - banda4)/(banda4 + banda5)))', {
        'banda5': image.select('swir1'),
        'banda4': image.select('nir')
    });
    
    //Gerando EVI
    EVI = image.expression(
      '(2.5 * ( ((banda4 - banda3)) / ((banda4 + (6 * banda3)) - (7.5 * banda1) + 1 ) )) ', {
        'banda1' : image.select('blue'),
        'banda3' : image.select('red'),
        'banda4' : image.select('nir')
      
    });
    
     //Gerando NDWI_GAO
    NDWI = image.expression(
      '((banda2 - banda4)/ (banda4 + banda2))', {
        'banda2' : image.select('green'),
        'banda4' : image.select('nir')
      
    });
    
    //Gerando NDWI_GAO
    NDWI_GAO_calc = image.expression(
      '((banda4 - banda5)**2 / (banda4 + banda5)**2)**(1/2)', {
        'banda4' : image.select('nir'),
        'banda5' : image.select('swir1')
      
    });
 
    
    //Gerando MNDWI
    MNDWI = image.expression(
      '((( banda2 - banda5) / (banda2 + banda5)))', {
        'banda2': image.select('green'),
        'banda5': image.select('swir1'),
    });
    
    MNDWI_calc = image.expression(
      '(( banda2 - banda5)**2 / (banda2 + banda5)**2)**(1/2)', {
        'banda2': image.select('green'),
        'banda5': image.select('swir1'),
    });
    
    NDVI_calc = image.expression(
      '((banda4 - banda3)**2/ (banda4 + banda3)**2)**(1/2)', {
        'banda4': image.select('nir'),
        'banda3': image.select('red'),
        'banda2': image.select('green'),
    });
  //Gerarndo MMDIv2 (Simplified Using Modules - Iury Angelo - "(abs(a-b) * abs(c+d) - abs(c-d) * abs(a+b))/(abs(a-b) * abs(c+d) + abs(c-d) * abs(a+b))"
    MMDI_v1 = image.expression(
      '(abs(banda2 - banda5) * abs(banda4 + banda3) - abs(banda4 - banda3) * (banda2 + banda5)) / (abs(banda2 - banda5) * abs(banda4 + banda3) + abs(banda4 - banda3) * abs(banda2 + banda5))', {
        'banda2': image.select('green'),
        'banda3': image.select('red'),
        'banda4': image.select('nir'),
        'banda5': image.select('swir1'),
  });
 
  var maskedImage = image
    .addBands(image.metadata('system:time_start'))
    .addBands(NDVI.rename('NDVI'))
    .addBands(NDSI.rename('NDSI'))
    .addBands(MNDWI.rename('MNDWI'))
    .addBands(EVI.rename('EVI'))
    .addBands(NDWI.rename('NDWI'))
    .addBands(MMDI_v1.rename('MMRI'))
  return  maskedImage;
};
/// Main CODE
var studyArea = geometry;
var year = 2018;
var startDate = year+'-01-01';
var endDate = (year)+'-12-30';
var mosaicMerge = getImageCollection(studyArea,startDate,endDate).map(createIndexs).map(bqaFunction);
var paleta = ['008100', '389D2E', '76B956', 'A7D17A','D0E899', 'F8F4BD', 'F0D9CA', 'E2BFD1', 'D2A5D8', 'AC93E2', '7C85EF', '347AF9', '006CFD', '0057E0', '4238BA', '5614BC'];
var mosaicMerge_tradicional =mosaicMerge.median();
var mosaicMerge = mosaicMerge_tradicional.select(['green','red','nir','swir1','swir2']).multiply(255)
var mosaicMerge =mosaicMerge.addBands(mosaicMerge_tradicional.select(['NDSI','NDVI','MNDWI','NDWI','MMRI']).add(1).multiply(127))
Map.addLayer(mosaicMerge,{min:0,max:1,bands:['MNDWI'], palette: paleta},'MNDWI',false);
Map.addLayer(mosaicMerge,{min:0,max:1,bands:['NDVI'], palette: paleta},'NDVI',false);
 Export.image.toAsset({
    image:mosaicMerge.select(['red','nir','swir1','swir2','NDVI','NDWI','NDSI']).set({'year':year,'mosaic':1,'version':5,'collection':3}).toByte(),
    description:'mosaico_zc_'+year+'_colecao5',
    assetId:'projects/samm/SAMM/Mosaic/'+year,
    scale: 30,
    maxPixels:1e13,
    region: geometry
  });