import {Component} from 'angular2/core';
import {HeadingsConfig} from "./headings.config";
import {PlaylistComponent} from "./playlist.component";
import {Videos} from "./videos";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/templates/app.component.html',
    directives:[PlaylistComponent]
})

export class AppComponent {
    mainheading = HeadingsConfig.Main_heading;
    videos:Array<Videos>;

    constructor()
    {
        this.videos =[
            new Videos(1,"Test Video 1","128khgf","Video 1"),
            new Videos(2,"Test Video 2","abcfghi","Video 2")
        ]
    }
}
