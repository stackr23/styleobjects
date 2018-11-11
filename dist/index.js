"use strict";//
//    _____________  ____    __________  ____      _________________________
//   / ___/_  __/\ \/ / /   / ____/ __ \/ __ )    / / ____/ ____/_  __/ ___/
//   \__ \ / /    \  / /   / __/ / / / / __  |_  / / __/ / /     / /  \__ \
//  ___/ // /     / / /___/ /___/ /_/ / /_/ / /_/ / /___/ /___  / /  ___/ /
// /____//_/     /_/_____/_____/\____/_____/\____/_____/\____/ /_/  /____/
//
//  special thanks to Raphael Amorim (@raphamorim) for the core concept,
//  because this is basicly a remake of nativeCSS (https://github.com/raphamorim/native-css)
//
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _fs=_interopRequireDefault(require("fs")),_css=_interopRequireDefault(require("css")),_fetch=require("fetch"),_transformRules=_interopRequireDefault(require("./lib/transformRules.js")),_transformToNestedDomStyleObjects=_interopRequireDefault(require("./lib/transformToNestedDomStyleObjects.js"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var styleObjects=/*#__PURE__*/function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"indentObject",value:function d(a,b){var c=this;return JSON.stringify(a,null,b||0)}},{key:"nameGenerator",value:function b(a){return a=a.replace(/\s\s+/g," "),a=a.replace(/[^a-zA-Z0-9]/g,"_"),a=a.replace(/^_+/g,""),a=a.replace(/_+$/g,""),a}},{key:"mediaNameGenerator",value:function b(a){return"@media "+a}},{key:"transform",value:function c(a){var b={};return(0,_transformRules.default)(this,a.stylesheet.rules,b),b=(0,_transformToNestedDomStyleObjects.default)(b),b}},{key:"isUrl",value:function c(a){// feel free to use a better pattern
var b=/^(?:(?:http|https|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:(\/|\?|#)[^\s]*)?$/i;return!!b.test(a)}},{key:"fetchUrlAsync",value:function b(a){return new Promise(function(b,c){(0,_fetch.fetchUrl)(a,function(a,d,e){if(a)throw a;try{b(e.toString())}catch(a){c(a)}})})}},{key:"convertAsync",value:function d(a){var b=this,c=process.cwd()+"/"+a;return new Promise(function(d,e){if(!b.isUrl(a)){if(require("fs").existsSync(c)){var f=_fs.default.readFileSync(c,"utf-8");return f=_css.default.parse(f,{silent:!1,source:c}),d(b.transform.apply(b,f))}e(new Error("Ooops!\nError: CSS file not found!"))}else return b.fetchUrlAsync(a).catch(function(a){e(a)}).then(function(a){var a=_css.default.parse(a,{silent:!1,source:c});d(b.transform(a))})})}},{key:"convert",value:function e(a){var b,c=this,d=a;// PATH given
if(require("fs").existsSync(d))b=_fs.default.readFileSync(d,"utf-8");// STRING given
else if("string"==typeof a){// TBD: refactor file/string verification
if(!~a.indexOf("{"))return"Ooops!\nError: CSS file not found!";b=a}// Buffer given
else if(a instanceof Buffer)b=a.toString();// URL given
else return this.isUrl(a)?this.convertAsync(a):"Ooops!\nError: CSS file not found!";return b=_css.default.parse(b,{silent:!1,source:d}),c.transform(b)}},{key:"generateFile",value:function f(a,b,c){if(!b||-1<b.indexOf("--"))return console.log("Please, set a output path!");var d,e=transformhis;return c?(_fs.default.writeFileSync(b,"var styles = StyleSheet.create({\n"),d=e.indentObject(a,2),void _fs.default.appendFileSync(b,d+"\n})")):void(d=e.indentObject({styles:a},2),_fs.default.writeFileSync(b,d))}}]),a}(),_default=new styleObjects;exports.default=_default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFOLENBQWMsSUFBZCxDQUFkLENBQ0UsTUFBTyxDQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksNEJBQVosQ0FBUCxDQUVGLEdBQ0UsQ0FBQSxDQURGLENBQUksQ0FBSSxDQUFHLFlBQVgsQ0FKK0IsTUFPM0IsQ0FBQSxDQVAyQixFQVE3QixZQUFHLGFBQUgsQ0FBaUIsQ0FBakIsQ0FBd0Isb0NBQXhCLENBUjZCLENBUzdCLENBQUksQ0FBRyxDQUFJLENBQUMsWUFBTCxDQUFrQixDQUFsQixDQUF1QixDQUF2QixDQVRzQixLQVU3QixhQUFHLGNBQUgsQ0FBa0IsQ0FBbEIsQ0FBeUIsQ0FBSSxDQUFHLE1BQWhDLENBVjZCLE9BYy9CLENBQUksQ0FBRyxDQUFJLENBQUMsWUFBTCxDQUFrQixDQUN2QixPQUFVLENBRGEsQ0FBbEIsQ0FFSixDQUZJLENBZHdCLENBa0IvQixZQUFHLGFBQUgsQ0FBaUIsQ0FBakIsQ0FBd0IsQ0FBeEIsQ0FsQitCLENBbUJoQyxDLGtCQUdXLEdBQUksQ0FBQSxZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4vL1xuLy8gICAgX19fX19fX19fX19fXyAgX19fXyAgICBfX19fX19fX19fICBfX19fICAgICAgX19fX19fX19fX19fX19fX19fX19fX19fX1xuLy8gICAvIF9fXy9fICBfXy9cXCBcXC8gLyAvICAgLyBfX19fLyBfXyBcXC8gX18gKSAgICAvIC8gX19fXy8gX19fXy9fICBfXy8gX19fL1xuLy8gICBcXF9fIFxcIC8gLyAgICBcXCAgLyAvICAgLyBfXy8gLyAvIC8gLyBfXyAgfF8gIC8gLyBfXy8gLyAvICAgICAvIC8gIFxcX18gXFxcbi8vICBfX18vIC8vIC8gICAgIC8gLyAvX19fLyAvX19fLyAvXy8gLyAvXy8gLyAvXy8gLyAvX19fLyAvX19fICAvIC8gIF9fXy8gL1xuLy8gL19fX18vL18vICAgICAvXy9fX19fXy9fX19fXy9cXF9fX18vX19fX18vXFxfX19fL19fX19fL1xcX19fXy8gL18vICAvX19fXy9cbi8vXG4vLyAgc3BlY2lhbCB0aGFua3MgdG8gUmFwaGFlbCBBbW9yaW0gKEByYXBoYW1vcmltKSBmb3IgdGhlIGNvcmUgY29uY2VwdCxcbi8vICBiZWNhdXNlIHRoaXMgaXMgYmFzaWNseSBhIHJlbWFrZSBvZiBuYXRpdmVDU1MgKGh0dHBzOi8vZ2l0aHViLmNvbS9yYXBoYW1vcmltL25hdGl2ZS1jc3MpXG4vL1xuXG5pbXBvcnQgZnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnZnMnXG5pbXBvcnQgY3NzUGFyc2VyICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnY3NzJ1xuaW1wb3J0IHtmZXRjaFVybH0gICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2ZldGNoJ1xuXG5pbXBvcnQgdHJhbnNmb3JtUnVsZXMgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9saWIvdHJhbnNmb3JtUnVsZXMuanMnXG5pbXBvcnQgdHJhbnNmb3JtVG9OZXN0ZWREb21TdHlsZU9iamVjdHMgZnJvbSAnLi9saWIvdHJhbnNmb3JtVG9OZXN0ZWREb21TdHlsZU9iamVjdHMuanMnXG5cbmNsYXNzIHN0eWxlT2JqZWN0cyB7XG5cbiAgICBpbmRlbnRPYmplY3QgKG9iaiwgaW5kZW50KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIHJlc3VsdCA9ICcnXG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCBpbmRlbnQgfHwgMClcbiAgICB9XG5cbiAgICBuYW1lR2VuZXJhdG9yIChuYW1lKSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJylcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCAnXycpXG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9eXysvZywgJycpXG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9fKyQvZywgJycpXG4gICAgICByZXR1cm4gbmFtZVxuICAgIH1cblxuICAgIG1lZGlhTmFtZUdlbmVyYXRvciAobmFtZSkge1xuICAgICAgcmV0dXJuICdAbWVkaWEgJyArIG5hbWVcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0gKGNzcykge1xuICAgICAgdmFyIHJlc3VsdCAgICA9IHt9XG4gICAgICB0cmFuc2Zvcm1SdWxlcyh0aGlzLCBjc3Muc3R5bGVzaGVldC5ydWxlcywgcmVzdWx0KVxuICAgICAgcmVzdWx0ICAgICAgICA9IHRyYW5zZm9ybVRvTmVzdGVkRG9tU3R5bGVPYmplY3RzKHJlc3VsdClcblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIGlzVXJsIChzdHIpIHtcbiAgICAgIC8vIGZlZWwgZnJlZSB0byB1c2UgYSBiZXR0ZXIgcGF0dGVyblxuICAgICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKCdeKD86KD86aHR0cHxodHRwc3xmdHApOi8vKSg/OlxcXFxTKyg/OjpcXFxcUyopP0ApPyg/Oig/Oig/OlsxLTldXFxcXGQ/fDFcXFxcZFxcXFxkfDJbMDFdXFxcXGR8MjJbMC0zXSkoPzpcXFxcLig/OjE/XFxcXGR7MSwyfXwyWzAtNF1cXFxcZHwyNVswLTVdKSl7Mn0oPzpcXFxcLig/OlswLTldXFxcXGQ/fDFcXFxcZFxcXFxkfDJbMC00XVxcXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rLT8pKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKD86XFxcXC4oPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rLT8pKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKig/OlxcXFwuKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmZdezIsfSkpKXxsb2NhbGhvc3QpKD86OlxcXFxkezIsNX0pPyg/OigvfFxcXFw/fCMpW15cXFxcc10qKT8kJywgJ2knKVxuICAgICAgaWYgKCFwYXR0ZXJuLnRlc3Qoc3RyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgZmV0Y2hVcmxBc3luYyAoY3NzRmlsZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmZXRjaFVybChjc3NGaWxlLCBmdW5jdGlvbihlcnIsIG1ldGEsIGJvZHkpIHtcbiAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnJcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzb2x2ZShib2R5LnRvU3RyaW5nKCkpXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29udmVydEFzeW5jIChjc3NGaWxlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIHBhdGggPSBwcm9jZXNzLmN3ZCgpICsgJy8nICsgY3NzRmlsZSxcbiAgICAgICAgZXJyb3JcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoIXNlbGYuaXNVcmwoY3NzRmlsZSkpIHtcbiAgICAgICAgICBpZiAoKHJlcXVpcmUoJ2ZzJykuZXhpc3RzU3luYyhwYXRoKSkpIHtcbiAgICAgICAgICAgIHZhciBjc3MgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgJ3V0Zi04JylcbiAgICAgICAgICAgIGNzcyA9IGNzc1BhcnNlci5wYXJzZShjc3MsIHtcbiAgICAgICAgICAgICAgc2lsZW50OiBmYWxzZSxcbiAgICAgICAgICAgICAgc291cmNlOiBwYXRoXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoc2VsZi50cmFuc2Zvcm0uYXBwbHkoc2VsZiwgY3NzKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignT29vcHMhXFxuRXJyb3I6IENTUyBmaWxlIG5vdCBmb3VuZCEnKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuZmV0Y2hVcmxBc3luYyhjc3NGaWxlKVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGNzcykge1xuICAgICAgICAgICAgICB2YXIgY3NzID0gY3NzUGFyc2VyLnBhcnNlKGNzcywge1xuICAgICAgICAgICAgICAgIHNpbGVudDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc291cmNlOiBwYXRoXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJlc29sdmUoc2VsZi50cmFuc2Zvcm0oY3NzKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29udmVydCAoY3NzRmlsZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBwYXRoID0gY3NzRmlsZSxcbiAgICAgICAgY3NzXG5cbiAgICAgIC8vIFBBVEggZ2l2ZW5cbiAgICAgIGlmICgocmVxdWlyZSgnZnMnKS5leGlzdHNTeW5jKHBhdGgpKSkge1xuICAgICAgICBjc3MgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgJ3V0Zi04JylcbiAgICAgIH1cbiAgICAgIC8vIFNUUklORyBnaXZlblxuICAgICAgZWxzZSBpZiAodHlwZW9mIGNzc0ZpbGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIFRCRDogcmVmYWN0b3IgZmlsZS9zdHJpbmcgdmVyaWZpY2F0aW9uXG4gICAgICAgIGlmICghfmNzc0ZpbGUuaW5kZXhPZigneycpKSB7XG4gICAgICAgICAgcmV0dXJuICdPb29wcyFcXG5FcnJvcjogQ1NTIGZpbGUgbm90IGZvdW5kISdcbiAgICAgICAgfVxuICAgICAgICBjc3MgPSBjc3NGaWxlXG4gICAgICB9XG4gICAgICAvLyBCdWZmZXIgZ2l2ZW5cbiAgICAgIGVsc2UgaWYgKGNzc0ZpbGUgaW5zdGFuY2VvZiBCdWZmZXIpIHtcbiAgICAgICAgY3NzID0gY3NzRmlsZS50b1N0cmluZygpXG4gICAgICB9XG4gICAgICAvLyBVUkwgZ2l2ZW5cbiAgICAgIGVsc2UgaWYgKHRoaXMuaXNVcmwoY3NzRmlsZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydEFzeW5jKGNzc0ZpbGUpXG4gICAgICB9XG4gICAgICAvLyB1bmtub3duIGZvcm1hdFxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnT29vcHMhXFxuRXJyb3I6IENTUyBmaWxlIG5vdCBmb3VuZCEnXG4gICAgICB9XG5cblxuICAgICAgY3NzID0gY3NzUGFyc2VyLnBhcnNlKGNzcywge1xuICAgICAgICBzaWxlbnQ6IGZhbHNlLFxuICAgICAgICBzb3VyY2U6IHBhdGhcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBzZWxmLnRyYW5zZm9ybShjc3MpXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVGaWxlIChvYmosIHdoZXJlLCByZWFjdCkge1xuICAgICAgaWYgKCF3aGVyZSB8fCB3aGVyZS5pbmRleE9mKCctLScpID4gLTEpXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnUGxlYXNlLCBzZXQgYSBvdXRwdXQgcGF0aCEnKVxuXG4gICAgICB2YXIgc2VsZiA9IHRyYW5zZm9ybWhpcyxcbiAgICAgICAgYm9keVxuXG4gICAgICBpZiAocmVhY3QpIHtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyh3aGVyZSwgJ3ZhciBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XFxuJylcbiAgICAgICAgYm9keSA9IHNlbGYuaW5kZW50T2JqZWN0KG9iaiwgMilcbiAgICAgICAgZnMuYXBwZW5kRmlsZVN5bmMod2hlcmUsIGJvZHkgKyAnXFxufSknKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgYm9keSA9IHNlbGYuaW5kZW50T2JqZWN0KHtcbiAgICAgICAgJ3N0eWxlcyc6IG9ialxuICAgICAgfSwgMilcblxuICAgICAgZnMud3JpdGVGaWxlU3luYyh3aGVyZSwgYm9keSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChuZXcgc3R5bGVPYmplY3RzKCkpXG4iXX0=