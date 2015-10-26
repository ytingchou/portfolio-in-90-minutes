var skills = '<div class="col-md-3"><img src="./img/%data%.png" alt="Photoshop" class="img-responsive img-circle"></div>';

var skills_array = ['Photoshop', 'Illustrator', 'Dreamweaver', 'Flash', 'Sketch', 'After+Effects', 'Axure'];

var skills_tag = '';

for (var i = 0; i < skills_array.length; i++) {
  skills_tag = skills.replace('%data%', skills_array[i]);
  $('.skills-section-images').append(skills_tag);
}

var experience = '<li><h4>%company% &nbsp; &nbsp; &nbsp; ( %work_date% )</h4><h5>%work_info%</h5></li><hr>';

var experience_array = [
  {
    name: 'Company Name',
    years: '2012-2015',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'Company Name',
    years: '2009-2012',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'Company Name',
    years: '2008-2009',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  }
];

var experience_tag = '';

for (var i = 0; i < experience_array.length; i++) {
  experience_tag = experience.replace('%company%', experience_array[i]['name']);
  experience_tag = experience_tag.replace('%work_date%', experience_array[i]['years']);
  experience_tag = experience_tag.replace('%work_info%', experience_array[i]['info']);
  $('.experience-section-info').append(experience_tag);
}

var projects = '<li><h3>%project_name%</h3><div class="row"><div class="col-md-3"><img src="./img/%project_image%.png" alt="project-images" class="img-responsive"></div><div class="col-md-9"><h3>Language(s): %project_language%</h3><h5>%project_info%</h5></div></div></li><br><hr>';

var projects_array = [
  {
    name: 'Change My Voice',
    img: '197x148',
    language: 'Swift',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'Grapher',
    img: '197x148',
    language: 'Python',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'Gaming Website',
    img: '197x148',
    language: 'PHP',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  }
];

var projects_tag = '';

for (var i = 0; i < projects_array.length; i++) {
  projects_tag = projects.replace('%project_name%', projects_array[i]['name']);
  projects_tag = projects_tag.replace('%project_image%', projects_array[i]['img']);
  projects_tag = projects_tag.replace('%project_language%', projects_array[i]['language']);
  projects_tag = projects_tag.replace('%project_info%', projects_array[i]['info']);
  $('.projects-section-info').append(projects_tag);
}