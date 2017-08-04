sap.ui.controller("pdfconverter.initialPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf pdfconverter.initialPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf pdfconverter.initialPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf pdfconverter.initialPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf pdfconverter.initialPage
*/
//	onExit: function() {
//
//	}
onPdfDOwnload:function(oEvnt){
    var doc = new jsPDF();
    var a = "row1";
doc.setFontSize(30);
 doc.text(50, 35, 'Testing Pdf ');

doc.setFontSize(14);
 doc.text(20, 60, 'a: ' + a);
 doc.setFontSize(14);
 doc.text(20, 80, 'b: ' + a);
 doc.setFontSize(14);
 doc.text(20, 100, 'c: ' + a);
doc.setFontSize(14);
 doc.text(20, 100, 'd: ' + a);

doc.save('testing.pdf');

}
    
    
});