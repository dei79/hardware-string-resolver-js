# HardwareStringResolver.js

A JavaScript based mapping helper to convert hardware device model codes (e.g. iPad2,1) to their human readable names
(e.g. iPad 2).

The data is mainly sourced from the Wikipedia page [List of iOS devices](https://en.wikipedia.org/wiki/List_of_iOS_devices).
The project is derived from https://github.com/JoshTheGeek/node-ios-devices.

## Install
```
bower install hardware-string-resolver-js --save
```

## Using

Just use the try method of the HardwareStringResolver class to get the human readable name of a specific device code:

```javascript
alert(HardwareStringResolver.try('iPhone5,1'));
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :)

## License

[MIT License](https://github.com/lukehaas/css-loaders/blob/step2/LICENSE)
