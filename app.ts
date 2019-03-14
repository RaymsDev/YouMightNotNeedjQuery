import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.datatables.css";

const title = $("#title");
title.on("click", () => {
  title.css("color", "red");
});

const table = $("#table").DataTable();
