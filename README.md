<div class="fluid-row" id="header">
    <div id="column">
        <div class = "blocks">
            <img src='./misc/solved-logo.jpeg' height='auto' width='200' align='right'>
        </div>
    </div>
    <h1 class="title toc-ignore">Aquaculture</h1>
    <h4 class="author"><em>Solved - Solutions in Geoinformation</em></h4>
</div>

# About

# Release History

* 1.0.0
    * Description

# How to use
1. Prepare environment.
1.1 Differently from other MapBiomas classification schemes, the Aquaculture mapping is based on DeepLearning (DL) classifier: U-Net. Thus it uses the COLAB structure, rather than purelly GEE code editor. First things first, prepare the mosaics:

users/solved/DL - Mosaic.js

2. Create the water mask.
2.1. To help in the process of grabbing samples and reduce the complexity of identifying Aquaculture ponds, a water mask is generated:

users/solved/DL - Clusterization_PreDataset.js

2.2. Grabbing samples. DL classifiers demand exaustive selection of tranning samples. Guided the learning processess by manuaaly indicating areas of non-aquaculture and aquaculture:

users/solved/DL - TrainTest Geom.js

3. Once trainned, run the U-Net classifier:
Example:

users/solved/Mapbiomas 5 Brazil - UNet - Aquicultura.ipynb

