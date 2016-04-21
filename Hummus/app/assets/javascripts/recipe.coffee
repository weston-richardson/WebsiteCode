
$(document).bind 'keypress', (e) -> 
  if e.keyCode is 13 
    e.preventDefault()
    false

$(document).ready ->
  $('form').submit ->
    h(text).gsub(/;/, '\n')