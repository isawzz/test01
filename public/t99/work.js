function mPane(dParent,pos,styles,id){
	console.log(pos,pos[0])
	let d=mDiv(dParent,styles,id);
	if (nundef(pos)) pos='t';else pos = pos[0].toLowerCase();
	//docking
	let posStyle={display:'flex'};
	switch(pos){
		case 't': addKeys({w:'100%'},posStyle); break;
		case 'l': addKeys({h:'100%','flex-direction':'column'},posStyle); break;
		case 'b': addKeys({w:'100%',position:'absolute',bottom:0},posStyle); break;
		case 'r': addKeys({h:'100%','flex-direction':'column',position:'absolute',right:0},posStyle); break;

	}
	mStyleX(d,posStyle);
	return d;
}

function mSidebar(title, dParent, styles, id, inner) {

	let elem = createElementFromHtml(`
	<div id="${id}" class="w3sidebar">
		<h1>${title}</h1>
	  <a href="javascript:void(0)" class="closebtn">×</a>
	</div>	
	`);
	function openNav() {
		elem.style.width = "250px";
		dParent.style.marginLeft = "250px";
	}

	function closeNav() {
		elem.style.width = "0";
		dParent.style.marginLeft = "0";
	}

	elem.children[1].onclick = closeNav;
	mClass(dParent, 'w3sidebarParent');
	let dContent = mDiv(elem);
	mInsert(dParent.parentNode, elem);
	return { div: elem, dContent: dContent, fOpen: openNav, fClose: closeNav };
}
