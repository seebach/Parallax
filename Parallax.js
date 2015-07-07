/*global require, alert*/
/*
 * 
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var config = {
	host: window.location.hostname,
	prefix: "/",
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		alert( error.message );
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
//	var app = qlik.openApp('Executive Dashboard.qvf', config);
	var app = qlik.openApp('ea18db6f-b59b-4588-a430-0a699a832c11', config);
	
	//get objects -- inserted here --
	app.getObject('QV01','tmaqpf', { noInteraction:true });

	app.getObject( 'CurrentSelections', 'CurrentSelections' );

	app.getObject('QV-Services-01','KxdNL');
	app.getObject('QV-Services-02','tcxTY');
	app.getObject('QV-Services-03','MdpsUpA');

	app.getObject('QV-portofolio-01','nRxXG', { noInteraction:true });
	app.getObject('QV-Modal-01','nRxXG');	
	app.getObject('QV-portofolio-02','pDKRhr', { noInteraction:true });
	app.getObject('QV-Modal-02','pDKRhr');
	app.getObject('QV-portofolio-03','JEBdZz', { noInteraction:true });
	app.getObject('QV-Modal-03','JEBdZz');
	app.getObject('QV-portofolio-04','GJxgd', { noInteraction:true });
	app.getObject('QV-Modal-04','GJxgd');
	app.getObject('QV-portofolio-05','BmfQbz', { noInteraction:true });
	app.getObject('QV-Modal-05','BmfQbz');
	app.getObject('QV-portofolio-06','JZMrdb', { noInteraction:true });
	app.getObject('QV-Modal-06','JZMrdb');

	app.getObject('QV-time-01','NaKQwM');
	app.getObject('QV-time-02','ZxDKp');
	app.getObject('QV-time-03','ARNmpdM');
	app.getObject('QV-time-04','ARNmpdM');

	//create cubes and lists -- inserted here --
	/* $('#portfolioModal1').on('show.bs.modal', function (event) {
	  console.log('modelled');
	  console.log(app);
	  app.getObject('QV-Modal-01','nRxXG');	
	}) */

} );