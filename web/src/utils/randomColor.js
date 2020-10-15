export default function randomColor(){
  let colors = ['#FF9F69', '#E795DE', '#E2AD5C', '#8692FF'];

  let rand = Math.floor(Math.random()*colors.length);

  return colors[rand];
}