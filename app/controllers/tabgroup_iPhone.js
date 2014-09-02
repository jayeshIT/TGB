//--------------------------------------------Set Actibvetab-----------------------------------------------
Alloy.Globals.tabfunction = function(active) {
	$.tabgroup.setActiveTab(active);
};
//--------------------------------------------Open new window in tabgroup-----------------------------------------------
Alloy.Globals.openNewTab = function(TabWin) {
	$.tabgroup.activeTab.open(TabWin, {
		animated : true
	});
};
if (OS_ANDROID) {
	Titanium.include('/config.js');
	Alloy.Globals.current_page = 'win_map';
	//alert(Titanium.Platform.displayCaps.platformWidth);
	var tabgroup = new Class_Tabgroup({
		tabgroup : {
			left : 0,
			right : 0,
			top : 0,
			bottom : 0,
			backgroundColor : 'transparent'
		},
		bar : {
			/*height : "49dp",
			left : "0dp",
			right : "0dp",
			bottom : "0dp",*/
			//height : '100%',
			height : "49dp",
			left : '0%',
			right : '0%',
			bottom : '0%',
			backgroundImage : '/Bottom_tab.png'
		},
	}, null, Alloy.Globals.current_page, 'navtop');

	tabgroup.closeOtherTabgroup = function() {
		Ti.App.fireEvent('removeTabGroupWindow', {
			tabgroup : 'navbottom',
		});
	};
	tabgroup.addTab({
		o : {
			name : 'win_map',
			title : 'Map',
			off : '/images/map_DSE.png',
			on : '/images/map_SE.png',
		},
		active : "true",
		/*left : "0dp",
		 top : "0dp",
		 width : "80dp",
		 height : "49dp",*/
		top : '0%',
		left : '0%',
		//width : '16.66%',
		width : '25%',
		height : '100%',
		canScale : false,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.addTab({
		o : {
			name : 'win_list',
			title : 'Gallery',
			off : '/images/list_DSE.png',
			on : '/images/list_SE.png',
		},
		active : "false",
		/*left : "80dp",
		 top : "0dp",
		 width : "80dp",
		 height : "49dp",*/
		top : '0%',
		left : '25%',
		width : '25%',
		height : '100%',
		canScale : true,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.addTab({
		o : {
			name : 'win_favorite',
			title : 'Favourite',
			off : '/images/favourite_DSE.png',
			on : '/images/favourite_SE.png',
		},
		active : "false",
		/*left : "160dp",
		 top : "0dp",
		 width : "80dp",
		 height : "49dp",*/
		top : '0%',
		left : '50%',
		width : '25%',
		height : '100%',
		canScale : true,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.addTab({
		o : {
			name : 'win_setting',
			title : 'Setting',
			off : '/images/settings_DSE.png',
			on : '/images/settings_SE.png',
		},
		active : false,
		/*left : "240dp",
		 top : "0dp",
		 width : "80dp",
		 height : "49dp",*/
		top : '0%',
		left : '75%',
		width : '25%',
		height : '100%',
		canScale : true,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.create();
	$.container.add(tabgroup.tabgroup);
	$.container.addEventListener('close', function(e) {
	});
}
