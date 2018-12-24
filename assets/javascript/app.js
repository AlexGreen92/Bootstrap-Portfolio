$(document).ready(function(){
    loadMainPage();

    $('#aboutli').on('click',function(){
        loadMainPage();
    })
    $('#portfolio').on('click',function(){
        loadPortfolio();
    })
    $('#contacts').on('click',function(){
        loadContacts();
    })
})

loadMainPage = function(){
    $('#bg').html('')
    $('#bg').append(`
    <div class='row'>
        <div class='col'>
        <h1 id='aboutme'>About Me</h1>
        </div>
    </div>
<hr>
    <div class='row text-secondary' >
        <div class='col-4'>
            <img class="img-fluid"  src="assets/images/alex.jpg">
        </div>
        <div class='col-8'>
        <p class="lead">Who I am: Ambitious self-taught FullStack web developer with very high learning ability. Flexible and adaptive to new environments with a high desire to achieve. I’m extremely passionate about web development and design in all it’s forms and helping small businesses and artists build and improve their online presence.</p>
        <p class="lead">Education: Belarusian State Univercity 2009-2012 (Applied math and programming)</p>
        <p class="lead">Online courses : CodeCademy, Coursera , Khan Academy...</p>
        <p class="lead">Now: Northwestern Coding Bootcamp.</p>
        <p class="lead">Languages : English, Russian, Belorussian.</p>
        </div>
    </div>
    <div class='row text-secondary'>
        <div class='col'>
        <h3 id="core">Core Skills:</h3>
        <ul id="qua">
        <li class="lead">Outstanding knowledge of web programming languages including HTML CSS JavaScript</li>
        <li class="lead">Superior facility with Windows Linux UNIX and MAC operating systems</li>
        <li class="lead">Bootstrap / AngularJS / Responsive Web Design</li>
        <li class="lead">Experiense with node.js / npm / git / terminal</li>
        <li class="lead">Google Firebase DB development</li>
        <li class="lead">MongoDb / REST API / MEAN stack development</li>
        <li class="lead">CMS - WordPress</li>
        <li class="lead">Profound creative and analytical problem-solving and troubleshooting skills</li>
        <li class="lead">Exceptional organization and presentation abilities</li>
        <li class="lead">High verbal and written communication skills</li>
        </ul>
        </div>
    </div>
`)}

loadPortfolio = function(){
    $('#bg').html('');
    $('#bg').append(`
    <div class='row'>
        <div class='col'>
            <h1 id='aboutme'>Portfolio</h1>
        </div>
    </div>
    <hr>
    <div class='container'>
        <div class='row'>
            <div class='col-4'><a href="https://alexgreen92.github.io/unit-4-game/"><img class='img-fluid' src="assets/images/pokeball.png"><h3>Pokemon RPG</h3></a></div>
                <div class='col-4'><a href="https://alexgreen92.github.io/TriviaGame/"><img class='img-fluid' src="assets/images/trivia.png"><h3>Trivia game</h3></a></div>
            </div>
        <div class='row'>
            <div class='col-4'><a href="https://alexgreen92.github.io/homework6/"><img class='img-fluid' src="assets/images/giphy.png"><h3>Giphy Api App</h3></a></div>
                <div class='col-4'><a href="https://alexgreen92.github.io/RPS-Multiplayer/"><img class='img-fluid' src="assets/images/rps.png"><h3>Rock Paper Scissors Multiplayer</h3></a></div>
            </div>
        <div class='row'>
            <div class='col-4'><a href='https://veronicavera.github.io/GroupProjectFood/'><img class='img-fluid' src="assets/images/foodCocktail.png"><h3>Food/Cocktail Group Project</h3></a></div>
            <div class='col-4'><a href='https://desolate-island-91451.herokuapp.com/'><img class='img-fluid' src="assets/images/ff.png"><h3>Friend Finder App </h3></a></div>
            </div>
        </div>
    </div>
    `)
}
loadContacts = function(){
    $('#bg').html('');
    $('#bg').append(`
        <div class='row'>
            <div class='col'>
                <h1 id='aboutme'>Contact</h1>
            </div>
        </div>
                <hr>
            <form>
                <div class="form-group">
                    <label class='text-secondary'>Name</label>
                    <input class="form-control" type="text" value="John Smith">
                </div>
                <div class="form-group">
                    <label class='text-secondary'>Email</label>
                    <input class="form-control" type="email" value="example@gmail.com">
                </div>
                <div class="form-group">
                    <label class='text-secondary'>Message</label>
                    <textarea class="form-control" rows="10"></textarea>
                </div>
                    <button type="button" class='btn btn-info'>Submit</button>
            </form>    
    `)
}