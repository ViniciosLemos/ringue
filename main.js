let char1 = new Knight("💃Bezinha");
let monster = new Monstrinho();
let log = new Log(document.querySelector(".log"));
let stage = new Stage(
    char1,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log
)

stage.start();