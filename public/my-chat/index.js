$(function() {

  let twilioChatClient;

  console.log('running index.js');

  $.getJSON('/token', {
    device: 'browser'
  }, function(data) {
    console.log(`token: ${data.token}`);
    Twilio.Chat.Client.create(data.token).then((client) => {
      console.log('Create chat client');
      twilioChatClient = client;
    }).catch(e => {
      console.error(e);
    });
  });

});