// Get the value of "user" in "https://unifeat.github.io/single-member.html?user=some_value"
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  
  fetch('../json/team.json')
    .then(response => response.json())
    .then(data => {
          // Search the json file to find the element by unifeat_link
          var element = data.find(element => element["unifeat_link"] === params.user);
  
          if (element) {
            $('#member-section').append(
				'<div class="col-lg-5 col-md-6 align-self-md-center">'+
					'<div class="image-block">'+
						'<img src="images/people/' + element["photo"] + '" class="img-fluid" alt="' + element["name"] + '">'+
					'</div>'+
				'</div>'+
				'<div class="col-lg-7 col-md-6 align-self-center">'+
					'<div class="content-block">'+
						'<div class="name">'+
							'<h3>' + element["name"] + '</h3>'+
						'</div>'+
						'<div class="role">'+
							'<p>' + element["role"]  + '</p>'+
						'</div>'+
						'<div class="profession">'+
							'<p>' + element["position"] + '</p>'+
						'</div>'+
						'<div class="details">'+
							'<p>' + element["biography"] + '</p>'+
						'</div>'+
						'<div class="social-profiles">'+
							'<h5>Connect With Me</h5>'+
							'<ul class="list-inline social-list">'+
                                '<li class="list-inline-item">' + 
                                    '<a href="' + element["homepage"] + '" target="_blank" class=' + (element["homepage"].trim() == "#" ? "disabled" : "") + '><i class="fa fa-link"></i></a>' +
                                '</li>'+
                                '<li class="list-inline-item">' + 
                                    '<a href="' + element["github"] + '" target="_blank" class=' + (element["github"].trim() == "#" ? "disabled" : "") + '><i class="fa fa-github"></i></a>' +
                                '</li>'+
                                '<li class="list-inline-item">' + 
                                    '<a href="' + element["linkedin"] + '" target="_blank" class=' + (element["linkedin"].trim() == "#" ? "disabled" : "") + '><i class="fa fa-linkedin"></i></a>' +
                                '</li>'+
                                '<li class="list-inline-item">' + 
                                    '<a href="' + element["google_scholar"] + '" target="_blank" class=' + (element["google_scholar"].trim() == "#" ? "disabled" : "") + '><i class="fa fa-graduation-cap"></i></a>' +
                                '</li>'+
							'</ul>'+
						'</div>'+
					'</div>'+
				'</div>'
            );
          }
          else {
              window.location.href = "../404.html"
          }
    });