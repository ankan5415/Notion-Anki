define("side", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function side() {
        return true;
    }
    exports.default = side;
});
define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var test = function () { return "hello world! "; };
    exports.default = test;
});
