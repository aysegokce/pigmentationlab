function startsingle(order){
    if (order ==1){
     document.getElementById("Home").style.display="none";
     document.getElementById("SingleMainDiv").style.display="block";   
    }
    else if (order ==2){
       document.getElementById("SingleMainDiv").style.display="none";
       document.getElementById("breedingSetup").style.display="block"; 
    }
    
    else if (order ==3){
        document.getElementById("breedingSetup_2").style.display="none";
        document.getElementById("phenotyping").style.display="block"; 
     }
     else if (order ==4){
        
        document.getElementById("chisquared").style.display="block"; 
     }
     else if (order ==5){
        document.getElementById("phenotyping").style.display="none";
        document.getElementById("sum1page").style.display="block"; 
        
      document.getElementById("phenores1").rows[1].cells[0].innerHTML = pred1;
      document.getElementById("phenores1").rows[1].cells[1].innerHTML = pred2;
     }

     else if (order ==6){
        document.getElementById("sum1page").style.display="none";
        document.getElementById("dihybrit1").style.display="block"; 
        
     }

     else if (order ==7){
        document.getElementById("dihybrit1").style.display="none";
        document.getElementById("dihybrit2").style.display="block"; 
     }
     else if (order ==8){
        document.getElementById("dihybrit2").style.display="none";
        document.getElementById("dihybrit3").style.display="block"; 
     }
     else if (order ==9){
        document.getElementById("dihybrit3").style.display="none";
        document.getElementById("dihybrit4").style.display="block"; 
     }





}

var gentype;
var img = "https://drive.google.com/uc?id=1jd125oml4rU3CRD_RLZUC-DMN46I1lKR";

function gentypeSelect(){
   var randomNum = Math.random();
   alert(randomNum)
   if (randomNum >= 0.5){
       gentype="het";
       document.getElementById("phenotypeimg1").src="https://drive.google.com/uc?id=1n4S9dNNrT5K9rEpurB2-0T8Wu0LCG8TW";
       img = "https://drive.google.com/uc?id=1N8_nMqgEtrG4gIN1w-l5wb5UtZRhwASg";

   }
   else {gentype="wt"}

}

var checkRadiomale ;

function SingleBreeding(){
    checkRadiomale =document.querySelector('input[name="male"]:checked');
    
    if (checkRadiomale.value=="male_a"){
        alert("You can't differentiate mitfa +/+ and mitfa +/- through setup with AB fish")

    }
    else if (checkRadiomale.value=="male_b"){
        alert("You will have 0.25 embryo with nacre phenotype. Is there any better option?")

    }
    else if (checkRadiomale.value=="male_c"){
        gentypeSelect();
        document.getElementById("breedingSetup").style.display="none";
        document.getElementById("breedingSetup_2").style.display="block";

    }
    else {
        alert("Please select one male fish" )
     }
    
}
 var exp1 = document.getElementById("exp1").value;
    var pred1 = document.getElementById("pred1").value;
    var exp2= document.getElementById("exp2").value;
    var pred2 = document.getElementById("pred2").value;

function chiSquared(order) {
    if (order == 1){
   
    
    var chi = Math.pow((exp1-pred1), 2)/exp1 + Math.pow((exp2-pred2), 2)/exp2
    
     if (chi > 3.84){  
     document.getElementById("demo").innerHTML=("Chi-squared = " + chi + " p value < 0.05");
     document.getElementById("demo_b").innerHTML=("Chi-squared = " + chi + " p value < 0.05");
      
  }
     else {
     document.getElementById("demo").innerHTML= ("Chi-squared = " + chi + " p value > 0.05");
     document.getElementById("demo_b").innerHTML= ("Chi-squared = " + chi + " p value > 0.05");
      
  }
     document.getElementById("calc1").style.display="none";
     document.getElementById("sum1").style.display = "block";
   }
}

function changeimg(){
    document.getElementById("phenotypeimg1").src=img;
    document.getElementById("imgchnage").style.display="none";
    document.getElementById("chisq").style.display="block";
}



function CheckGentype(){
    if (document.getElementById("EnterPredGenType").value != gentype){
        alert( "Predicted genotype is not correct. Calculate again")
    }
    else{
        alert (" Well done!!")
        document.getElementById("CheckGentypeID").style.display="none";
        document.getElementById("Double").style.display="block";

    }
}
