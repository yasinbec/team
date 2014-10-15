team
====

Jquery Team Viewer v1.1

Demo = Check out www.jenaldesign.com/team

These is simple team viewer plugin for jquery

Add CSS & JS to your header
```
<script type="text/javascript" src="team.js"></script>
<link rel="stylesheet" type="text/css" href="team.css">
```

and Magic words

```
<script type="text/javascript">
    jQuery(document).ready( function($) {
		$('#team').team({
			margin		: 10,
			image		: 'circle',
			radius      : 10
		});		
	});
	
</script>
```

margin: between images. its important for slide calculation, default is 10
image: circle, border-radius
radius: default 10, if image is circle


<body> add the following template

     <ul id="team">
     	<li>
        	<a href="#" class="team-click">
                <div class="fade">
                        <div class="overlay-msg">
                            <h4></h4>
                            <p>Click to view</p>
                        </div>
                    <div class="team-photo"><img src="img/team-1.jpg"/></div>
                </div>
            </a>
            <div class="desc" style="display:none;">
                <h1>Mickey Blueyes
                    <span style="float:right">
                        <a href="#" class="close">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABUklEQVRIia2VbUrDQBCGnwMYT6CN7aWEFg8hSou9j0j1V2ytLZ6jRX+HegA/flQa6o/ZhbDuxyT2hSGwyT5vmJ2Zhbh6wBh4Ad6BHxMbs3YDnCUYXnWBB6AC9omogAmQa+EXwLcC7MYXMEjBRy3AblzF/vy/cBt9F95tmZZQfAKdusF94MO1ArYKrN9ZeA9/tayBDJhF4AVwDLx53lWYyhpHADNjMo3AF5H9I5CGiaVg6jEpzNpzYu8SpENTeX4EjszTwueKfSVI62sqozAmGfCk3LNtapCZvMcO/o/BpgF8buBak1JzyL6ca00WICO3CbyJyRBknvsabWUAsVK0Jq+edztq42ISAPg61A0ffA/cUlOOzHNNZWjiAzjB0eCABucu3Or6APDLENyqj8zzNmkJ/rmrDjLPNZf+DjnQUy28rhwZuUukK7cmSqSJhjg3l6tfxHOkwNN2E5oAAAAASUVORK5CYII="/>
                        </a>
                    </span>
                </h1>
                <span class="team-desc">
                    Web Developer
                    <br>
                    Nullam id ornare magna. Nullam eu nisi porttitor, aliquam mi sit amet, viverra diam. Maecenas vitae mollis est. Nunc nec lectus.
                    <br>
                    <br>
                    <img src="img/facebook.png"/>  <img src="img/twitter.png"/>  <img src="img/instagram.png"/>
                </span>
            </div>
        </li>
        
     	<li>
        	<a href="#" class="team-click">
                <div class="fade">
                        <div class="overlay-msg">
                            <h4></h4>
                            <p>Click to view</p>
                        </div>
                    <div class="team-photo"><img src="img/team-2.jpg"/></div>
                </div>
            </a>
            <div class="desc" style="display:none;">
                <h1>Jack Smith
                    <span style="float:right">
                        <a href="#" class="close">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABUklEQVRIia2VbUrDQBCGnwMYT6CN7aWEFg8hSou9j0j1V2ytLZ6jRX+HegA/flQa6o/ZhbDuxyT2hSGwyT5vmJ2Zhbh6wBh4Ad6BHxMbs3YDnCUYXnWBB6AC9omogAmQa+EXwLcC7MYXMEjBRy3AblzF/vy/cBt9F95tmZZQfAKdusF94MO1ArYKrN9ZeA9/tayBDJhF4AVwDLx53lWYyhpHADNjMo3AF5H9I5CGiaVg6jEpzNpzYu8SpENTeX4EjszTwueKfSVI62sqozAmGfCk3LNtapCZvMcO/o/BpgF8buBak1JzyL6ca00WICO3CbyJyRBknvsabWUAsVK0Jq+edztq42ISAPg61A0ffA/cUlOOzHNNZWjiAzjB0eCABucu3Or6APDLENyqj8zzNmkJ/rmrDjLPNZf+DjnQUy28rhwZuUukK7cmSqSJhjg3l6tfxHOkwNN2E5oAAAAASUVORK5CYII="/>
                        </a>
                    </span>
                </h1>
                <span class="team-desc">
                    CEO / Founder
                    <br>
                    Quisque at ornare sapien. In in blandit nunc. Maecenas lacus massa, lacinia a lectus viverra, vulputate vulputate lectus.
                    <br>
                    <br>
                    <img src="img/facebook.png"/>  <img src="img/twitter.png"/>  <img src="img/instagram.png"/>
                </span>
            </div>
        </li>
        </ul>


Enjoy and please let me know

Future Upgrades:

1) Depends on width horizontal scroll
2) Responsive design
3) Different Templates
