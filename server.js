var express = require('express'),
    exphbs  = require('express-handlebars'),
    http = require('http'),
    request = require('request'),
    bodyParser = require('body-parser'),
    app = express(),
    server = http.Server(app),
    community_info = {
      community_name: process.env.COMMUNITY_NAME,
      community_description: process.env.COMMUNITY_DESCRIPTION,
      slack_url: process.env.SLACK_URL,
      contact: process.env.CONTACT      
    };

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
    res.render('home', community_info);
});

app.get('/coc', function (req, res) {
    res.render('coc', community_info);
});

app.post('/invite', function(req, res) {
  if (req.body.email) {
    request.post({
        url: process.env.SLACK_URL + '/api/users.admin.invite',
        form: {
          email: req.body.email,
          token: process.env.SLACK_TOKEN,
          set_active: true
        }
      }, function(err, httpResponse, body) {
        if (err) { return res.send('Error:' + err); }
        body = JSON.parse(body);
        if (body.ok) {
          community_info.user_email = req.body.email;
            res.render('success.handlebars', community_info);
        } else {
          var error_message = body.error;
          switch(error_message){
            case 'already_invited':
            case 'sent_recently':
              res.render('recently-invited.handlebars', community_info);
              break;
            case 'already_in_team':
              res.render('already-member.handlebars', community_info);
              break;
            case 'invalid_email':
              res.render('invalid-email.handlebars', community_info);
            break;            
            default:
              community_info.error_message = error_message;
              res.render('invalid-email.handlebars', community_info);
            break;
          }
        }
      });
  } else {
    res.status(400).send('Don\'t forget your email!');
  }
});


app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3011);
app.set('ip', '127.0.0.1');


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is running on port ' + listener.address().port);
});
