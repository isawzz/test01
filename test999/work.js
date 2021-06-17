function mSidebar(title,dParent,styles,id,inner){

	function openNav() {
		document.getElementById("mySidebar").style.width = "250px";
		dParent.style.marginLeft = "250px";
	}
	
	function closeNav() {
		document.getElementById("mySidebar").style.width = "0";
		dParent.style.marginLeft= "0";
	}

	mClass(dParent,'w3sidebarParent');
	let elem = createElementFromHtml(`
	<div id="${id}" class="w3sidebar">
		<span>${title}</span>
	  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
	</div>	
	`);
	let dContent = mDiv(elem,{h:'100%'});
	mInsert(dParent.parentNode,elem);
	let item = {};
	iAdd(item,{div:elem,dContent:dContent,fOpen:openNav,fClose:closeNav});
	return item;
}
