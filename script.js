<!--
    var message="Привет Диман!"
    var neonbasecolor="#990000"
    var neontextcolor="red"
    var neontextcolor2="#000080"
    var flashspeed=500
    var flashingletters=7
    var flashingletters2=6
    var flashpause=1000
    var n=0
    if (document.all||document.getElementById){
       document.write('<font color="'+neonbasecolor+'" size=+2>')
       for (m=0;m<message.length;m++)
    	document.write('<span id="neonlight'+m+'">'+message.charAt(m)+'</span>')
       document.write('</font>')
    }
    else
       document.write(message)
    function crossref(number){
       var crossobj=document.all? eval("document.all.neonlight"+number) : document.getElementById("neonlight"+number)
       return crossobj
    }
    function neon(){
       //Change all letters to base color
       if (n==0){
    	for (m=0;m<message.length;m++)
    	crossref(m).style.color=neonbasecolor
    	}
       crossref(n).style.color=neontextcolor
       if (n>flashingletters-1) crossref(n-flashingletters).style.color=neontextcolor2
       if (n>(flashingletters+flashingletters2)-1) crossref(n-flashingletters-flashingletters2).style.color=neonbasecolor
       if (n<message.length-1) n++
       else{
    	n=0
    	clearInterval(flashing)
    	setTimeout("beginneon()",flashpause)
    	return
    	}
    }
    function beginneon(){
       if (document.all||document.getElementById)
       flashing=setInterval("neon()",flashspeed)
    }
    beginneon()
>
<!--
  alert(123);
>
