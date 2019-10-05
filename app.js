$(document).ready(function() {
  const select=[
    {"Asia":[
      {"India":["New Delhi","Mumbai","kashmir","Agra","Kochi","Jaipur"]},
      {"Pakistan":["Balochistan","Islamabad","Karachi","Lahore"]},
      {"Bangladesh":["Dhaka","Bangla1","Bangla2"]},
      {"Srilanka":["Colombo","Srilanka1","Srilanka2"]},
      {"Myanmar":["Burma","Myanmar1","Myanmar2"]},
      {"Iran":["Tehran","Iran1","Iran2"]}
    ]},
    {"Europe":[
      {"Uk":["London","Uk1","Uk2"]},
      {"Germany":["Berlin","Germany1","Germany2"]}
      ]
    }
  ]
  $region=[];
  select.forEach(function (element,index) {
    for(region in element){
      $region.push(region)
      console.log($region);
    }
  });
  $region.forEach(function (region) {
    $("#select1").append(`
      <option value="${region}">${region}</option>
    `);
    console.log(region);
  });

$("#select1").change(function(event) {
  regionValue=$(this).val();
});
    // select.forEach(function (value,index) {
    //   const option=document.createElement('option');
    //   option.setAttribute("value",value[index]);
    //   option.textContent=value;
    //   $("select").append(option);
    // });
    // console.log(hello);



  // console.log(select);
});
