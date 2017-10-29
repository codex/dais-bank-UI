import $ from 'jquery';
import layoutController from 'layout-controller';
import homeController from 'home-controller';

$(() => {
    layoutController.init()
        .then(() => {
            homeController.init();
        });
});

