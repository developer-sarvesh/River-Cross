var right=true;
var count=1;
var z,add,rem;
var lion_l=0;
var sheep_l=0;
var lion_r=3;
var sheep_r=3;

function play() {

  if(sheep_l==3)
  {
    alert("Congrats! You Win");
  }
  else if(lion_r > sheep_r && lion_l > sheep_l )
  {
    alert("Sorry! You Loose");
  }
}
function moveBoat() {
  if(right==true && count!=1)
  {
    right=false;
    document.getElementById("b_c").style.right="70%";
    play();
  }
  else if(right==false && count!=1)
  {
    right=true;
    document.getElementById("b_c").style.right="5%";
    play();
  }
  else
  {
    alert("Invalid Boat Move");
  }
}

function add_rem(x,y) {
  rem = document.getElementById(x);
  rem.parentNode.removeChild(rem);

  add = document.createElement("IMG");
  add.setAttribute("src", `images/`+y+`.png`);
  add.setAttribute("id",x);
}

function move(x,y) {
  if(count==1 || count==2)
  {
    z="b_c";
    count++;
    add_rem(x,y);

    add.setAttribute("onclick", `remove("`+x+`","`+y+`")`);
    add.setAttribute("class", "icon on_boat");
    document.getElementById(z).insertBefore(add,document.getElementById("b"));
  }
  else
  {
    alert("Only 2 Allowed on Boat");
  }
}

function remove(x,y) {
  if(right==true)
  {
    z="right";
    if(y=="lion")
    {
      lion_r=lion_r+1;
      lion_l=lion_l-1;

      console.log("right lion");
      console.log("ll"+lion_l);
      console.log("lr"+lion_r);
      console.log("sl"+sheep_l);
      console.log("sr"+sheep_r);
    }
    else
    {
      sheep_r=sheep_r+1;
      sheep_l=sheep_l-1;

      console.log("right sheep");
      console.log("ll"+lion_l);
      console.log("lr"+lion_r);
      console.log("sl"+sheep_l);
      console.log("sr"+sheep_r);
    }
  }
  else {
    z="left";
    if(y=="lion")
    {
      lion_r=lion_r-1;
      lion_l=lion_l+1;

      console.log("left lion");
      console.log("ll"+lion_l);
      console.log("lr"+lion_r);
      console.log("sl"+sheep_l);
      console.log("sr"+sheep_r);
    }
    else
    {
      sheep_r=sheep_r-1;
      sheep_l=sheep_l+1;

      console.log("left sheep");
      console.log("ll"+lion_l);
      console.log("lr"+lion_r);
      console.log("sl"+sheep_l);
      console.log("sr"+sheep_r);
    }
  }
  count=count-1;
  add_rem(x,y);
  add.setAttribute("onclick", `move("`+x+`","`+y+`")`);
  add.setAttribute("class", "icon");
  document.getElementById(z).appendChild(add);
}
