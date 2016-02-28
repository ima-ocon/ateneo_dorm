$(document).ready(function() {
  var navWidth = $("#navigation").width();
  centerNavBar();

  var staff_text = "<div class=\"resident col-lg-3 col-md-3 col-sm-3\">\
    <img src=\"http://cliparts.co/cliparts/Bcg/rng/Bcgrngy7i.png\" class=\"resident_img img-circle img-responsive\">\
    <div class=\"resident_text\"><p class=\"resident_name\">NAME HERE</p>\
    <p class=\"resident_position\">Position</p>\
    <p class=\"resident_description\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>\
    </div></div>";

  for (var i = 0; i < 4; i++) {
    $("#staff_list_row").append(staff_text);
  }

  var student_album_text = "<div class=\"student_album_div col-lg-4 col-md-4 col-sm-4\">\
    <img class=\"img-responsive student_album_photo\" src=\"http://ls.ateneo.edu/global//UserFiles/Image/DSC01528(1).jpg\">\
    <p class=\"album_name\">Album Name</p>\
    <p class=\"album_description\">short description</p>\
    </div>";

  for (var i = 0; i < 2; i++) {
    $("#student_life_photos_row").append("<div class=\"student_album_row\">");

      for (var j = 0; j < 3; j++) {
        $("#student_life_photos_row").append(student_album_text);
      }

    $("#student_life_photos_row").append("</div>");
  }

  var load_more_button = "<button type=\"button\" id=\"load_more_button\" class=\"btn\">LOAD MORE</button>";

  $("#student_life_photos_row").append(load_more_button);

  var facilities = ["HOT AND COLD SHOWERS", "FUNCTION ROOMS", "HOT AND COLD WATER"];

    for (var i = 0; i < 3; i++) {
      var facilities_line = "<div class=\"facilities_line row\" id=\"facilities_line" + (i+1) + "\"></div>";

      $("#facilities_container").append(facilities_line);

      for (var j = 0; j < 2; j++) {
        var facility = "<div class=\"facility col-lg-6 col-md-6 col-sm-6\">\
          <img class=\" facility_icon img-responsive\" src=\"http://www.iconsdb.com/icons/preview/gray/circle-xxl.png\">\
          <div class=\"facility_text\">\
            <p class=\"facility_title\">" + facilities[i] + "</p>\
            <p class=\"facility_description\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\
          </div>\
          </p>\
        </div>";

        $("#facilities_line" + (i+1)).append(facility);
      }

//      $("#facilities_row").append("</div");
    }

  function centerNavBar() {
    var windowWidth = $(window).width();
    var navMargin = (windowWidth - navWidth) / 2;
    $("#navigation").css("cssText", "margin-left: " + navMargin.toString() + "px !important;");
  }
});
