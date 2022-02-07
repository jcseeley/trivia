import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('button#trivia').click(function() {
    $('.card').show();
    $('#answer1').hide();
    $('#answer2').hide();
    $('#answer3').hide();
    $('#answer4').hide();
    
    let request = new XMLHttpRequest();
    const url = `https://opentdb.com/api.php?amount=4&difficulty=easy&type=boolean`;
    
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
        console.log(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('#question1').text(response.results[0].question);
      $('#answer1').text(response.results[0].correct_answer);
      $('#question2').text(response.results[1].question);
      $('#answer2').text(response.results[1].correct_answer);
      $('#question3').text(response.results[2].question);
      $('#answer3').text(response.results[2].correct_answer);
      $('#question4').text(response.results[3].question);
      $('#answer4').text(response.results[3].correct_answer);
    }
  });

  $('#question1').click(function() {
    $('#answer1').show();
  });
  $('#question2').click(function() {
    $('#answer2').show();
  });
  $('#question3').click(function() {
    $('#answer3').show();
  });
  $('#question4').click(function() {
    $('#answer4').show();
  });
});