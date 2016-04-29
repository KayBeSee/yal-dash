var fs = require('fs');
var stream = fs.createReadStream("school_list.csv");
var csv = require('fast-csv');
var request = require('request');

var apiRoute = 'http://yaldash-60688.onmodulus.net/api/chapters';

var csvStream = csv
    .parse()
    .on("data", function(data){
      var newChapter = {
        school_name: data[0],
        city: data[1],
        state: data[2],
        region: 'Midwest',
        status: 'A',
        tier: 'A',
        date_created: Date.now(),
        date_modified: Date.now(),
        reply_date: Date.now(),
        referral: 'Kevin Mulcrone',
        state_chair_assigned: 'Kevin Mulcrone',
        chapter_facebook_url: 'http://facebook.com/xavieryal',
        president: {
          first_name: 'Thomas',
          last_name: 'Jefferson',
          email: 'tjefferson@whitehouse.gov',
          phone: 8675309111,
          street_1: '1600 Pennsylvania Avenue',
          street_2: '',
          city: 'Washington',
          state: 'VA',
          zipcode: 45212,
          facebook_url: 'http://facebook/com/tjefferson'
        },
        free_speech: {
          rating: 'B',
          zone: false,
          target: false,
          status: 'Good'
        }
      };

      var newChapterJSON = JSON.stringify(newChapter);

      request.post({
        url: apiRoute,
        body: newChapterJSON,
        headers: {
          'Content-Type': 'application/json'
        }
      }, function(err, response){
        if(err) console.log(err);
        console.log(response);
      })
    })
    .on("end", function(){
         console.log("done");
    });


stream.pipe(csvStream);
// .pipe(request.post('http://localhost:3000/api/chapters'));

// stream.pipe(csvStream).pipe(request({
//   url: 'http://localhost:3000/api/chapters',
//   method: 'POST',
//   body:
// });

// request.post(function(err, req){
//   stream.pipe(csvStream)
// });