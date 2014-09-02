//-----------------------------open Tabgroup for iPhone -------------------------------------------------
Alloy.Globals.openTabgroup_ios = function() {
	var verify = Alloy.createController('tabgroup_iPhone');
	verify.getView().open();
	var bottomtab = Alloy.createController('bottom_iPhone');
	bottomtab.getView().open();
};
alert(Titanium.Platform.displayCaps.platformWidth);
//-----------------------------open Tabgroup for Android-------------------------------------------------
Alloy.Globals.openTabgroup_android = function() {
	var verify = Alloy.createController('tabgroup_iPhone');
	verify.container.open();
};

if (OS_IOS) {
	Alloy.Globals.openTabgroup_ios();
} else {
	Ti.API.info('-----123');
	Alloy.Globals.openTabgroup_android();
}

