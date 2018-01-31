//图书分类js


function show(ind){
	document.getElementsByClassName('submenu')[ind].style.display='block';
}
function hide(ind){
		document.getElementsByClassName('submenu')[ind].style.display='none';
}


//function show(ind){
//	document.getElementsByClassName('submenu')[ind].style.top=(((ind-(ind%3))/3)*210)+307+'px';
//	if(ind%3==0){
//		document.getElementsByClassName('submenu')[ind].style.left=(ind%3)*300+'px';
//	}else if(ind%3==1){
//		document.getElementsByClassName('submenu')[ind].style.left=(ind%3)*300+171+'px';
//	}else{
//		document.getElementsByClassName('submenu')[ind].style.left=(ind%3)*300+171+171+'px';
//	}
//		document.getElementsByClassName('submenu')[ind].style.display='block';
//}
//function hide(ind){
//		document.getElementsByClassName('submenu')[ind].style.display='none';
//}