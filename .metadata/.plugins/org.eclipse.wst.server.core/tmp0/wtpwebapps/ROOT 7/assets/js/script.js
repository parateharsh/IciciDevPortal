$(document).ready(function(){
  hash = window.location.hash;
  console.log(hash);
});
// $.noConflict();
$(document).ready(function(){
  if(window.location.hash != "") {
      $(window.location.hash).click();
      $(window.location.hash).addClass("active show");
      $(window.location.hash).siblings().removeClass("active show");
      var mainTab =  $(window.location.hash).attr('href');
      console.log(mainTab);
      $(mainTab).addClass("show active");
      $(mainTab).siblings().removeClass("active show");
  }
});

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
showTabApplication(currentTab);
showTabDev(currentTab);
showTabEnv(currentTab);
console.log(currentTab);
function showTab(n) {
  var x = document.getElementsByClassName("tab");
  if(x.length > 0){
      x[n].style.display = "block";
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
      document.getElementById("nextBtn").style.padding = "10px 30px";
    } else if (n == 1) {
      document.getElementById("nextBtn").innerHTML = "Verify";
      document.getElementById("nextBtn").disabled = true;
    }
    else {
      document.getElementById("nextBtn").innerHTML = "Next";
      document.getElementById("nextBtn").disabled = false;
    }
    fixStepIndicator(n)
  }
  
}
function showTabApplication(n) {
  var x = document.getElementsByClassName("tabApplication");
  if(x.length > 0){
  x[n].style.display = "block";
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    document.getElementById("nextBtn").style.padding = "10px 30px";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n)
}
}
function showTabDev(n){
    var x = document.getElementsByClassName("tabdevAccount");
    if(x.length > 0){ x[n].style.display = "block"; }
}
function showTabEnv(n){
  var x = document.getElementsByClassName("tabEnvironment");
  if(x.length > 0){ x[n].style.display = "block";}
}
function showProdTabEnv(n){
  var x = document.getElementsByClassName("tabProdEnvironment");
  if(x.length > 0){ x[n].style.display = "block"; }
}
function nextPrevApplication(n) {
  var x = document.getElementsByClassName("tabApplication");
  if(x.length > 0){
  x[currentTab].style.display = "none";
  console.log(currentTab);
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("addAnApplicationForm").submit();
    return false;
  }
  showTabApplication(currentTab);
  }
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if(x.length > 0){
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
  }
}
function openCurrentTab(n) {
    var x = document.getElementsByClassName("tab");
    console.log(x);
    if(x.length > 0){
    x[currentTab].style.display = "none";
    currentTab = n;
    if (currentTab >= x.length) {
      document.getElementById("regForm").submit();
      return false;
    }
    showTab(currentTab);
  }
}
function openCurrentTabApplication(n) {
  var x = document.getElementsByClassName("tabApplication");
  if(x.length > 0){
  x[currentTab].style.display = "none";
  currentTab = n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTabApplication(currentTab);
}
}
function openCurrentTabDev(n) {
  var x = document.getElementsByClassName("tabdevAccount");
  if(x.length > 0){
  x[currentTab].style.display = "none";
  currentTab = n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTabEnv(currentTab);
}
}
function openCurrentTabEnv(n) {
  var x = document.getElementsByClassName("tabEnvironment");
  if(x.length > 0){
  x[currentTab].style.display = "none";
  currentTab = n;
  if (currentTab >= x.length) {
    document.getElementById("environmentForm").submit();
    return false;
  }
  showTabEnv(currentTab);
  }
}
function openProdCurrentTabEnv(n) {
  var x = document.getElementsByClassName("tabProdEnvironment");
  x[0].style.display = "none";
  x[1].style.display = "none";
  x[2].style.display = "none";

  x[parseInt(n)].style.display = "block";
}
function nextPrevProd(n) {
  var x = document.getElementsByClassName("tab");
  if(x.length > 0){
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("prodRequestForm").submit();
    return false;
  }
  showTabProd(currentTab);
  }
}
function showTabProd(n) {
  var x = document.getElementsByClassName("tab");
  if(x.length > 0){
  x[n].style.display = "block";
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Confirm Request";
  } else {
    document.getElementById("nextBtn").innerHTML = "Continue";
  }
  fixStepIndicator(n)
}
}
function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}
function openTab(tab) { /* code to display tab content on click of external links */
  $(".tab-pane").siblings().removeClass("in show active");
  $(tab).addClass("in show active");
  $(".nav-tabs li a").removeClass("show active");
  $('html, body').animate({ scrollTop: 0 }, 'fast');
}
$(document).ready(function () { 
  x = 1;
  y = 1;
  $("#addMore").click(function () { /* add and remove content dynamically */
    $("#addMoreWebSites").append('<div id="addMoreWebSitesChild' + x++ + '" class="col-md-8 marginAutoHr text-center">' + '<div class="input-group mb-3">' + '<div class="input-group-prepend">' + '<span class="input-group-text" id="basic-addon1">www.</span>'+'</div>'+'<input class="inputWithLabel" type="text" placeholder="Your website name" required="">'+'<i class="fa fa-exclamation-circle warningIcon"></i>'+'</div>'+'<img src="images/Group 472.svg" class="btnRemove">'+'</img>'+'</div>');
  });
  $('body').on('click', '.btnRemove', function () {
    $(this).parent('div.marginAutoHr').remove()
  });
});
$(function () { /* apply style to the top nav bar when the user scroll down*/
  $(document).scroll(function () {
      var $nav = $(".menuBar");
      var $navtryItFree = $("#tryItFree .navbar-brand");
      var $navthankYou = $("#thankYou .navbar-brand");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $navtryItFree.toggleClass('scrolled', $(this).scrollTop() > $navtryItFree.height());
      $navthankYou.toggleClass('scrolled', $(this).scrollTop() > $navthankYou.height());
  });
});
function verifyOTP(){
  document.getElementById("enterOTPSection").style.display = "flex";
  document.getElementById("nextBtn").disabled = false;
  document.getElementsByClassName("changeMobileNumber")[0].style.display = "block";
  document.getElementsByClassName("sendOTPBtn")[0].style.display = "none";
  document.getElementById("mobileNumber").disabled=true;
}
function changeNumber(){
  document.getElementById("mobileNumber").disabled=false;
  document.getElementById("enterOTPSection").style.display = "none";
  document.getElementsByClassName("changeMobileNumber")[0].style.display = "none";
  document.getElementsByClassName("sendOTPBtn")[0].style.display = "block";
}
function openProdDropdown() {
  document.getElementsByClassName("dropdown-content")[0].style.display = "block";
}
function addIPAddress(){
  var inputValue = document.getElementById("whitelistIpInput").value;
  var ipDiv = document.getElementById("whitelistIPItemContainer");
  y = 1;
  console.log(ipDiv);
  console.log(inputValue);
  if(inputValue !== ""){
    ipDiv.append('<div id="addMoreWebSitesChild' + y++ + '" class="col-md-8 marginAutoHr text-center">' + '</div>');
  }
}
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#profileImage')
              .attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
  }
}
function createDevAccount(){
  document.getElementById("requestDevAccount").style.display="block";
  document.getElementById("noApplications").style.display="none";
}
function openApiApplictionTable(){
  document.getElementById("apiApplicationTable").style.display="block";
  document.getElementById("requestDevAccount").style.display="none";
}


function TestMyApi_1(element_id, result_id, proxy_id, method, scode) {
  event.preventDefault();
  var header_key = new Array();
  $.each($("input[name='header_key_" + element_id + "[]']"), function () {
    header_key.push($(this).val());
  });
  var header_val = new Array();
  $.each($("input[name='header_val_" + element_id + "[]']"), function () {
    header_val.push($(this).val());
  });
  var headers = new Array();
  for (let i = 0; i < header_key.length; i++) {
    var objH = { 'key': header_key[i], 'value' : header_val[i] };
    headers.push(objH);
  }

  var json = {
    "result_id": result_id,
    "proxy_id": proxy_id,
    "method": method,
    "headers": headers,
    "content_type": 'JSON',
    "request_body": $('#req_' + element_id).val(),
  }
  $.ajax({
    url: 'http://localhost:8093/ROOT/rest/sandbox_api_test_request', type: 'POST', data: json,
    beforeSend: function () { $(".loader").show(); $("body").css("opacity", "0.2"); },
    complete: function () { $(".loader").hide(); $("body").css("opacity", "1") },
    success: function (resp_txt, textStatus, request) {
      console.log(resp_txt);
      var output = JSON.stringify(resp_txt);
      console.log(output);
      if (output && output.length > 0 && output != '[]' && output != '{}') {
        $('#final_' + element_id).html(vkbeautify.json(output, 4));
        //$('#final_' + element_id).val(output);
      } else {
        $('#final_' + element_id).html('');
      }
      $c = $('#final_' + element_id).closest('table');
      $c.css({ 'width': '100%' });

      $('html, body').animate({ scrollTop: $('#final_' + element_id).closest('table').offset().top }, 500);
      var RespCode = request.getResponseHeader('RespCode');
      if (RespCode == null || RespCode.length <= 0) { RespCode = scode; }
      $c.find('tbody td.response-col_status').html(RespCode);
    }
  });
}



var editor1;
var editor11;
$(document).ready(function(){
    ace.config.set('basePath', '//cdnjs.cloudflare.com/ajax/libs/ace/1.4.13/')
    editor11 = ace.edit("editor");
    editor1 = ace.edit("editor1");
    editor1.getSession().setMode('ace/mode/json');
    editor1.getSession().setUseWrapMode(true);
    try{ beautify(); } catch(e) { }
});
function beautify(){
    console.log(vkbeautify.json(editor1.getValue()));
    // $("#editor1").html(vkbeautify.json(editor1.getValue()));
    // $("#editor1").html();
    editor1.setValue(vkbeautify.json(editor1.getValue(), 4 ))
}
function add_new_header() {
    var html = '<div class="row"><div class="col-4 col-sm-4"><input type="text" class="form-control" placeholder="Key" name="header_key[]"></div>';
    html += '<div class="col-6 col-sm-6"><input type="text" class="form-control" placeholder="Value" name="header_val[]"></div>';
    html += '<div class="col-2 col-sm-2"><a class="Custom_button" onclick="add_new_header()"><i class="fa fa-plus mt-2 text-primary"></i></a> <a class="Custom_button" onclick="remove_div(this)"><i class="fa fa-minus mt-2 text-primary"></i></a></div></div>';
    $('.add_header').append(html);
}
function add_new_attributes() {
    var html = '<div class="row"><div class="col-4 col-sm-4"><input type="text" class="form-control" placeholder="Key" name="attributes_key[]"></div>';
    html += '<div class="col-6 col-sm-6"><input type="text" class="form-control" placeholder="Description" name="attributes_val[]"></div>';
    html += '<div class="col-2 col-sm-2"><a class="Custom_button" onclick="add_new_attributes()"><i class="fa fa-plus mt-2 text-primary"></i></a> <a class="Custom_button" onclick="remove_div(this)"><i class="fa fa-minus mt-2 text-primary"></i></a></div></div>';
    $('.attributes').append(html);
}
function remove_div(a) { $(a).closest(".row").remove(); }

function prettyJSONTextBox(id) {
  var ugly = document.getElementById(id).value;
  var obj = JSON.parse(ugly);
  var pretty = JSON.stringify(obj, undefined, 4);
  document.getElementById(id).value = pretty;
}



