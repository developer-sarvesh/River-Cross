var right=true;
var boat="right";
var count=1;
var add,rem;
var lion_l=0;
var sheep_l=0;
var lion_r=3;
var sheep_r=3;

function play() {
  if(sheep_l==3)
  {
    alert("Congrats! You Win");
  }
  else if(sheep_r!=0 && lion_r > sheep_r )
  {
    alert("Sorry! You Loose R");
  }
  else if(sheep_l!=0 && lion_l > sheep_l)
  {
    alert("Sorry! You Loose L");

  }
}

function moveBoat() {
  if(right==true && count>1 && count<=3)
  {
    document.getElementById("btn").disabled = true;
    var timeOut=setTimeout(function() {
                                        document.getElementById("btn").disabled = false;
                                      },2000
                          );
    right=false;
    boat="left";
    document.getElementById("b_c").style.right="70%";
    play();
  }
  else if(right==false && count>1 && count<=3)
  {
    document.getElementById("btn").disabled = true;
    var timeOut=setTimeout(function() {
                                        document.getElementById("btn").disabled = false;
                                      },2000
                          );
    right=true;
    boat="right";
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

function move(x,y,z) {
  if(count>=1 && count<3 && z==boat)
  {
    if(right==true)
    {
      z="left";
      if(y=="lion")
      {
        lion_r=lion_r-1;
      }
      else
      {
        sheep_r=sheep_r-1;
      }
    }
    else
    {
      z="right";
      if(y=="lion")
      {
        lion_l=lion_l-1;
      }
      else
      {
        sheep_l=sheep_l-1;
      }
    }
    count=count+1;
    add_rem(x,y);
    add.setAttribute("onclick", `remove("`+x+`","`+y+`","`+z+`")`);
    add.setAttribute("class", "icon on_boat");
    document.getElementById("b_c").insertBefore(add,document.getElementById("b"));
    display(y,z);
  }
  else
  {
    alert("Only 2 Allowed or Invalid Boat Move");
  }
}

function remove(x,y,z) {
  if(right==true)
  {
    z="right";
    if(y=="lion")
    {
      lion_r=lion_r+1;
    }
    else
    {
      sheep_r=sheep_r+1;
    }
  }
  else {
    z="left";
    if(y=="lion")
    {
      lion_l=lion_l+1;
    }
    else
    {
      sheep_l=sheep_l+1;
    }
  }
  count=count-1;
  add_rem(x,y);
  add.setAttribute("onclick", `move("`+x+`","`+y+`","`+z+`")`);
  add.setAttribute("class", "icon");
  document.getElementById(z).appendChild(add);
  display(y,z);
}
function display(y,z)
{
  console.log("---");
  //console.log(y+"right-"+right+"z-"+z+" "+count);
  console.log("ll "+lion_l+" lr "+lion_r);
  console.log("sl "+sheep_l+" sr "+sheep_r);
}
