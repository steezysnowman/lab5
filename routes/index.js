// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
  res.render('index', data);
};

function projectClick(e) { 
    // prevent the page from reloading 
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
    $(this).css("background-color", "#7fff00");
}