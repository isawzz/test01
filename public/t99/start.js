window.onload = start;

async function start() {
	let dMain = DA.dMain = mBy('dMain');
	let dButtons = DA.dButtons = mPane(dMain, 't', { bg: 'random' });
	let bConnect = mButton('connect 3131', ()=>onClickConnect(3131), dButtons, { margin: 4 }, 'flat');
	let bConnect2 = mButton('connect 2121', ()=>onClickConnect(2121), dButtons, { margin: 4 }, 'flat');
	let bDisconnect = mButton('disconnect', onClickDisconnect, dButtons, { margin: 4 }, 'flat');

	//mClass(bConnect,"btn");//, "btn-primary");
	//mBy('b2').classList.add("btn btn-primary");
	// mStyleX(dTable,{h:'100vh',w:'100vw',box:true,matop:100,padding:10});
	// mFlexWrap(dTable);
	// let styles = {bg:'grey',h:100,box:true,hpadding:20,rounding:10,fg:'pink',fz:24};
	// let d=mDiv(dTable,styles,null,'HALLOOOO');
	// mLinebreak(dTable);

	// let dParent = dTable.parentNode;
	// let sidebar=mSidebar('hallo',dParent,{},'dSidebar');
	// sidebar.fOpen();

	// dTable.onclick=sidebar.fOpen;

}












