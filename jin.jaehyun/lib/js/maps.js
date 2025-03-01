const makeMap = async (target, center={ lat: 40.518884, lng: -111.950963 }) => {
    await checkData(()=>window.google);

    let map_el = $(target);
    
    if(!map_el.data("map")) map_el.data({
        "map": new google.maps.Map(map_el[0], {
          center,
          zoom: 14,
          disableDefaultUI: true,
       })        
    });

    return map_el;
}


const makeMarkers = (map_el, map_locs=[]) => {
   let {map,markers} = map_el.data();

   if(markers) markers.forEach(m=>m.setMap(null));

   markers = [];

   map_locs.forEach(l=>{
      let m = new google.maps.Marker({
         position: l,
         map,
         icon: {
            url: l.icon + '#custom_marker',
            scaledSize: {
               width:40,
               height:40,
            }
         }
      });
      markers.push(m);
   });

   map_el.data({markers});
}
