var GuiHelper = function() {

  this.navigateToAngularJs = function() {
    browser.get(browser.params.webUrl);
  };

};
module.exports = new GuiHelper();