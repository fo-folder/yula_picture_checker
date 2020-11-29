$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/finddescriptionfromsearch.feature");
formatter.feature({
  "name": "Find description from search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@finddescriptionfromsearch"
    }
  ]
});
formatter.scenario({
  "name": "A picture in \"files\" directory required",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@finddescriptionfromsearch"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Yandex",
  "keyword": "Given "
});
formatter.match({
  "location": "yandex_search_checker.Yatest.navigateToYandex()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go on Pictures page",
  "keyword": "When "
});
formatter.match({
  "location": "yandex_search_checker.Yatest.goOnPicturePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search by picture",
  "keyword": "And "
});
formatter.match({
  "location": "yandex_search_checker.Yatest.clickOnSearchByPicture()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@aria-label\u003d\u0027Поиск по изображению\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.67)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Admins-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1480:5afa:2075:de51%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.67, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: /var/folders/sg/8_m0fqt9001...}, goog:chromeOptions: {debuggerAddress: localhost:61077}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0286e91bf938765d2090cb483dc0def4\n*** Element info: {Using\u003dxpath, value\u003d//button[@aria-label\u003d\u0027Поиск по изображению\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat yandex_search_checker.Yatest.clickOnSearchByPicture(Yatest.java:53)\n\tat ✽.Click on search by picture(file:///Users/farida/IdeaProjects/yula_picture_checker/src/test/resources/features/finddescriptionfromsearch.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter picture for searching",
  "keyword": "And "
});
formatter.match({
  "location": "yandex_search_checker.Yatest.enterPictureForSearching()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check picture description below.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});