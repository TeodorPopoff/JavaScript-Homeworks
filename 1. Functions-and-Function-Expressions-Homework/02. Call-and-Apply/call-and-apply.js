function printArgsInfo() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i] + " (" + typeof arguments[i] + ")");
    }
    console.log();
}

printArgsInfo.call();
printArgsInfo.call(null, 5, "argument content");

printArgsInfo.apply();
printArgsInfo.apply(null, [6, "apply argument"]);