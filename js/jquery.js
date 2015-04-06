$(document).ready(function(){
  //input on focus if the field is empty
  $( "input" ).focus(function() {
      if(this.value.length==0 && this.required==true)
        {
          $(this).siblings("p").hide();
          $(this).parent().append("<p>Enter "+this.id+"</p>");
          if(this.id=="confirm")  {$(this).siblings("p").hide();$(this).parent().append("<p>"+this.id+" "+this.type+"</p>");}
          $( this ).addClass("foc1");

        }
        else if(this.type=='radio') {$(this).siblings("p").hide();$(this).siblings().removeClass("foc1");}
          else if(this.value.length>=0){$(this).addClass("foc1");}

  });
  //inputs on blur
  $( "input" ).blur(function() {
      $( this ).removeClass('foc');
      $( this ).removeClass("foc1");
      if(this,type=="radio"){}
      else if(this.value.length==0)
        {
          $(this).siblings("p").hide();
          $(this).parent().append("<p>Enter "+this.id+"</p>");
          if(this.id=="confirm")  {$(this).siblings("p").hide();$(this).parent().append("<p>"+this.id+" "+this.type+"</p>");}

        }
  });
//textboxes validation on enter
  $("input:text").keyup(function(){
    var l= (this).value.length;
    var fn = /^[A-Za-z0-9 ]{1,8}$/ ;
    var num=/^[0-9]{1,30}$/;
    var re=this.required;
    var mil=$(this).attr("min");
    var mal=$(this).attr("max");
    var tmp= $(this).attr("class");
    var pos=(tmp.indexOf('number'));
    if($(this).attr("required") && pos>=0)//it will consider the min and max lengths of a phone number
    {
      if(mil==null) mil=10;
      if(mal==null) mal=30;
      var p =$(this).val();
      var l =p.length;
      if(l==0){$(this).siblings("p").hide();$(this).parent().append("<p>Fill the Number!</p>");}
      else if(num.test(p)==false){$(this).siblings("p").hide();$(this).parent().append("<p>Invalid characters</p>");}
      else if(l<mil){$(this).siblings("p").hide();$(this).parent().append("<p>should be minimum "+mil+" chars</p>");}
      else if(l>mal){$(this).siblings("p").hide();$(this).parent().append("<p>cannot be more than "+mal+" chars</p>");}
      else if(l<=mal && l>=mil && num.test(p)==true){$(this).siblings("p").hide();$(this).parent().append("<p>ok</p>");}
      else if(l<=mal && l>=mil && num.test(p)==false){$(this).siblings("p").hide();$(this).parent().append("<p>invalid characters</p>");}

   }else if($(this).attr("required") && pos>=-1)
    {
      if(mil==null) mil=6;
      if(mal==null) mal=10;
      var p =$(this).val();
      var l =p.length;
      if(l==0){$(this).siblings("p").hide();$(this).parent().append("<p>Fill the blank!</p>");}
      else if(l<mil){$(this).siblings("p").hide();$(this).parent().append("<p>should be minimum "+mil+" chars</p>");}
      else if(l>mal){$(this).siblings("p").hide();$(this).parent().append("<p>cannot be more than "+mal+" chars</p>");}
      else if(l<=mal && l>=mil && fn.test(p)==true){$(this).siblings("p").hide();$(this).parent().append("<p>ok</p>");}
      else if(l<=mal && l>=mil && fn.test(p)==false){$(this).siblings("p").hide();$(this).parent().append("<p>Invalid characters</p>");}

     }
  });
  //email validation on enter
  $('input[type="email"]').on('keyup',function(){ // When blur
    var l=(this).value.length;
    var ckem=  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i    ;
    var re=this.required;
    if(re==true){//taking the values
    if(l==0){$(this).siblings("p").hide();$(this).parent().append("<p>Email Cannot be blank!</p>");} 
      else if(l>0 && ckem.test(this.value)==false){$(this).siblings("p").hide();$(this).parent().append("<p>Doesnt look like a email!</p>");} 
        else if(ckem.test(this.value)==true){$(this).siblings("p").hide();$(this).parent().append("<p>ok</p>");}
    }
    });
   //password validation on enter
    $("input:password:first").keyup(function(){
      var l= (this).value.length;
          var ckpd =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/
      if(l==0){$(this).siblings("p").hide();$(this).parent().append("<p>Password field not be empty!</p>");} 
      else if(l>0 && ckpd.test(this.value)!=true){$(this).siblings("p").hide();$(this).parent().append("<p>Password must be 6 char's min</p>");} 
      else if(l>0 && ckpd.test(this.value)==true){$(this).siblings("p").hide();$(this).parent().append("<p>ok</p>");}
    }); 
    //password confirmation  validation on enter
    $("input:password:last").keyup(function(){
      var p= (this).value.length;
          var result= $(this).parent().parent().find('input:password:first').val();
            var ckpd =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;//here the checking of password will takes place
          var n=result.indexOf(this.value);
          if(p==0){$(this).siblings("p").hide();$(this).parent().append("<p>Password should be confirmed!</p>");}
          else if(n==-1){$(this).siblings("p").hide();$(this).parent().append("<p>Password Didnt match</p>");}
            else if(n!=0 && p==result.length || ckpd.test(this.value)!=true){$(this).siblings("p").hide();$(this).parent().append("<p>Invalid passwords!</p>");}
              else if(n==0 && p==result.length && ckpd.test(this.value)==true){$(this).siblings("p").hide();$(this).parent().append("<p>ok</p>");}
    });   
    
    $("button:submit").click(function(){ 
      return validate(); 
    });//end of submit button
     $("input:submit").click(function(){ 
      return validate(); 
    });//end of submit button
   
function validate(){
        var flag=1;var respd;
        var rb=0,rn=0,rc=0,cb=0,cc=0,cn=0;
        $(this).removeClass("animate");
        var cknum= /^[0-9]{1,30}$///checking number
        var ckfn = /^[A-Za-z0-9]{1,30}$///checking name
        var ckem=  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i //checking email   
        var ckpd =  /^[A-Za-z0-9!@#$%^&*()_]{1,20}$///checking password
        var ckun= /^[A-Za-z0-9]{6,20}/;
        $("input,select,textarea").each(function(){
            
            if(this.type=="text" && this.required==true){
               if($(this).attr("class")=="number"){
                var p=this.value;
                var l=p.length;
                var mal= this.max;
                var mil=this.min;
                if(mal=="") mal=30;
                if(mil=="") mil=10;
                if(l<mil){this.focus(),flag=0;return false;}
                else if(l>mal){this.focus();flag=0;return false;}
                else if(l>=mil && l<=mal && cknum.test(p)==false ){this.focus();flag=0;return false;}
               }else{
               var mal=this.max;
               var mil=this.min;
               if(mal=="") mal=10;
               if(mil=="") mil=3;
               var p=this.value;
               var l=p.length;
               if(l<mil){this.focus();flag=0;return false;}
               else if(l>mal){this.focus();flag=0;return false;}
               else if(l>=mil && l<=mal && ckfn.test(p)==false){alert("invalid");flag=0;return false;}
              }
          }
          else if(this.type=="email" && this.required==true){
                  var p=this.value;
                  var l=p.length;//email verification takes place
                  if(l==0){this.focus();flag=0;return false;}
                  else if(l>0 && ckem.test(p)==false){this.focus();flag=0;return false;}
                }
          else if(this.type=="password" && $(this).attr("class")=="confirm" ){  //password confirmation
                        if(this.value.length<respd.length){this.focus();flag=0;return false;}
                        if(this.value.length==respd.length && this.value!=respd){this.focus();flag=0;return false;}
                }
          else if(this.type=="password"){
                  p=this.value;
                  l=p.length;
                  var mal=this.max;
                  var mil=this.min;
                  if(mal=="") mal=10;
                  if(mil=="") mil=6;
                  if(l<mil){this.focus();flag=0;return false;}
                  else if(l>mal){this.focus();flag=0;return false;}
                  else if(l>=mil && l<=mal && ckpd.test(p)==false){this.focus();flag=0;return false;}
                  respd=p;
                }   
          else if(this.type=="radio"){
                  var par = $(this).parent();
                  var cl=$(par).children("input").length;
                  var n =$(this).parent().children("input:radio:checked").length;
                  if(cl==(cl-n)){this.focus();$(this).addClass("foc1");flag=0;return false;}
               } 
          else if(this.type=="checkbox"){
                  var par = $(this).parent();
                  var cl=$(par).children("input").length;
                  var n =$(this).parent().children("input:checkbox:checked").length;
                  if(cl==(cl-n)){this.focus();$(this).addClass("foc1");flag=0;return false;}
               }
          else  if(this.type=="select-one"){
                  this.focus();
                  var ind=$(this).parent().find("select option:selected").attr("value");
                  if(ind==""){flag=0;this.focus();$(this).addClass("foc1");return false;}
                }            
        });
        if(flag==0)return false;
        else if(flag==1){alert("Registration success");return true;}//when the submit button clicks it will show alert box with sucess and reset will be done  
    }
//end of validate function



});
