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
        "iphone1,1": "iPhone",
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

        "ipod1,1": "iPod 1",
        "ipod2,1": "iPod 2",
        "ipod3,1": "iPod 3",
        "ipod4,1": "iPod 4",
        "ipod5,1": "iPod 5",

        "ipad1,1": "iPad",
        "ipad2,1": "iPad 2",
        "ipad2,2": "iPad 2",
        "ipad2,3": "iPad 2",
        "ipad2,4": "iPad 2",
        "ipad3,1": "iPad 3",
        "ipad3,2": "iPad 3",
        "ipad3,3": "iPad 3",
        "ipad3,4": "iPad 4",
        "ipad3,5": "iPad 4",
        "ipad3,6": "iPad 4",
        "ipad4,1": "iPad Air",
        "ipad4,2": "iPad Air",
        "ipad4,3": "iPad Air",

        "ipad2,5": "iPad Mini",
        "ipad2,6": "iPad Mini",
        "ipad2,7": "iPad Mini",
        "ipad4,4": "iPad Mini Retina",
        "ipad4,5": "iPad Mini Retina"
    };

    var humanReadableName = mapping_table[hwstring.toLowerCase()];
    if (humanReadableName == null ||humanReadableName === undefined)
        return null;
    else
        return humanReadableName;
};
