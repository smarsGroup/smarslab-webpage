const research_list = [
    {
        title: 'heading',
        description: 'Our research broadly focuses on improving modeling capabilities to simulate crop growth, water, ' +
          'carbon and nitrogen dynamics under various climatic, soil and management conditions at various spatial scales, ' +
          'and parallelly develop operational decision support tools and data products using combination of process based ' +
          'crop models and remote sensing. The ultimate goal of our research program is to help different stakeholders ' +
          'involved in agriculture to optimize agricultural practices to reduce agricultural production risks, improve ' +
          'crop production and promote sustainable agriculture.'
    },
    {
        title: 'Evaluating and developing algorithms to estimate crop modeling inputs and parameters',
        description: 'Accurate spatial scale estimates of crop modeling inputs (e.g., tillage practices), state ' +
          'variables(e.g., leaf area index) and parameters (e.g., crop emergence and maturity dates) are essential for ' +
          'reliable spatial scale modeling of agricultural systems. We evaluate, improve and develop algorithms using ' +
          'satellite remote sensing and machine learning to estimate high resolution spatial data products required for ' +
          'spatial scale modeling.',
        imageArr: ['https://smarslab-files.s3.amazonaws.com/smarsgroup/images/research/CropPhenologyR1.jpg', 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/research/PreseasonR1.jpg']
    },
    {
        title: 'Regional scale modeling to assess and monitoring implications of various agricultural practices',
        description: 'Majority of the process based crop models are designed to model individual points or fields. ' +
          'However, it is important that we have ability to implement these models at large regional scale at fine ' +
          'resolution to assess the impacts of various agricultural practices under local conditions. Such fine scale ' +
          'assessments will help developing strategies to optimize agricultural practices depending on local climatic ' +
          'conditions and also helps in developing policies. Regional scale modeling requires implementation of models ' +
          'on millions of pixels. So we develop robust computational tools and spatial optimization algorithms to improve ' +
          'spatial modeling configuration and implement process models at large spatial scale.',
        imageArr: ['https://smarslab-files.s3.amazonaws.com/smarsgroup/images/research/GeoCropSimR2.jpg', 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/research/JEQR2.jpg']
    },
    {
        title: 'Developing operational crop monitoring and forecasting tools',
        description: 'Recurrent extreme weather events with changing climate has increased crop failures, food shortages ' +
          'and food insecurity worldwide. These events signify the need for preseason and in season monitoring and forecasting ' +
          'tools that can help in tactical in-season decisions and provide  timely information on crop condition and ' +
          'yields to reduce the production risks. We develop operational  monitoring and forecasting tools that can help ' +
          'various stakeholders (e.g. farmers, consultants) in decision making.',
        imageArr: ['https://smarslab-files.s3.amazonaws.com/smarsgroup/images/research/NitrogenToolR3.jpg', 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/research/YieldForecastsR3.jpg']
    },
    {
        title: 'Evaluating the sensitivity of crop model sub-routines under various climatic conditions',
        description: 'To adopt to changing climatic conditions and improve the food production, there have been many ' +
          'advances in plant breeding and genetics, and production and management technologies. These advances result in ' +
          'new cultivars, new cropping systems and management strategies which can withstand to extreme weather events, ' +
          'improve nitrogen and water use efficiency and maintain or improve crop production under various climatic ' +
          'conditions. It is important that crop models have appropriate representation of plant and soil processes to ' +
          'reliably simulate changes in cropping strategies. Our research focuses on evaluating and improving various ' +
          'model sub-routines (e.g. phenology, evapotranspiration, carbon and nitrogen sub-routines) of process based ' +
          'crop models.',
        imageArr: ['https://smarslab-files.s3.amazonaws.com/smarsgroup/images/research/APEXR4.jpg', 'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/research/NEEUncertaintyR4.jpg']
    }
]

export default research_list;