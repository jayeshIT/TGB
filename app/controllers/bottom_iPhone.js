var settabgroupactivetab = function(evtaction) {
	switch(evtaction) {
	case "map":
		Alloy.Globals.tabfunction(0);
		$.map_btn.backgroundImage = "/images/map_SE.png";
		$.list_btn.backgroundImage = "/images/list_DSE.png";
		$.favorite_btn.backgroundImage = "/images/favourite_DSE.png";
		$.setting_btn.backgroundImage = "/images/settings_DSE.png";
		break;
	case "list":
		Alloy.Globals.tabfunction(1);
		$.map_btn.backgroundImage = "/images/map_DSE.png";
		$.list_btn.backgroundImage = "/images/list_SE.png";
		$.favorite_btn.backgroundImage = "/images/favourite_DSE.png";
		$.setting_btn.backgroundImage = "/images/settings_DSE.png";
		break;
	case "fav":
		Alloy.Globals.tabfunction(2);
		$.map_btn.backgroundImage = "/images/map_DSE.png";
		$.list_btn.backgroundImage = "/images/list_DSE.png";
		$.favorite_btn.backgroundImage = "/images/favourite_SE.png";
		$.setting_btn.backgroundImage = "/images/settings_DSE.png";
		break;
	case "setting":
		Alloy.Globals.tabfunction(3);
		$.map_btn.backgroundImage = "/images/map_DSE.png";
		$.list_btn.backgroundImage = "/images/list_DSE.png";
		$.favorite_btn.backgroundImage = "/images/favourite_DSE.png";
		$.setting_btn.backgroundImage = "/images/settings_SE.png";
	}
};
//--------------------------------------------- Map button click--------------------------------------------------
$.map_btn.addEventListener('click', function(e) {
	settabgroupactivetab("map");
});
//--------------------------------------------- List button click------------------------------------------------------
$.list_btn.addEventListener('click', function(e) {
	settabgroupactivetab("list");
});
//--------------------------------------------- Fav button click-------------------------------------------------------
$.favorite_btn.addEventListener('click', function(e) {
	settabgroupactivetab("fav");
});
//--------------------------------------------- Setting button click-------------------------------------------------------
$.setting_btn.addEventListener('click', function(e) {
	settabgroupactivetab("setting");
});
