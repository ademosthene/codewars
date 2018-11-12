const howManyDalmatians = (number) => {
  
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
  if(number <= 10){
    return dogs[0]
  }else if(number <= 50){
    return dogs[1]
  }else if(number <= 100){
    return dogs[2]
  }else if(number <= 101){
    return dogs[3]
  }
}
