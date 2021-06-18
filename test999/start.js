window.onload = start;

async function start(){
	let dTable = mBy('dTable');
	mStyleX(dTable,{h:'100vh',w:'100vw',box:true,padding:10});
	mFlexWrap(dTable);
	let styles = {bg:'grey',h:100,box:true,hpadding:20,rounding:10,fg:'pink',fz:24};
	let d=mDiv(dTable,styles,null,'HALLOOOO');
	mLinebreak(dTable);

	let dParent = dTable.parentNode;
	let sidebar=mSidebar('hallo',dParent,{},'dSidebar');
	sidebar.fOpen();

	dTable.onclick=sidebar.fOpen;
}












