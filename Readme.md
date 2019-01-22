In order to work this code
Need to make following changes in the slickgrid-6pac component

In the slickcore.js file add below lines 

- var jQuery = require('jquery'); //at the start before slick function. This line will provide jquery instsace to core slick class

- require('./slick.grid'); // at the bottom after function slick. This line will import and register slickgrid in the module registry (Depending upon what registry is provided in the webpack).

