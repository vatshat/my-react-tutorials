package com.javafx.react;

import javafx.application.Application;
import javafx.geometry.HPos;
import javafx.geometry.VPos;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Priority;
import javafx.scene.layout.Region;
import javafx.scene.paint.Color;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
 
 
public class JavaFxReactJs extends Application {
    private Scene scene;
    @Override public void start(Stage stage) {
        // create the scene
        stage.setTitle("JavaFx Javascript");
        scene = new Scene(new Browser(),900,600, Color.web("#666970"));
        stage.setScene(scene);
        
        /** 
         *  how to add resources to application  
         *  scene.getStylesheets().add(getClass().getResource("BrowserToolbar.css").toExternalForm());
         *  
         * @see 
         *  https://stackoverflow.com/questions/42882952/javafx-css-styles-not-working-unknown-property-resource-not-found?rq=1
         *  https://stackoverflow.com/questions/25162773/how-do-i-add-a-directory-to-the-eclipse-classpath
        */
        
        scene.getStylesheets().add("BrowserToolbar.css");        
        stage.show();
    }
 
    public static void main(String[] args){
        launch(args);
    }
}
class Browser extends Region {
 
    final WebView browser = new WebView();
    final WebEngine webEngine = browser.getEngine();
     
    public Browser() {
        //apply the styles
        getStyleClass().add("browser");
        // load the web page
        webEngine.load("http://www.oracle.com/products/index.html");
        //add the web view to the scene
        
        /** 
         * @see 
         * https://stackoverflow.com/questions/41991574/in-javafx-why-do-we-need-to-call-getchildren-when-we-add-an-element-to-a-wi
         * https://docs.oracle.com/javafx/2/layout/builtin_layouts.htm
         * 
         */
        
        getChildren().add(browser);
 
    }
    private Node createSpacer() {
        Region spacer = new Region();
        HBox.setHgrow(spacer, Priority.ALWAYS);
        return spacer;
    }
 
    @Override protected void layoutChildren() {
        double w = getWidth();
        double h = getHeight();
        layoutInArea(browser,0,0,w,h,0, HPos.CENTER, VPos.CENTER);
    }
 
    @Override protected double computePrefWidth(double height) {
        return 900;
    }
 
    @Override protected double computePrefHeight(double width) {
        return 600;
    }
}