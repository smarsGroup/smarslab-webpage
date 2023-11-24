const peer_reviewed = [
  'PVNR. Koutilya, V. Bandaru. 2023. Mapping sugarcane residue burnt areas in smallholder farming systems using machine learning approaches.'+
  ' International Journal of Applied Earth Observation and Geoinformation, 6, Article 100347.',
  'R. Nandan, V. Bandaru, J. He, C. Daughtry, P. Gowda, A. Suyker. 2022. Evaluating Optical Remote Sensing Methods for ' +
  'Estimating Leaf Area Index for Corn and Soybean. Remote Sensing, 14, 5301.',
  'I. Kumar, K. Feng, L. Sun, V. Bandaru. 2022. Adoption of biomass for electricity generation in Thailand: Implications' +
  ' for energy security, employment, environment, and land use change. Renewable Energy.',
  'E. Budsberg, N. Parker, V. Bandaru, R. Bura, R. Gustafson. 2022. Hydrocarbon Bio-Jet Fuel from Bioconversion of Poplar ' +
  'Biomass: Life Cycle Assessment of Site-Specific Impacts. Forests, 13, 549.',
  'V. Bandaru. 2022. Climate data induced uncertainties in simulated carbon fluxes under corn and soybean systems. ' +
  'Agricultural Systems. 196, 103341.',
  'V. Bandaru, R. Yaramasu, C. Jones, R.C. Izaurralde, A. Reddy, F. Sedano, C.S.T. Daughtry, I.Becker-Reshef, C. Justice. ' +
  '2022. Geo-CropSim: A Geo-spatial crop simulation modeling framework for regional scale crop yield and water use ' +
  'assessment. ISPRS Journal of Photogrammetry and Remote Sensing 34-53.',
  'C. Jones, A. Reddy, J. Jeong, J.R. Williams, S.K. Hamilton, M.Z. Hussain, V. Bandaru, & R.C. Izaurralde. 2021. ' +
  'Improved hydrological modeling with APEX and EPIC: Model description, testing, and assessment of bioenergy producing ' +
  'landscape scenarios. Environmental Modeling & Assessment 143, 105111.',
  'R. Yaramasu, V. Bandaru, PVNR. Koutilya, C. Justice. 2020. Preseason crop type mapping using deep neural networks. ' +
  'Computers and Electronics in Agriculture, 176, 105664.',
  'I. Kumar, V. Bandaru, S. Yampracha, L. Sun, B. Fungtammasanc. 2020. Limiting Rice and Sugarcane Residue Burning in ' +
  'Thailand: Current Status, Challenges and Strategies. Journal of Environmental Management 276, 111228.',
  'V. Bandaru, R. Yaramasu, PVNR. Koutilya, J. He, F. Sedano, R. Sahajpal, B. Wardlow, A. Suyker, C. Justice. 2020. ' +
  'PhenoCrop: An integrated satellite-based framework to estimate crop physiological growth stages. International Journal ' +
  'of Applied Earth Observation and Geoinformation 90: 102188.',
  'J. Merz, V. Bandaru, Q. Hart, N. C. Parker, and B.M. Jenkins. 2018. Hybrid Poplar based Biorefinery Siting Web ' +
  'Application (HP-BiSWA): An online decision support application for siting hybrid poplar based biorefineries. Computers ' +
  'and Electronics in Agriculture. 155: 76-83.',
  'V. Bandaru, Y. Pei, Q. Hart, and B.M. Jenkins. 2017. Impact of biases in gridded weather datasets on biomass ' +
  'estimates of short rotation woody cropping systems. Agricultural and Forest Meteorology. 233: 71-79.',
  'V. Bandaru, C.S. Daughtry, E.E. Codling, D.J. Hansen, S. White-Hansen, and C.E. Green. 2016. Evaluating Leaf and ' +
  'Canopy Reflectance of Stressed Rice Plants to Monitor Arsenic Contamination. International Journal of Environmental ' +
  'Research and Public Health. 13(6):606.',
  'V. Bandaru, N. C. Parker, Q. Hart, M.Jenner , B-L Yeo, J. Crawford, Y. Li , P. Tittmann, L. Rogers, S. Kaffka ' +
  'and B.M. Jenkins. 2015. Economic sustainability modeling provides decision support for assessing hybrid poplar based ' +
  'biofuel development in California. California Agriculture. 69: 171-176.',
  'A. Tiwary, I.D. Williams, O. Heidrich, A. Namdeo, V. Bandaru, C. Calfapietra. 2015. Development of multi-functional ' +
  'streetscape green infrastructure using a performance index approach. Environmental Pollution. 208: 209-220.',
  'Q. Hart, P.W. Tittmann, V. Bandaru, B.M. Jenkins. 2015. Modeling Poplar Growth as a Short Rotation Woody Crop for ' +
  'Biofuels in the Pacific Northwest. Biomass and Bioenergy. 79: 12-27.',
  'V. Bandaru, R. C. Izaurralde, K. Zhao. 2015. Biomass potential of switchgrass and miscanthus on the USA\'s marginal lands.' +
  ' Sustainable biofuels: An ecological assessment of the future energy. 299-317.',
  'O. Prilepova, Q. Hart, J. Merz, N. C. Parker, V. Bandaru, B.M. Jenkins. 2014. Design of a GIS-based Web Application ' +
  'for Simulating Biofuel Feedstock Yields. ISPRS International Journal of Geo-Information 3: 929-941.',
  'A.M. Thomson, G.P Kyle, X. Zhang, V.Bandaru, T.O West, M.A Wise, R.C Izaurralde, and K.V Calvin. 2014. The ' +
  'contribution of future agricultural trends in the US Midwest to global climate change mitigation. Global Environmental ' +
  'Change 24, 143-154.',
  'V. Bandaru, R.C. Izaurralde, D. Manowitz, R. Link, X. Zhang, W.M. Post. 2013. Soil carbon and net energy associated ' +
  'with biofuel production on marginal lands; a regional modeling perspective. Journal of Environmental Quality ' +
  '42:1802-1814.',
  'V. Bandaru, T.O. West, D. Ricciuto and R.C. Izaurralde. 2013. Estimating crop net primary production using inventory ' +
  'data and MODIS derived parameters. ISPRS Journal of Photogrammetry and Remote Sensing. 80. 61-71.',
  'S. Kang, W.M. Post, D. Wang, J. Nichols, V. Bandaru, and T. West. 2013. Hierarchical Marginal Land Assessment for ' +
  'Land Use Planning. Land Use Policy 3: 106-113.',
  'S. Kang, W.M. Post, J. Nichols, D. Wang, T. West, V. Bandaru, and R.C. Izaurralde. 2013. Marginal Lands: Concept, ' +
  'Assessment and Management. Journal of Agricultural Science 5: 129-139.',
  'N.L. Miles, S.J. Richardson, K.J. Davis, A.E. Andrews, T. Lauvaux, T.O. West, V. Bandaru, and E.R. Crosson. 2012. ' +
  'Large amplitude spatial and temporal gradients in atmospheric boundary layer CO2 mole fractions detected with a ' +
  'tower-based network in the U.S. Upper Midwest. Journal of Geophysical Research – Biogeosciences 117: G01019.',
  'T.O. West, V. Bandaru, C.C. Brandt, S.M. Ogle and A.E. Schuh. 2011. Regional uptake and release of crop carbon in ' +
  'the United States. Biogeosciences 8: 2037-2046.',
  'J. Nichols, S. Kang, W.M. Post, D. Wang, V. Bandaru, D. Manowitz, X. Zhang, and R.C. Izaurralde. 2011. HPC-EPIC for ' +
  'high resolution simulations of environmental and sustainability assessment. Computers and Electronics in Agriculture ' +
  '79: 112-115.',
  'M.S. Scott, B.A. Babcock, L.K. James, and V. Bandaru. 2011. Higher U.S. crop prices trigger little area expansion so ' +
  'marginal land for biofuel crops is limited. Energy Policy 39(9): 5254-5258.',
  'X. Zhang, R.C. Izaurralde, D. Manowitz, T.O. West, W.M. Post, A.M. Thomson, V. Bandaru, J. Nichols, J.R. Williams. ' +
  '2010. An integrative modeling framework to evaluate the productivity and sustainability of biofuel crop production ' +
  'systems. Global Change Biology-Bioenergy 2 (5): 258-277.',
  'V. Bandaru, D.J. Hansen, E. Codling, C. Daughtry, S. White and C. Green. 2010. Quantifying arsenic-induced ' +
  'morphological changes in spinach leaves: implications for remote sensing. International Journal for Remote sensing ' +
  '31(15): 4163-4177.',
  'T.O. West, C.C. Brandt, L.M. Baskaran, C.M. Hellwinckel, R. Mueller, C.J. Bernacchi, V. Bandaru, B. Yang, B.S. ' +
  'Wilson, G. Marland, R.G. Nelson, D.G. De La Torre Ugarte, and W.M. Post. 2010. Cropland carbon flux in the United ' +
  'States: Increasing geospatial resolution of inventory-based carbon accounting. Ecological Applications 20 (4): ' +
  '1074-1086.',
  'V. Bandaru. 2008. Predicting leaf arsenic concentration in hydroponically grown rice and spinach leaves using narrow-band leaf ' +
  'reflectance and stereological measurements. University of Delaware.',
  'V. Bandaru, B.A. Stewart, R.L. Baumhardt, S. Ambati, C.A. Robinson, and A. Schlegel. 2006. Growing dryland grain ' +
  'sorghum in clumps to reduce vegetative growth and increase yields. Agronomy Journal 98:1109-1120.',
  'V. Bandaru. 2008. Response of dryland grain sorghum to planting geometryUniversity of Delaware. West Texas A & M ' +
  'University.'
];

export const book_chapters = [
  'V. Bandaru, P. Chirumamilla, S. Skakun, K. Lasko, S. Yampracha. 2022. Application of Geo-CropSim Framework for ' +
  'Rainfed Sugarcane Yield Assessment in Thailand. Remote Sensing of Agriculture and Land Cover/Land Use Changes in ' +
  'South and Southeast Asian Countries. 381 - 397.',
  'I. Becker-Reshef, V. Bandaru, B. Barker, S. Coutu, J. M. Deines, B. Doorn, G. Eilerts, B. Franch, A. S. Galvez, M. ' +
  'Hosseini, M. Humber, G. Husak, K. Guan, C. Justice, J. Keniston, H. Kerner, M. Mitkish, K. Mobley, B. Munshell, ' +
  'C. Nakalembe, E. Puricelli, R. Sahajpal, S. Skakun, E. Vermote, A. Whitcraft, M. Hansen, B. Salas, C. Justice. 2022. ' +
  'The NASA Harvest Program on Agriculture and Food Security. Remote Sensing of Agriculture and Land Cover/Land Use ' +
  'Changes in South and Southeast Asian Countries. 53-80.',
  'K. Lasko, K. P. Vadrevu, V. Bandaru, T. N. Nguyen, H. Q. Bui. 2021. PM2.5 Emissions from Biomass Burning in ' +
  'South/Southeast Asia – Uncertainties and Trade-Offs. Biomass burning in south and Southeast Asia. 149-169.',
  'V. Bandaru, R.C. Izaurralde and K. Zhao 2015. Bioenergy potential of Switchgrass and Miscanthus on US marginal ' +
  'lands, In Bhardwaj. K. A, Chen. J, Zenone. J (eds) Sustainable Biofuels: An Ecological Assessment of the Future' +
  ' Energy: Higher Education Press (HEP) in China and De Gruyter in Germany. p. 299-318. (published April 2015).',
  'N.L. Miles, S.J. Richardson, K.J. Davis, A.E. Andrews, T.J. Griffis, V. Bandaru, and K.P. Hosman. 2013. ' +
  'NACP MCI: Tower Atmospheric CO2 Concentrations, Upper Midwest Region, USA, 2007-2009. Data set. Available ' +
  'on-line [http://daac.ornl.gov] from Oak Ridge National Laboratory Distributed Active Archive Center, Oak Ridge,' +
  ' Tennessee, USA. http://dx.doi.org/10.3334/ORNLDAAC/1202',
  'W.D. Hively, G.W. McCarty, M.W. Lang, V. Bandaru, A. Kim, A.M. Sadeghi. 2008. Developing crop rotation maps' +
  ' from satellite imagery for use in modeling water quality in the Choptank River Watershed. In: Proceedings of ' +
  'the National Sedimentation Laboratory – 50 Years of Soil and Water Research in a Changing Agricultural ' +
  'Environment, Oxford, Mississippi.'
];

export default peer_reviewed;
