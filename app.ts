import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.datatables.css";
import "./styles.css";

const title = $("#title");
title.on("click", () => {
  title.css("color", "red");
});

const table = $("#table").DataTable();
