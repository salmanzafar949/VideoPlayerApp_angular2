import {Component} from "angular2/core";
import {Videos} from "./videos";

@Component({

    selector:'playlist',
    templateUrl:'app/ts/templates/playlist.component.html',
    inputs:['videos']
})

export class PlaylistComponent{

    onSelect(vid:Videos)
    {
        console.log(JSON.stringify(vid));
    }
}