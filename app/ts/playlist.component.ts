import {Component} from "angular2/core";
import {Videos} from "./videos";

@Component({

    selector:'playlist',
    templateUrl:'app/ts/templates/playlist.component.html',
    inputs:['Videos']
})

export class PlaylistComponent{}