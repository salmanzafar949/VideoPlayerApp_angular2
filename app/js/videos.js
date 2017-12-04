System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Videos;
    return {
        setters:[],
        execute: function() {
            Videos = (function () {
                function Videos(id, title, video_code, desc) {
                    this.id = id;
                    this.title = title;
                    this.video_code = video_code;
                    this.desc = desc;
                }
                return Videos;
            }());
            exports_1("Videos", Videos);
        }
    }
});
//# sourceMappingURL=videos.js.map