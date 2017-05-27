var HomePage = function() {

    var ExpectHelper = require('../testHelper/expectHelper.js');

    //page object mappings.
    this.txtName = element(by.css('[ng-model="yourName"]'));
    this.lblName = this.txtName.all(by.css('[class="ng-binding"]'));
    this.txtTodo = element(by.css('[ng-model="todoList.todoText"]'));
    this.txtSearch = element(by.css('[ng-model="projectList.search"]'));


    this.verifyNameTxtDisplayed = function(expectedState) {
    ExpectHelper.verifyIsDisplayed(this.txtName, expectedState);
    }

    this.verifyTodoTxtDisplayed = function(expectedState) {
    ExpectHelper.verifyIsDisplayed(this.txtTodo, expectedState);
    }

    this.verifySearchTxtDisplayed = function(expectedState) {
    ExpectHelper.verifyIsDisplayed(this.txtSearch, expectedState);
    }

    this.enterNameTxt = function(text) {
    this.txtName.sendKeys(text);
    }

    this.enterTodoTxt = function(text) {
     this.txtTodo.sendKeys(text);
    }

    this.enterSearchTxt = function(text) {
      this.txtSearch.sendKeys(text);
    }

    this.verifyNameTxt = function(expectedText) {
    expect(this.lblName.getText()).toEqual(expectedText);
    }

};
module.exports = new HomePage();