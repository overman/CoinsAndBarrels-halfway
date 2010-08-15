dojo.provide('welcomeAndCreditsData');

dojo.declare('welcomeAndCreditsData', null, {
    constructor: function() {
        this.welcomeCommands = this._getWelcomeCommands();
        this.welcomeText = this._getWelcomeText();
        this.creditsData = this._getCreditsData();
    },
    _getWelcomeCommands: function() {
    
        //no terminate statments so callback can be added later.    //should we say anything about if people have thier speakers backwards??
        //offer sound inversion?
        var data = [];
        data[0] = ['s', "Welcome to Coins and Barrels! You can skip the instructions by closing this window or pressing escape."];
		data[1] = ['s', "The goal is to collect as many coins as possible while avoiding barrels."];
		data[2] = ['s', "A coin on the left sounds like this."];
		data[3] = ['p', "sounds/coinL"];
		data[4] = ['s', "A coin on the right sounds like this."];
		data[5] = ['p', "sounds/coinR"];
		data[6] = ['s', "If you hear a coin on the left side, press left. If you hear a coin on the right, then press right."];
		data[7] = ['s', "Try to avoid the barrels. A barrel on the left side sounds like this."];
		data[8] = ['p', "sounds/barrelL"];
		data[9] = ['s', "A barrel on the right side sounds like this."];
		data[10] = ['p', "sounds/barrelR"];
		data[11] = ['s', "Points are lost if you hit a barrel or if you do not hit a coin. Have fun."];
        
        return data;
    },
    _getWelcomeText: function() {
        data = "&nbsp &nbsp &nbsp &nbsp &nbsp Welcome to Coins and Barrels! You can skip the instructions by closing this window or pressing escape. The goal is to collect as many coins as possible while avoiding barrels.\
        Listen for instructions to learn what each sound means. If you hear a coin on the left side, press left. \
        If you hear a coin on the right, then press right.Try to avoid the barrels. Points are lost if you hit a \
        barrel or if you do not hit a coin. Have fun.";
        return data;
    },
    
    _getCreditsData: function() {
        data = "<h2>Sound samples from www.freesound.org:</h2>\
        <h3>August 15, 2010</h3>\
            <div style=\"padding-left: 20px; width: 400px\">\
                <h4>By <a href=\"http://www.freesound.org/usersViewSingle.php?id=14771\" target=\"_blank\">sandyrb</a></h4>\
                    <p>\
                        <a class=\"fileLink\" target=\"_blank\" href=\"http://www.freesound.org/samplesViewSingle.php?id=95252\">RAPTUROUS APPLAUSE.wav</a><br />\
                    </p>\
            </div>\
            <h3>June 21, 2010</h3>\
            <div style=\"padding-left: 20px; width: 400px\">\
                <h4>By <a href=\"http://www.freesound.org/usersViewSingle.php?id=350482\" target=\"_blank\">primordiality</a></h4>\
                    <p>\
                        <a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=78822\" target=\"_blank\">Fanfare 1.wav</a><br />\
                        <a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=78824\" target=\"_blank\">Fanfare 3.wav</a><br />\
                        <a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=78825\" target=\"_blank\">Fanfare 4.wav</a><br />\
                    </p>\
                <h4>By <a href=\"http://www.freesound.org/usersViewSingle.php?id=43834\" target=\"_blank\">sagetyrtle</a></h4>\
                    <p>\
                        <a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=36161\" target=\"_blank\">bells2.wav</a><br />\
                    </p>\
                <h4>By <a href=\"http://www.freesound.org/usersViewSingle.php?id=35187\" target=\"_blank\">jobro</a></h4>\
                    <p>\
                    <a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=60443\" target=\"_blank\">tada1.wav</a><br />\
                    </p>\
                <h4>By <a href=\"http://www.freesound.org/usersViewSingle.php?id=145749\" target=\"_blank\">tobyk</a></h4>\
                    <p>\
                        <a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=26196\" target=\"_blank\">Contemporary Fanfare.aiff</a><br />\
                    </p>\
                <h4>By <a href=\"http://www.freesound.org/usersViewSingle.php?id=43485\" target=\"_blank\">wanna73</a></h4>\
                    <p>\
                        <a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=20784\" target=\"_blank\">Crowd_cheering_football_01.wav</a><br />\
                    </p>\
            </div>\
		    <h3>June 18, 2010</h3>\
            <div style=\"padding-left: 20px; width: 400px\">\
			    <h4>By <a href=\"http://www.freesound.org/usersViewSingle.php?id=533680\" target=\"_blank\">guitarguy1985</a></h4>\
                    <p>\
                        <a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=57893\" target=\"_blank\">dun.wav</a><br />\
                    </p>\
			    <h4>By <a href=\"http://www.freesound.org/usersViewSingle.php?id=321967\" target=\"_blank\">Robinhood76</a></h4>\
                    <p>\
                         <a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=62176\" target=\"_blank\">00504 brass fanfare 4.wav</a><br />\
                    </p>\
                <h4>By <a href=\"http://www.freesound.org/usersViewSingle.php?id=145749\" target=\"_blank\">tobyk</a></h4>\
                    <p>\
                        <a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=26198\" target=\"_blank\">Medieval Fanfare.aiff</a><br />\
                    </p>\
               <h4>By <a href=\"http://www.freesound.org/usersViewSingle.php?id=193786\" target=\"_blank\">oniwe</a></h4>\
                    <p>\
					     <a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=32868\" target=\"_blank\">smallAudienceLaughsThenClaps.wav</a><br />\
                    </p>\
                <h4>By <a href=\"http://www.freesound.org/usersViewSingle.php?id=230160\" target=\"_blank\">lonemonk</a></h4>\
                    <p>\
					     <a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=31169\" target=\"_blank\">Approx 850 - Enthusiast Audience.wav</a><br />\
                    </p>\
            </div>\
            <h3>June 17, 2010</h3>\
            <div style=\"padding-left: 20px; width: 400px;\">\
                    <h4>By <a href=\"http://www.freesound.org/usersViewSingle.php?id=385976\" target=\"_blank\">sarana</a></h4>\
						<p>\
							<a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=83182\" target=\"_blank\">metalbarrelkick_04.wav</a><br>\
                        </p>\
                    <h4>By <a href=\"http://www.freesound.org/usersViewSingle.php?id=1604772\" target=\"_blank\">TheDJoe93</a></h4>\
						<p>\
                            <a class=\"fileLink\" href=\"http://www.freesound.org/samplesViewSingle.php?id=97373\" target=\"_blank\">coin.wav</a><br>\
                        </p>\
            </div>";
        return data;
    }
});
