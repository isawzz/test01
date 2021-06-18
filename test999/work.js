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
