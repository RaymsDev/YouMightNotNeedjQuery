import * as $ from "jquery";

const title = $("#title");
title.on("click", () => {
  title.css("color", "red");
});
