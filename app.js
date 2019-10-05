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
  $city=[];

  select.forEach(function (element,index) {
    for(region in element){
      $region.push(region)
    }
  });
  $region.forEach(function (region) {
    $("#select1").append(`
      <option value="${region}">${region}</option>
    `);
  });


  $("#select1").change(function() {
    $country=[];
    $country1=[];
    $country2=[];
    regionValue=$(this).val();
    console.log($region);
    // console.log('reion-value',regionValue);
    //index of selectedvalue in region array, because the array position would be the same in select array
    $searchIndex = $region.indexOf(regionValue);
    //using the index to find the whole array of region, e.g. region of asia
    $searchedRegion = select[$searchIndex];
    $country=Array.from(Object.values($searchedRegion));
    $country.forEach(function (countryName,index) {
      $countryValues=Object.values(countryName);
      $countryValues.forEach(function (el,index) {
        $country1.push(Object.keys(el))
      })
    })
    // console.log($country1);
    $country1.forEach(function (el,index) {
        $country2.push(...el)
    })
    // console.log('country2',$country2);
    $("#select2").html('');
    $country2.forEach(function (item) {
      $("#select2").append(`
        <option value="${item}">${item}</option>
      `)
    })
  });

//changing the 3rd selector
$("#select2").change(function(event) {

  $countryValueSelected=$(this).val();
  $city1=[];
  $country[0].forEach(function (el) {
    $city.push(Array.from(Object.keys(el)))
  })
  // console.log($city.indexOf($countryValueSelected));
  $city.forEach(function (addCity) {
    $city1.push(...addCity);
  })
  console.log($city1);
});
});
