$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("electronicstest.feature");
formatter.feature({
  "line": 1,
  "name": "Cell phone Test",
  "description": "As a user i should be able to navigate Cell phone page successfully",
  "id": "cell-phone-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4520917199,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify that i should be able to place order for mobile phones successfully",
  "description": "",
  "id": "cell-phone-test;verify-that-i-should-be-able-to-place-order-for-mobile-phones-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Electronics page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Cell phone page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be able to see Cell phones text",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on list view button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select model Nokia Lumia 1020 option",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the product name and price",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I update the order quantity to 2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify the product added successfully into cart",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I close the notification bar",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on shopping cart link on notification bar",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should navigate to shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I verify the order qty. as 2",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify the total price as $ 698.00",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select terms and condition check box",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I click on register page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter my details to register",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on registration button",
  "keyword": "And "
});
formatter.match({
  "location": "ElectronicsSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 55049900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnElectronicsPage()"
});
formatter.result({
  "duration": 166160401,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnCellPhonePage()"
});
formatter.result({
  "duration": 920905500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldBeAbleToSeeCellPhonesText()"
});
formatter.result({
  "duration": 1026707200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnListViewButton()"
});
formatter.result({
  "duration": 47119400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1020",
      "offset": 25
    }
  ],
  "location": "ElectronicsSteps.selectModelNokiaLumiaOption(int)"
});
formatter.result({
  "duration": 1413676401,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iVerifyTheProductNameAndPrice()"
});
formatter.result({
  "duration": 2078678901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "ElectronicsSteps.iUpdateTheOrderQuantityTo(int)"
});
formatter.result({
  "duration": 1196175900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 1087841300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iVerifyTheProductAddedSuccessfullyIntoCart()"
});
formatter.result({
  "duration": 1055332101,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCloseTheNotificationBar()"
});
formatter.result({
  "duration": 4757433301,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnShoppingCartLinkOnNotificationBar()"
});
formatter.result({
  "duration": 1578628200,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iShouldNavigateToShoppingCartPage()"
});
formatter.result({
  "duration": 1051271500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "ElectronicsSteps.iVerifyTheOrderQtyAs(int)"
});
formatter.result({
  "duration": 1092471899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "698",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "ElectronicsSteps.iVerifyTheTotalPriceAs$(int,int)"
});
formatter.result({
  "duration": 1041299600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iSelectTermsAndConditionCheckBox()"
});
formatter.result({
  "duration": 1089836700,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 1500487699,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iNavigateToSignInPage()"
});
formatter.result({
  "duration": 37915600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnRegisterPage()"
});
formatter.result({
  "duration": 314229901,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iEnterMyDetailsToRegister()"
});
formatter.result({
  "duration": 5602479300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnRegistrationButton()"
});
formatter.result({
  "duration": 2604794600,
  "status": "passed"
});
formatter.after({
  "duration": 621237500,
  "status": "passed"
});
formatter.uri("testsuite.feature");
formatter.feature({
  "line": 1,
  "name": "Products Test",
  "description": "As a user I should be able to see products in alphabetical order",
  "id": "products-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2977958300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify product added to shopping cart successfully",
  "description": "",
  "id": "products-test;verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on desktop option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select A to Z sorting option from dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select the processor 2.2 GHz Intel Pentium Dual-Core E2200",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select the ram 8GB [+$60.00]",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select hdd 400 GB [+$100.00]",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select os Vista Premium",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Microsoft Software",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Total commander software",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Total price should be $1,475.00",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on computer add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Product should be successfully added to shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on close notification bar",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on shopping cart link on notification bar",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should navigate to shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I change the order qty. to 2",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on update shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Shopping cart price should change to $ 2,950.00",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I click on Terms and condition check box",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I navigate to sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click on Guest checkout link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I navigate to checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I fill required details",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on next day air service",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on credit cart payment option",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I select credit cart type as Master Card",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I fill card details",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on payment continue button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I verify the credit card as payment method",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I verify the next day air as delivery method",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I verify the total price as $2,950.00",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I click on confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I verify the Thank you message",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I verify the order has been successfully processed",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I navigate to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps$MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 117400,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 392721900,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnDesktopOption()"
});
formatter.result({
  "duration": 340052801,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.selectAToZSortingOptionFromDropdownMenu()"
});
formatter.result({
  "duration": 4211355600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 25
    },
    {
      "val": "2200",
      "offset": 56
    }
  ],
  "location": "ShoppingSteps.iSelectTheProcessorGHzIntelPentiumDualCoreE(int,int,int)"
});
formatter.result({
  "duration": 1139540800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 17
    },
    {
      "val": "60",
      "offset": 24
    },
    {
      "val": "00",
      "offset": 27
    }
  ],
  "location": "ShoppingSteps.iSelectTheRamGB$(int,int,int)"
});
formatter.result({
  "duration": 1160714400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    },
    {
      "val": "100",
      "offset": 23
    },
    {
      "val": "00",
      "offset": 27
    }
  ],
  "location": "ShoppingSteps.iSelectHddGB$(int,int,int)"
});
formatter.result({
  "duration": 1146554399,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iSelectOsVistaPremium()"
});
formatter.result({
  "duration": 1096733299,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iSelectMicrosoftSoftware()"
});
formatter.result({
  "duration": 5134192500,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iSelectTotalCommanderSoftware()"
});
formatter.result({
  "duration": 1118973901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "475",
      "offset": 25
    },
    {
      "val": "00",
      "offset": 29
    }
  ],
  "location": "ShoppingSteps.totalPriceShouldBe$(int,int,int)"
});
formatter.result({
  "duration": 1039240299,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnComputerAddToCartButton()"
});
formatter.result({
  "duration": 1114345699,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.productShouldBeSuccessfullyAddedToShoppingCart()"
});
formatter.result({
  "duration": 1045542099,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnCloseNotificationBar()"
});
formatter.result({
  "duration": 1115664000,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnShoppingCartLinkOnNotificationBar()"
});
formatter.result({
  "duration": 11753055300,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iShouldNavigateToShoppingCartPage()"
});
formatter.result({
  "duration": 1063484999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "ShoppingSteps.iChangeTheOrderQtyTo(int)"
});
formatter.result({
  "duration": 1234677799,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnUpdateShoppingCartButton()"
});
formatter.result({
  "duration": 1391737800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 39
    },
    {
      "val": "950",
      "offset": 41
    },
    {
      "val": "00",
      "offset": 45
    }
  ],
  "location": "ShoppingSteps.shoppingCartPriceShouldChangeTo$(int,int,int)"
});
formatter.result({
  "duration": 1043195599,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnTermsAndConditionCheckBox()"
});
formatter.result({
  "duration": 1124547100,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 1623541900,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iNavigateToSignInPage()"
});
formatter.result({
  "duration": 57205100,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnGuestCheckoutLink()"
});
formatter.result({
  "duration": 692657200,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iNavigateToCheckoutPage()"
});
formatter.result({
  "duration": 14600,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iFillRequiredDetails()"
});
formatter.result({
  "duration": 9112996299,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickContinueButton()"
});
formatter.result({
  "duration": 1118861800,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnNextDayAirService()"
});
formatter.result({
  "duration": 1122527401,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 1082791500,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnCreditCartPaymentOption()"
});
formatter.result({
  "duration": 4139083200,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 21067680200,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f0e3fd4c8436ad38241598877cb45420, clickElement {id\u003d87C23F1B72DE601F9693F304A57734F6_element_113}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\viren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56192}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56192/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (f0e3fd4c8436ad38241598877cb45420)] -\u003e xpath: //button[@class\u003d\u0027button-1 shipping-method-next-step-button\u0027]]\nSession ID: f0e3fd4c8436ad38241598877cb45420\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utilities.Utility.clickOnElement(Utility.java:52)\r\n\tat com.nopcommerce.demo.pages.CheckOutPage.clickOnShippingContinue(CheckOutPage.java:221)\r\n\tat com.nopcommerce.demo.steps.ShoppingSteps.iClickOnContinueButton(ShoppingSteps.java:171)\r\n\tat ✽.And I click on continue button(testsuite.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShoppingSteps.iSelectCreditCartTypeAsMasterCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.iFillCardDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnPaymentContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.iVerifyTheCreditCardAsPaymentMethod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.iVerifyTheNextDayAirAsDeliveryMethod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    },
    {
      "val": "950",
      "offset": 31
    },
    {
      "val": "00",
      "offset": 35
    }
  ],
  "location": "ShoppingSteps.iVerifyTheTotalPriceAs$(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnConfirmButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.iVerifyTheThankYouMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.iVerifyTheOrderHasBeenSuccessfullyProcessed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingSteps.iNavigateToHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 876605500,
  "status": "passed"
});
});