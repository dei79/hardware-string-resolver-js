/*
 * Defines the pseudo class for the hardware string service
 */
function HardwareStringResolver() {}

/*
 * This method allows to resolve a given hardware string into a human readable name. If the requested key not in the
 * database the method return null
 */
HardwareStringResolver.try = function(hwstring) {

    var mapping_table = {
        "iphone1,1": "iPhone (1st generation)",
        "iphone1,2": "iPhone 3G",
        "iphone2,1": "iPhone 3GS",
        "iphone3,1": "iPhone 4",
        "iphone3,2": "iPhone 4",
        "iphone3,3": "iPhone 4",
        "iphone4,1": "iPhone 4S",
        "iphone5,1": "iPhone 5",
        "iphone5,2": "iPhone 5",
        "iphone5,3": "iPhone 5C",
        "iphone5,4": "iPhone 5C",
        "iphone6,1": "iPhone 5S",
        "iphone6,2": "iPhone 5S",

        "ipod1,1": "iPod (1st generation)",
        "ipod2,1": "iPod (2nd generation)",
        "ipod3,1": "iPod (3rd generation)",
        "ipod4,1": "iPod (4th generation)",
        "ipod5,1": "iPod (5th generation)",

        "ipad1,1": "iPad (1st generation)",
        "ipad2,1": "iPad 2",
        "ipad2,2": "iPad 2",
        "ipad2,3": "iPad 2",
        "ipad2,4": "iPad 2",
        "ipad3,1": "iPad (3rd generation)",
        "ipad3,2": "iPad (3rd generation)",
        "ipad3,3": "iPad (3rd generation)",
        "ipad3,4": "iPad (4th generation)",
        "ipad3,5": "iPad (4th generation)",
        "ipad3,6": "iPad (4th generation)",
        "ipad4,1": "iPad (4th generation)",
        "ipad4,2": "iPad (4th generation)",
        "ipad4,3": "iPad (4th generation)",

        "ipad2,5": "iPad Mini (1st generation)",
        "ipad2,6": "iPad Mini (1st generation)",
        "ipad2,7": "iPad Mini (1st generation)",
        "ipad4,4": "iPad Mini (1st generation)",
        "ipad4,5": "iPad Mini (1st generation)"
    };

    var humanReadableName = mapping_table[hwstring.toLowerCase()];
    if (humanReadableName == null ||humanReadableName === undefined)
        return null;
    else
        return humanReadableName;
};
