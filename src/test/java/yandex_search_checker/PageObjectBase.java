package yandex_search_checker;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;
//Это была попытка в PageObject паттерн, но пока не сложилось
public class PageObjectBase {
    private static WebDriver webDriver;

    public PageObjectBase(WebDriver webDriver) {
        this.webDriver = webDriver;
    }

    private By goToPicturesPage = By.id("images");
    private By goSearchByPicture = By.id("uniq16063898221373542983");

    public void goToPicturesPage() {
        webDriver.findElement(goToPicturesPage).click();
    }

    public void goSearchByPicture() {
        webDriver.findElement(goSearchByPicture).click();
    }

}
