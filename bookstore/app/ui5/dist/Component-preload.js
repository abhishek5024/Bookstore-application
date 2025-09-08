//@ui5-bundle bookstore/ui5/Component-preload.js
sap.ui.predefine("bookstore/ui5/Component", ["sap/ui/core/UIComponent"],function(t){"use strict";return t.extend("bookstore.ui5.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments)}})});
sap.ui.predefine("bookstore/ui5/controller/App.controller", ["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("bookstore.ui5.controller.App",{onInit:function(){}})});
sap.ui.require.preload({
	"bookstore/ui5/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"bookstore.ui5","type":"application","title":"Bookstore UI5 App","description":"A simple SAPUI5 frontend for the Bookstore CAP Java backend."},"sap.ui":{"technology":"UI5","icons":{"icon":"sap-icon://Fiori2/F0018"}},"sap.ui5":{"rootView":{"viewName":"bookstore.ui5.view.App","type":"XML"},"dependencies":{"minUI5Version":"1.60.0","libs":{"sap.m":{}}}},"sap.cloud":{"public":true,"service":"bookstore-srv"},"models":{"":{"dataSource":"mainService","settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":false}}},"dataSources":{"mainService":{"uri":"/odata/v4/CatalogService/","type":"OData","settings":{"odataVersion":"4.0"}}}}',
	"bookstore/ui5/view/App.view.xml":'<mvc:View\n  xmlns:mvc="sap.ui.core.mvc"\n  xmlns="sap.m"><App><pages><Page title="Bookstore"><content><Text text="Welcome to the Bookstore SAPUI5 App!" /></content></Page></pages></App></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
