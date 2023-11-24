const people_list = [
  {
    present: [
      {
        name: 'Dr. Varaprasad (Prasad) Bandaru , Principal Investigator',
        data: 'Dr. Prasad Bandaru is a Research Plant Physiologist at USDA-ARS, Maricopa, AZ, and an Adjunct ' +
          'Associate Professor in the department of geographical sciences at University of Maryland, College ' +
          'Park, MD. His research is broadly focused on large scale modeling of agricultural systems. He ' +
          'develops robust geospatial tools by integrating biophysical and biogeochemical models, geographic ' +
          'information systems and satellite remote sensing, and applying them to monitor and sustainably manage ' +
          'agricultural systems at multiple scales. He is a member of NASA CMS Science Team (2016-present) and ' +
          'NASA LCLUC Science Team (2018-present). Dr. Bandaru received a PhD in Plant and Soil Sciences from ' +
          'the University of Delaware. Later, he worked as a postdoctoral research associate at Oak Ridge ' +
          'National Laboratory.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/ProfVaraprasadBandaru.png',
        links: [
          {
            logo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/usda-logo.png',
            url: 'https://www.ars.usda.gov/pacific-west-area/maricopa-arizona/us-arid-land-agricultural-research-center/plant-physiology-and-genetics-research/people/prasad-bandaru/'
          }, {
            logo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/geog-logo.png',
            url: 'https://geog.umd.edu/facultyprofile/bandaru/varaprasad'
          },
          {
            logo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/nacp-logo.png',
            url: 'https://cce-signin.gsfc.nasa.gov/cgi-bin/participants/getrec.pl?name_id=10964&wid=12'
          },
          {
            logo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/harvestlogo.png',
            url: 'https://nasaharvest.org/partner/varaprasad-bandaru'
          },
          {
            logo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/LinkedIn-logo.png',
            url: 'https://www.linkedin.com/in/varaprasad-prasad-bandaru-71a21128/'
          },
          {
            logo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/google-scholar.png',
            url: 'https://scholar.google.com/citations?user=KJDTwhcAAAAJ&hl=en'
          }
        ]
      },
      {
        name: 'Rohit Nandan',
        data: 'Dr. Rohit Nandan is a Post-doctoral research associate. His research focuses on improving  crop ' +
          'model sub-routines, remote sensing data assimilation and understanding climate change impacts. He has ' +
          'expertise in crop simulation modeling and remote sensing. Dr. Nandan received his PhD in 2022 from ' +
          'the Centre of Studies In Resources Engineering (CSRE), Indian Institute of Technology Bombay, Mumbai, ' +
          'India.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/RohitNandan.jpg'
      },
      {
        name: 'Meena Kumari Kolli',
        data: 'Dr. Meena Kolli is a Postdoctoral Research Associate. Her research focuses on the integration of ' +
          'field/remote sensing data and process-based models. Her primary research interest is in the area of ' +
          'mapping and modeling using big-data analysis using cloud platforms. Her research area revolves around ' +
          'extracting, processing, assimilating, and analyzing a satellite image to create insightful maps using ' +
          'the techniques of remote sensing and Digital Image Processing. She is ' +
          'well-versed in deriving viable solutions to complex problems through big data analysis. She received ' +
          'her Ph.D. in 2020 from the Philipps-Universität Marburg, Germany, and thereafter worked as a Research ' +
          'Fellow at the National Academy of Agricultural Sciences, New Delhi. She worked as a Postdoctoral ' +
          'Research Fellow at IIT Bombay from March 2022 to September 2022.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/MeenaKumari.jpg'
      },
      {
        name: 'Pramod Pokhrel',
        data: 'Dr. Pramod Pokhrel is a Research Agronomist at USDA-ARS, Maricopa, Arizona. His research broadly ' +
          ' focuses on climate adaptive agriculture to promote environmental sustainability within complex agricultural ' +
          ' systems. His current study is emphases on understanding and modeling carbon stabilizing potential of cover ' +
          ' crops using modeling tools and remotely sensed data. Dr. Pokhrel earned his PhD from Texas A&amp;M University ' +
          ' in 2020.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/pramod.png'
      },
      {
        name: 'Eric Allen',
        data: 'Eric Allen received his Master’s in plant biology with a focus in remote sensing from the ' +
          'University of Oklahoma. His graduate research mainly involved applying remote sensing for ' +
          'spatio-temporal analysis of vegetation productivity in response to extreme drought. Now at the ' +
          'USDA Arid-Land Research Institute, he has been working on development of a multi-scale experiment to ' +
          'study the impacts of heat stress on cotton. He is also involved in the production of a high spatial ' +
          'resolution nitrogen fertilizer database for the United States.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/EricAllen.jpg'
      },
      {
        name: 'Bharath Chandra Irigireddy',
        data: 'Bharath is pursuing masters in Robotics at the University of Maryland. His research interests mainly' +
          ' lie in the intersection of Computer Vision and Machine Learning. He is currently working on data processing' +
          ' for Nitrogen Recommendation Tool and Field Boundary Delineation using satellite images.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/Bharath1.jpeg'
      },
      {
        name: 'Rohan Maan',
        data: 'Rohan Maan is pursuing his masters in Robotics at the University of Maryland. His primary research' +
          ' is into Computer Vision and Machine Learning and is currently working on Tillage Mapping using satellite' +
          ' spatiotemporal data.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/Rohan_new.JPG'
      },
      {
        name: 'Sachin Velmurugan',
        data: 'Sachin Velmurugan is pursuing MS in Software Engineering at the University of Maryland, College ' +
          'Park. He works on developing and deploying web applications for SMaRS lab. He is ' +
          'currently working on the Nitrogen Recommendation tool.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/sachin.jpg'
      },
      {
        name: 'Ashish Murlidhar Pagote',
        data: 'Ashish Murlidhar Pagote is pursuing MS in Data Science and Analytics at the University of ' +
          'Maryland, College Park. He works as a Graduate Student Researcher and he is involved in research ' +
          'related to segmentation analysis, spatial data analysis and forecasting.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/AshishPagote.jpg'
      },
      {
        name: 'Koutilya PNVR',
        data: 'Koutilya PNVR is a PhD student in the department of Electrical and Computer Engineering, ' +
          'University of Maryland, College Park, MD. He has been working as a Graduate Research Assistant in the ' +
          'SMaRS lab, and he is involved in the projects focusing on crop phenology, semantic segmentation, and ' +
          'land cover and burnt area mapping.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/KoutilyaPNVR.jpg'
      },
      {
        name: 'Sameep Pote',
        data: 'Sameep Pote is a graduate student from University of Maryland. He is working as a Data Specialist ' +
          'at USDA. He is currently working on data assimilation related tasks of NASA CMS project.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/Sameep.jpg'
      },
      {
        name: 'Meenakshi Rawat',
        data: 'Meenakshi Rawat is a graduate student from Kansas State University. ' +
          'She has gained experience working on process-based and statistical-based models for crop yield prediction. ' +
          'She has recently joined as a Geospatial Data Scientist at the USDA. ' +
          'Currently, she is working on the NASA SERVIR project and focusing on data assimilation and simulating yield using the Environmental Policy Integrated Climate (EPIC) model.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/meenakshi-rawat.jpg'
      },
      {
        name: 'Abhinav Kumar',
        data: 'Abhinav Kumar is pursuing MS in Computer Science at Arizona State University. ' +
          'He works on establishing high-computing Linux environment for SMaRS lab. ' +
          'His primary research is into compiler and high-end computing for machine learning and deep learning applications',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/abhinav.jpeg'
      }
    ],
    former: [
      {
        name: 'Keerthan Mahesh',
        data: 'Keerthan Mahesh is pursuing MS in Software Engineering at the University of Maryland, College ' +
          'Park. He works as a Graduate Student Researcher and is involved in developing web applications. He is ' +
          'currently working on the developing features for the NASA Carbon Monitoring System (CMS) project and ' +
          'the Nitrogen Recommendation Tool. He is also involved in building the SMaRS Lab web page.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/KeerthanMahesh.jpg'
      },
      {
        name: 'Aditi Ganesh Joshi',
        data: 'Aditi Ganesh Joshi is pursuing MS in Data Science and Analytics at the University of Maryland, ' +
          'College Park. She works as a graduate student researcher. She is currently working on the statistical ' +
          'downscaling of weather forecasts.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/AditiJoshi.jpg'
      },
      {
        name: 'Sandeep Polavarapu Venkata Naga',
        data: 'Sandeep PVN is pursuing MS in Machine Learning at the University of Maryland, College ' +
          'Park. He worked as a Graduate Student Researcher and was involved in the research related to ' +
          'computer vision, machine learning and spatial data analysis.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/SandeepPVN.jpeg'
      },
      {
        name: 'Disha Radhakrishna',
        data: 'Disha Radhakrishna is pursuing MS in Software Engineering at the University of Maryland, College ' +
          'Park. She worked as a Graduate Student Researcher. She assisted in developing web-based tools and ' +
          'downscaling weather forecasts.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/DishaRadhakrishna.jpeg'
      },
      {
        name: 'Pridhvi Krishna Venkata Meduri',
        data: 'Pridhvi Meduri is pursuing MS in Cybersecurity at the University of Maryland, College Park. He ' +
          'worked as a Graduate Student Researcher. He assisted in web development, evaluating weather ' +
          'generators and spatial data mining.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/PridhviKrishna.jfif'
      },
      {
        name: 'Somesh Mehta',
        data: 'Somesh Mehta is pursuing MS in Cybersecurity at the University of Maryland, College Park. ' +
          'He worked as a Graduate Student Researcher and contributed to the spatial data fusion and ' +
          'assimilation related to tasks of NASA CMS project.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/SomeshMehta.jfif'
      },
      {
        name: 'Sesha Tanmaya Kompella',
        data: 'Sesha Tanmaya Kompella is pursuing MS in Business Analytics at University of Maryland, College ' +
          'Park. She worked as a Graduate Student Researcher. She assisted in evaluating various peak functions ' +
          'to project NDVI time series data.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/SeshaTanmayaKompella.jfif'
      },
      {
        name: 'Raghu Yaramasu',
        data: 'Raghu Yaramasu pursued MS in Telecommunications from the University of Maryland, College Park. He ' +
          'worked as a faculty specialist under the NASA CMS and LCLUC projects. His research work focused on ' +
          'crop phenology mapping, pre-season crop type mapping using deep learning, and developing scripts to ' +
          'process large spatial datasets and EPIC model implementation.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/RaghuYaramasu.jpg'
      },
      {
        name: 'Pallavi Chirumamilla',
        data: 'Pallavi Cherumamilla pursued MS in Electrical and Computer Engineering from the University of ' +
          'Maryland, College Park. She worked as a faculty specialist under the NASA LCLUC project. Her work ' +
          'focused on spatial data mining and EPIC model implementation. She is currently working for DISH ' +
          'Network as Systems Engineer.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/PallaviCherumamilla.jpeg'
      },
      {
        name: 'Rajeshwar NS',
        data: 'Rajeshwar NS pursued MS in Robotics Engineering from the University of Maryland, College Park. He ' +
          'worked as a faculty specialist under the NASA LCLUC project. He contributed to crop residue ' +
          'segmentation and land cover mapping. He is currently working for pmdtechnologies ag as a Systems ' +
          'Engineer.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/RajeshwarNS.jfif'
      },
      {
        name: 'Triniani Talari',
        data: 'Triniani Talari pursued MS in Software Engineering from the University of Maryland, College Park. ' +
          'She worked as a Graduate Student Researcher. She contributed to the development of a web based ' +
          'nitrogen recommendation tool. She is currently working as a Software Developer at S&P Global Market ' +
          'Intelligence.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/TrinianiTalari.jpeg'
      },
      {
        name: 'Akshata Kishore Moharir',
        data: 'Akshata\'s research revolved around leveraging machine learning models - Non-Linear Regression ' +
          'based models for predicting the NDVI by leveraging the MODIS satellite data for corn.' +
          'Models such as Beta, Bragg, Lorentz, Gaussian and Vogit were developed for predicting the NDVI with ' +
          'Growing Degree Days and Precipitation as predictors using RMSE and R2 as the error and evaluation ' +
          'metrics. This analysis was performed for Irrigated and Non Irrigated crop lands for Nebraska Region ' +
          'for Corn. Models like Gaussian, Vogit and Lorentz were finally compared based on their error metrics ' +
          'to predict the NDVI for the corn and Vogit and Lorentz outperformed in terms of predicting the NDVI ' +
          'compared to Gaussian. Leveraged the Gdal and geo spatial packages in R and python under the guidance ' +
          'of Prof. Varaprasad Bandaru for this research  project. Currently Akshata is working on developing ' +
          'Predictive Maintenance solutions leveraging Deep Learning and Machine learning models to reduce ' +
          'delays and cancellations of Trains at  Amtrak as a Principal Data Scientist.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/AkshataKishoreMoharir.jpg'
      },
      {
        name: 'Pranav Kulkarni',
        data: 'Pranav Kulkarni developed packages & supporting modules for performing data extraction, ' +
          'pre-processing, bias-correction of CFS and SubX Multi-Model Ensemble (MME) satellite-based weather ' +
          'datasets. He conducted large scale simulations at high-spatial resolutions by using EPIC crop model. ' +
          'Using the extracted data, he performed EPIC crop model simulations for 3 different crops ' +
          '(from 2012-2015) to produce crop yield forecast using SubX sub-seasonal weather dataset. Currently he ' +
          'is working as a Software Development Engineer at Amazon for architecting and implementing solutions ' +
          'for LastMile technology of Amazon logistics.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/PranavKulkarni.jpg'
      },
      {
        name: 'Ujjwal Ayyangar',
        data: 'Ujjwal Ayyangar pursued MS in Software Engineering from the University of Maryland, College Park. ' +
          'He worked as a Graduate Student Researcher and helped with spatial data modeling and analysis. ' +
          'Currently, he is working as a Research Scientist at Fraunhofer USA CESE.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/UjjwalAyyangar.jfif'
      },
      {
        name: 'Jiaying He',
        data: 'Jiaying He received PhD from the Department of Geographical Sciences, University of Maryland. She ' +
          'worked as a Graduate Research Assistant under the NASA Carbon Monitoring System project from 2017 to ' +
          '2019. She contributed to the tasks related to crop leaf area index, phenology and data fusion. She is ' +
          'currently working as a Postdoctoral Research Fellow in the Department of Earth System Science, ' +
          'Tsinghua University, China.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/JiayingHe.jfif'
      },
      {
        name: 'Lan Song',
        data: 'Lan Song pursued MS in Geospatial Information Science from the University of Maryland, College ' +
          'Park. Skilled in GIS analysis, Mapping, Web GIS Applications. She was involved in the California ' +
          'Energy Commission funded project and NASA LCLUC project. She assisted in cluster analysis and large ' +
          'scale spatial data analysis and modeling. She is currently working as a GIS analyst at Mead & Hunt.',
        photo: 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/people/LanSong.jfif'
      }
    ]
  }
]

export default people_list