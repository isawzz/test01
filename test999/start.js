window.onload = start;

async function start(){
	let dTable = mBy('dTable');
	mStyleX(dTable,{h:'100%',gap:10});
	mCenterCenterFlex(dTable);
	let styles = {matop:'-10%',h:'50%',bg:'grey',hpadding:20,rounding:10,fg:'pink',fz:80};
	let d=mDiv(dTable,styles,null,'HALLOOOO');
	mDiv(dTable,styles,null,'HALLOOOO');
	mDiv(dTable,styles,null,'HALLOOOO');

	let dParent = dTable.parentNode;
	mSidebar('hallo',dParent,)

}












