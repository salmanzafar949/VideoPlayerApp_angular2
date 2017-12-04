import {Component} from 'angular2/core';
import {HeadingsConfig} from "./headings.config";

@Component({
    selector: 'my-app',
    template: '<h1>{{ mainheading }}</h1>'
})

export class AppComponent {
    mainheading = HeadingsConfig.Main_heading;
}
