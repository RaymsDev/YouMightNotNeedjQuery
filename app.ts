import $ from "jquery";
import "datatables.net";

const title = $("#title");
title.on("click", () => {
  title.css("color", "red");
});

const table = $("#table").DataTable();
