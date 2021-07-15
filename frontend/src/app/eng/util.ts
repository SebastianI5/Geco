function pad(x, n){
  let result = x + '';
  while(result.length < n){
    result = '0' + result;
  }
  return result;
}

 export function timestamp() {
  let d = new Date();
  return d.getFullYear()
  + pad(d.getMonth() + 1, 2)
  + pad(d.getDate(), 2)
  + '-'
  + pad(d.getHours(), 2)
  + pad(d.getMinutes(), 2);
}


export function default_render(key){
  return (row) => row[key]
}



export function is_set(x){
  if(x == null){
    return false;
  }

  if(x == undefined){
    return false;
  }

  if(x.toString().trim().length == 0){
    return false;
  }

  return true;
}

export function clean(o){
  let result = {};
  Object.keys(o).forEach(e => {if(is_set(o[e])) result[e] = o[e].trim? o[e].trim() : o[e]});
  Object.keys(o).forEach(e => {if(o[e] instanceof Date) result[e] = o[e].toISOString()});
  return result;
}

export function end_of_day(end){
  if (!end) return
  if (!(end instanceof Date)) end = new Date(end);
  end.setHours(23);
  end.setMinutes(59);
  end.setSeconds(59);

  return end;
}



export function screen_size(){
  return window.screen.width > 800 ? "" : "xs"
}
