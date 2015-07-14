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
	var app = qlik.openApp('e59234ce-6a8d-4ab4-b266-c1b46e6179c3', config);

	//get objects -- inserted here --
	app.getObject('QV01','tmaqpf', { noInteraction:false });

	app.getObject( 'CurrentSelections', 'CurrentSelections' );

	app.getObject('QV-Services-01','KxdNL');
	app.getObject('QV-Services-02','tcxTY');
	app.getObject('QV-Services-03','MdpsUpA');

	app.getObject('QV-portofolio-01','nRxXG', { noInteraction:true });
/*	app.getObject('QV-Modal-01','nRxXG'); */
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

	app.getObject('QV-Map','VcKjw');


	//create cubes and lists -- inserted here --
	/* $('#portfolioModal1').on('show.bs.modal', function (event) {
	  console.log('modelled');
	  console.log(app);
	  app.getObject('QV-Modal-01','nRxXG');
	}) */
	$(document).ready( function() {
	    $("#modal-1").on("click", function() {
	//			var app = qlik.openApp('e59234ce-6a8d-4ab4-b266-c1b46e6179c3', config);
				console.log('click #modal-1');
	      app.getObject('QV-Modal-01','nRxXG');
	    });
	});
} );



$(document).ready(function (e) {

$('.QV-Modal-01').mousemove(function (e) {
id = $(this).attr('id');
$('.selections-data-area-ui canvas').css('position', 'fixed');
$('.selections-data-area-ui canvas').css('top', y+40);
// $('.qv-selection-toolbar').css('z-index', 0);
});
/*
$('body').scroll(function() {
y = $('#'+id).offset().top;
$('.qv-selection-toolbar').css('top', y-40);
$('.qv-selection-toolbar').css('z-index', 0);
});
*/
});
