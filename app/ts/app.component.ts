import {Component} from 'angular2/core';
import {HeadingsConfig} from "./headings.config";
import {PlaylistComponent} from "./playlist.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/templates/app.component.html',
    directives:[PlaylistComponent]
})

export class AppComponent {
    mainheading = HeadingsConfig.Main_heading;
}
