import React from 'react';

function Title() {
  return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Eagle icon</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Gallery <span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a href="" className="nav-link">Comissions </a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Title
