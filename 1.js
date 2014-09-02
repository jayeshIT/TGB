///--------------------------------------------Android tabgroup---------------------------------------------------------
if (OS_ANDROID) {
	Titanium.include('/config.js');
	Alloy.Globals.current_page = 'win_map';
	var tabgroup = new Class_Tabgroup({
		//var tabgroup = req_tab({
		tabgroup : {
			/*left : sc(0),
			 right : sc(0),
			 top : sc(0),
			 bottom : sc(0),*/
			left : 0,
			right : 0,
			top : 0,
			bottom : 0,
			backgroundColor : 'transparent'
		},
		bar : {
			/*height : sc(0),
			 left : sc(0),
			 right : sc(0),
			 bottom : sc(0),*/
			height : 74,
			left : 0,
			right : 0,
			bottom : 0,
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
		/*left : sc(120),
		 top : sc(0),
		 width : sc(120),
		 height : sc(74),*/
		left : 0,
		top : 0,
		//width : 120,
		width : 120,
		height : 74,
		canScale : false,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.addTab({
		o : {
			name : 'win_list',
			title : 'List',
			off : '/images/list_DSE.png',
			on : '/images/list_SE.png',
		},
		active : "false",
		/*left : sc(240),
		 top : sc(0),
		 width : sc(120),
		 height : sc(74),*/
		left : 120,
		top : 0,
		//width : 120,
		//height : 74,
		width : 120,
		height : 74,
		canScale : true,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.addTab({
		o : {
			name : 'win_favorite',
			title : 'Favorite',
			off : '/images/favourite_DSE.png',
			on : '/images/favourite_SE.png',
		},
		active : "false",
		left : 240,
		top : 0,
		//width : 120,
		//height : 74,
		width : 120,
		height : 74,
		/*left : sc(360),
		 top : sc(0),
		 width : sc(120),
		 height : sc(74),*/
		canScale : true,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.addTab({
		o : {
			name : "win_setting",
			title : "Setting",
			off : "/images/settings_DSE.png",
			on : "/images/settings_SE.png",
			basic_type : Alloy.Globals.checkOS
		},
		active : false,
		left : sc(288),
		top : sc(0),
		width : sc(96),
		height : sc(111),

		/*left : 360,
		 top : 0,
		 //width : 120,
		 //height : 74,
		 width : 120,
		 height : 74,*/
		canScale : true,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.create();
	$.container.add(tabgroup.tabgroup);
	$.container.addEventListener('close', function(e) {
		//win = null;
	});
}