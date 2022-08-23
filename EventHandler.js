// //Member variable array
// var arrOfObj = [];
function EventHandler(events) {

  this.events = events;

  this.getEventsBetweenDates = function (start, end) {
    this.events= events.filter(function (a) {
      this.start = new Date(start);
      this.end = new Date(end);
      var dS = new Date(a.dateStart);
      if (dS >= this.start && dS <= this.end) {
        return a;
      }
    });
    return this.events;
  };

  this.getByMonth = function(month){
    this.events = events.filter(function(object){
        var dateStart =  new Date(object.dateStart);
        var objectMonth = dateStart.getMonth() + 1;

        if (objectMonth == month){
            return object;
        }   
    });
    return this.events;
}

  this.getUniqueDateAndSort = function () {
    this.events = events.filter(function (a) {
      if (a.dateStart !== a.dateEnd) {
        return a;
      }
    });
    return this.events.sort((a, b) => a.dateStart.split("/")[1] - b.dateStart.split("/")[1]);
  }

  
this.getSummary = function (obj) {
  var summary = [];


  this.events = (obj === undefined) ? this.events : obj;

  var returnType = Array.isArray(this.events); // object or array?
    if (returnType) { //if object only 
      this.events = events.filter(function (a) {

        if (a.dateStart === a.dateEnd ) {
          summary.push("On " + a.dateStart + " : " + a.name + " (" + a.description + ") ");
          return summary;
        }
        else {
          //DISPLAY
          summary.push("From " + a.dateStart + " to " + a.dateEnd + " : " + a.name + " (" + a.description + ") ");

          return summary;
        }
      }); //end filter
    }
    else { // if array of objects

      this.events = events.filter(function (a) {
       
        if (a.dateStart === a.dateEnd ) {
          
          summary.push("On " + a.dateStart + " : " + a.name + " (" + a.description + ") ");
          
          return summary;
        }
        else {
          summary.push("From " + a.dateStart + " to " + a.dateEnd + " : " + a.name + " (" + a.description + ") ");
         
          return summary ;
        }
      })
    }
    return summary ;
  }

}

var newarrOfObj = new EventHandler(events);

Array.prototype.getEventsBetweenDates = function(start, end){
  return new EventHandler(this).getEventsBetweenDates(start, end);
}

Array.prototype.getSummary = function(obj) {
  return new EventHandler(this).getSummary(obj);
}

Array.prototype.getByMonth = function(month) {
  return new EventHandler(this).getByMonth(month);
}

Array.prototype.getUniqueDateAndSort = function(){
  return new EventHandler(this).getUniqueDateAndSort();
}


// arrOfObj.push(events);
// arrOfObj = new EventHandler(events);
// console.log("getEventsBetweenDates");

// console.log(arrOfObj.getEventsBetweenDate("2022/02/01", "2022/02/14"));

// console.log("getByMonth");

// console.log(getByMonth("05"));

// console.log("getUniqueDateAndSort");

// console.log(getUniqueDateAndSort());

// console.log("getSummary");

// // console.log(getSummary());

// console.log("Part 2");


// console.log(newarrOfObj.getByMonth(06).getSummary());


// console.log(newarrOfObj.getEventsBetweenDates("2022/02/01", "2022/02/16"));

// console.log(newarrOfObj.getByMonth(06));

// console.log(newarrOfObj.getUniqueDateAndSort());

// console.log(newarrOfObj.getSummary());
// console.log(newarrOfObj.getSummary({name: 'Market', description: "Farmer's market day long event", dateStart: '2022/06/12', dateEnd: '2022/06/12'}));
// console.log(newarrOfObj.getSummary({name: 'University expo', description: 'Expo to showcase University degrees', dateStart: '2022/02/01', dateEnd: '2022/02/14'}));
// console.log(newarrOfObj.getSummary({name: 'Pizza party', description: "Pizza party at work", dateStart: '2022/07/10', dateEnd: '2022/07/10'}));

// console.log(newarrOfObj.getByMonth(06).getSummary());
