var ExpectHelper = function() {

  this.verifyEnabled = function(element, expectedState) {
    expect(element.isEnabled()).toEqual(expectedState);
  };

  this.verifyIsDisplayed = function(element, expectedState) {
    expect(element.isDisplayed()).toEqual(expectedState);
  };

};
module.exports = new ExpectHelper();