describe('test-spec.js - example protractor tests', function() {

    var GuiHelper = require('../autLayer/guiHelper.js');
    var HomePage = require('../autLayer/homePage.js');

    beforeEach(function() {
    GuiHelper.navigateToAngularJs();
    });

    it('TC0001 - Nav to homepage smoke test', function() {
        HomePage.verifyNameTxtDisplayed(true);
        HomePage.verifyTodoTxtDisplayed(true);
        HomePage.verifySearchTxtDisplayed(true);
    });

    it('TC0002 - Enter Name, Todo, and Projects', function() {
        var baselineText = 'sdetAutomation!';

        HomePage.enterNameTxt(baselineText);
        HomePage.enterTodoTxt(baselineText);
        HomePage.enterSearchTxt(baselineText);
    });
});