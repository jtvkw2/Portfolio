var modal = document.getElementById('myModal');
var span = document.getElementsByClassName(".close");

function closeModal(){
  modal.style.display = "none";
  while (modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }

}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      while (modal.firstChild) {
        modal.removeChild(modal.firstChild);
      }
    }
}

function finalPopup(popup){
  var projects = ["memory", "arcade", "pixel", "feed", "map"];
  console.log(projects[popup]);
  var elem = $("<div class=\'innerModal\' data-bind=\"template: { name: \'modal\', data: "+projects[popup]+"}\"></div>");
  $("#myModal").append(elem);
  modal.style.display = "block";
}

function MyViewModel(data) {
   var self = this;
   self.filters = ko.observableArray(data.filters);
   self.filter = ko.observable('');
   self.list = ko.observableArray(data.list);
   self.filteredItems = ko.computed(function() {
     var filter = self.filter();
     if (!filter || filter == "None") {
      return self.list();
     } else {
      return ko.utils.arrayFilter(self.list(), function(i) {
          return i.type == filter;
      });
    }
  });


  //function finalPopup(popup){
    //var projects = ["memory", "arcade", "pixel", "feed", "map"];
    //console.log(popup);
    //var elem = $("<div class=\'innerModal\' data-bind=\"template: { name: \'modal\', data: "+projects[popup]+"}\"></div>");
    //$("#myModal").append(elem);
  //  modal.style.display = "block";
  //}

  self.finalPopup = function(popup) {
    var name = popup["name"];
    console.log(name);
    var elem = $("<div class=\'innerModal\' data-bind=\"template: { name: \'modal\', data: "+name+"}\"></div>");
    $("#myModal").append(elem);
    modal.style.display = "block";
  }

};

var initialData = {
  list :[{name: "memory", type: "JavaScript", url: ko.observable("https://github.com/jtvkw2/Memory"), src: ko.observable("img/Memory.png"), des: "Built a complete browser-based card matching game (also known as Concentration). But this isn’t just any memory game! It’s a shnazzy, well-designed, feature-packed memory game!"},
  {name:"arcade", type: "JavaScript", url: ko.observable("https://github.com/jtvkw2/Bug_Boy_in_Water_World"), src: ko.observable("img/Arcade.png"), des: "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript."},
  {name: "pixel", type:"JavaScript", url: ko.observable("https://github.com/jtvkw2/Pixel"), src: ko.observable("img/Pixel.png"), des: "Created a single-page app in JavaScript where the user can create artistic designs!"},
  {name: "feed", type:"JavaScript", url: ko.observable("https://github.com/jtvkw2/Feed-Reader"), src: ko.observable("img/Feed.png"), des: "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API."},
  {name: "map",type:"JavaScript", url: ko.observable("https://github.com/jtvkw2/Map"), src: ko.observable("img/Map.png"), des: "A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and Wikipedia APIs."},
  {name:"pitch", type: "IOS", url: ko.observable("https://github.com/jtvkw2/Map"), src: ko.observable("img/Map.png"), des: "A Pitch Maniputlation app"}],
  filters :["None","JavaScript", "IOS"]
}

ko.applyBindings(new MyViewModel(initialData));
