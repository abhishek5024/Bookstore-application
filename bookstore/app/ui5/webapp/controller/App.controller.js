    onAddOrder: function() {
      this.getView().byId("addOrderDialog").open();
    },

    onConfirmAddOrder: function() {
      var sProductId = this.getView().byId("orderProduct").getSelectedKey();
      var iAmount = parseInt(this.getView().byId("orderAmount").getValue(), 10);
      var sCurrency = this.getView().byId("orderCurrency").getValue();
      var that = this;
      var payload = {
        currency: { code: sCurrency },
        items: [
          {
            bookId: sProductId,
            amount: iAmount
          }
        ]
      };
      fetch("/odata/v4/OrdersService/Orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      .then(function(response) {
        if (response.ok) {
          that._loadProducts();
          // Clear input fields
          that.getView().byId("orderProduct").setSelectedKey("");
          that.getView().byId("orderAmount").setValue("");
          that.getView().byId("orderCurrency").setValue("EUR");
          that.getView().byId("addOrderDialog").close();
        }
      });
    },

    onCancelAddOrder: function() {
      this.getView().byId("addOrderDialog").close();
    },
sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";
  return Controller.extend("bookstore.ui5.controller.App", {
  onInit: function () {
      var oModel = new sap.ui.model.json.JSONModel();
      this.getView().setModel(oModel);
      this._loadProducts();
    },

    onAddOrder: function() {
      this.getView().byId("addOrderDialog").open();
    },

    onConfirmAddOrder: function() {
      var sProductId = this.getView().byId("orderProduct").getSelectedKey();
      var iAmount = parseInt(this.getView().byId("orderAmount").getValue(), 10);
      var sCurrency = this.getView().byId("orderCurrency").getValue();
      var that = this;
      var payload = {
        currency: { code: sCurrency },
        items: [
          {
            bookId: sProductId,
            amount: iAmount
          }
        ]
      };
      fetch("/odata/v4/OrdersService/Orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      .then(function(response) {
        if (response.ok) {
          that._loadProducts();
          // Clear input fields
          that.getView().byId("orderProduct").setSelectedKey("");
          that.getView().byId("orderAmount").setValue("");
          that.getView().byId("orderCurrency").setValue("EUR");
          that.getView().byId("addOrderDialog").close();
        }
      });
    },

    onCancelAddOrder: function() {
      this.getView().byId("addOrderDialog").close();
    },

    _loadProducts: function () {
      var oModel = this.getView().getModel();
      var that = this;
  fetch("/odata/v4/AdminService/Products")
        .then(function(response) { return response.json(); })
        .then(function(data) {
          oModel.setData({ Products: data.value || [] });
        });
    },

    onProductSelect: function(oEvent) {
      var oItem = oEvent.getSource();
      var oContext = oItem.getBindingContext();
      var oProduct = oContext.getObject();
      var oDialog = this.getView().byId("productDetailsDialog");
      this.getView().byId("detailsText").setText(
        "ID: " + oProduct.ID + "\nTitle: " + oProduct.title + "\nPrice: " + oProduct.price
      );
      oDialog.open();
    },

    onCloseDetails: function() {
      this.getView().byId("productDetailsDialog").close();
    },

    onAddProduct: function() {
      this.getView().byId("addProductDialog").open();
    },

    onConfirmAddProduct: function() {
  var sTitle = this.getView().byId("addTitle").getValue();
  var fPrice = parseFloat(this.getView().byId("addPrice").getValue());
  var sCurrency = this.getView().byId("addCurrency").getValue();
      var that = this;
      fetch("/odata/v4/AdminService/Products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: sTitle, price: fPrice, currency: { code: sCurrency } })
      })
      .then(function(response) {
        if (response.ok) {
          that._loadProducts();
          // Clear input fields
          that.getView().byId("addTitle").setValue("");
          that.getView().byId("addPrice").setValue("");
          that.getView().byId("addCurrency").setValue("EUR");
          that.getView().byId("addProductDialog").close();
        }
      });
    },

    onCancelAddProduct: function() {
      this.getView().byId("addProductDialog").close();
    }
  });
});
