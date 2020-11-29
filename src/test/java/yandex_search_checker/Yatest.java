package yandex_search_checker;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.nio.file.Paths;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.assertTrue;

public class Yatest {
    private WebDriver driver;
    String filePath = "./files/kran.jpg"; //можно менять перед запуском тестов или подменять картинки в папке
    String pictureDescription = "автокран";

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver",
                Paths.get("src/test/resources/chromedriver").toString());
        if (driver == null) {
            driver = new ChromeDriver();
        }
    }
    @After
    public void tearDown() {
        if (driver!=null) {
            driver.close();
            driver.quit();
        }
    }

    @Given("Navigate to Yandex")
    public void navigateToYandex() {
        driver.navigate().to("https://yandex.ru/");
    }

    @When("Go on Pictures page")
    public void goOnPicturePage() {
        driver.findElement(By.xpath("//a[@data-id='images']")).click();
    }

    @And("Click on search by picture")
    public void clickOnSearchByPicture() {
        driver.findElement(By.xpath("//button[@aria-label='Поиск по изображению']")).click();
    }

    @And("Enter picture for searching")
    public void enterPictureForSearching() {
        driver.findElement(By.name("upfile")).sendKeys(filePath);
    }

    @Then("Check picture description below")
    public void checkPictureDescriptionBelow() {
        //Список найденных текстов в буллитах
        List<WebElement> elements = driver.findElements(By.className("Button2-Text"));
        //поиск слова из pictureDescription в одном из компонентов списка найденных текстов в буллитах
        boolean checked = false;
        for (WebElement element: elements) {
            String elementText = element.getText();
            if (elementText != null && elementText.contains(pictureDescription)) {
                checked = true;
                break;
            }
        }
        assertTrue(checked);
    }
}
