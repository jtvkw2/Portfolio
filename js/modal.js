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

var initialData = {
  list :[{name: "Memory", type: "Web", url: ko.observable("https://github.com/jtvkw2/Memory"), src: ko.observable("img/Memory.png"), des: "Built a complete browser-based card matching game (also known as Concentration). But this isn’t just any memory game! It’s a shnazzy, well-designed, feature-packed memory game!"},
  {name:"Bug Boy in Water World", type: "Web", url: ko.observable("https://github.com/jtvkw2/Bug_Boy_in_Water_World"), src: ko.observable("img/Arcade.png"), des: "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript."},
  {name: "Pixel Maker", type:"Web", url: ko.observable("https://github.com/jtvkw2/Pixel-Art"), src: ko.observable("img/Pixel.png"), des: "Created a single-page app in JavaScript where the user can create artistic designs!"},
  {name: "Feed Reader", type:"Web", url: ko.observable("https://github.com/jtvkw2/Feed-Reader"), src: ko.observable("img/Feed.png"), des: "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API."},
  {name: "Google Maps Demo",type:"Web", url: ko.observable("https://github.com/jtvkw2/Map"), src: ko.observable("img/Map.png"), des: "A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and Wikipedia APIs."},
  {name:"Pitch Perfect", type: "IOS", url: ko.observable("https://github.com/jtvkw2/Pitch-Perfect"), src: ko.observable("img/Pitch.png"), des: "Built an iPhone app that records a conversation between you and a friend, and then makes your voices sound like a Chipmunk or Darth Vader."},
  {name:"MeMe", type: "IOS", url: ko.observable("https://github.com/jtvkw2/MeMe"), src: ko.observable("img/MeMe.png"), des: "Built an app that takes pictures and overlays text to make memes out of friends, family, or pets. Also allows sharing with others via social media or email."}
  ],
  filters :["-- Sort --","Web", "IOS"]
}

function MyViewModel(data) {
   var self = this;
   self.filters = ko.observableArray(data.filters);
   self.filter = ko.observable('');
   self.list = ko.observableArray(data.list);
   self.filteredItems = ko.computed(function() {
     var filter = self.filter();
     if (!filter || filter == "-- Sort --") {
      return self.list();
     } else {
      return ko.utils.arrayFilter(self.list(), function(i) {
          return i.type == filter;
      });
    }
  });

  self.finalPopup = function(popup) {
    var name = popup["name"];
    var index = initialData.list.map(function(e) { return e.name; }).indexOf(name);
    var elem = $("<div class=\'innerModal\' data-bind=\"template: { name: \'modal\',  data: initialData.list["+index+"]}\"></div>");
    $("#myModal").append(elem);
    modal.style.display = "block";
    ko.applyBindingsToNode(elem[0]);
  }
};

ko.applyBindings(new MyViewModel(initialData));
