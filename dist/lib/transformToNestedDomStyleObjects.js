"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=transformToNestedDomStyleObjects;// f.e. font-family => fontFamily border-radius => borderRadius
var transformPropertiesToCamelCase=function a(b){var c={};for(var d in b){if("string"==typeof b)return b.replace(" !important","");var e=d,f=b[d];if(~e.indexOf("-")){var g=e.split("-");g=g.map(function(a,b){return 0<b// UCFIRST if ! first element
?a.charAt(0).toUpperCase()+a.substr(1):a}),e=g.join("")}c[e]=a(f)}return c},injectSubClasses=function a(b){var c=b;for(var d in c)if(~d.indexOf("__")){var e=d.split("__"),f=e[0],g=e.slice(1).join("__");c[f]=c[f]||{},c[f][g]=c[d],~g.indexOf("__")&&(c[f]=a(c[f])),delete c[d]}return c};// only for one level down
// tbd: make it recursive
// transforms
//    {className__subClassName: {property: value}}
// to {className: {subClassName: {property: value}}}
function transformToNestedDomStyleObjects(a){// TBD: outputStyle option
// var transformTo = arguments.length <= 1 || arguments[1] === undefined ? 'js' : arguments[1]
// if (transformTo !== 'js') {
//   throw Error('[transformToNestedDomStyleObjects] transforming js to css is not supported yet')
// }
var b=transformPropertiesToCamelCase(a),c=injectSubClasses(b);return c}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdHJhbnNmb3JtVG9OZXN0ZWREb21TdHlsZU9iamVjdHMuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwidHJhbnNmb3JtVG9OZXN0ZWREb21TdHlsZU9iamVjdHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0aWVzVG9DYW1lbENhc2UiLCJvYmplY3QiLCJvdXRwdXQiLCJfa2V5IiwicmVwbGFjZSIsImtleSIsImluZGV4T2YiLCJzcGxpdHRlZEtleXMiLCJzcGxpdCIsIm1hcCIsInYiLCJpIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHIiLCJqb2luIiwiaW5qZWN0U3ViQ2xhc3NlcyIsIl9vYmplY3QiLCJrZXlTcGxpdCIsInBhcmVudGtleSIsIm5ld0tleSIsInNsaWNlIiwiY3NzT2JqZWN0IiwiY3NzT2JqZWN0Q2FtZWxDYXNlIiwic3BsaXR0ZWRDc3NPYmplY3QiXSwibWFwcGluZ3MiOiJBQUFBLGFBRUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsQ0FBK0IsWUFBL0IsQ0FBNkMsQ0FDM0NDLEtBQUssR0FEc0MsQ0FBN0MsQyxDQUdBRCxPQUFPLENBQUNFLE9BQVIsQ0FBa0JDLGdDLENBQ2xCO0dBQ0lDLENBQUFBLDhCQUE4QixDQUFHLFFBQVNBLENBQUFBLENBQVQsQ0FBeUNDLENBQXpDLENBQWlELENBQ3BGLEdBQUlDLENBQUFBLENBQU0sQ0FBRyxFQUFiLENBRUEsSUFBSyxHQUFJQyxDQUFBQSxDQUFULEdBQWlCRixDQUFBQSxDQUFqQixDQUF5QixDQUN2QixHQUFzQixRQUFsQixRQUFPQSxDQUFBQSxDQUFYLENBQWtDLE1BQU9BLENBQUFBLENBQU0sQ0FBQ0csT0FBUCxDQUFlLGFBQWYsQ0FBOEIsRUFBOUIsQ0FBUCxDQURYLEdBRW5CQyxDQUFBQSxDQUFHLENBQUdGLENBRmEsQ0FHbkJOLENBQUssQ0FBR0ksQ0FBTSxDQUFDRSxDQUFELENBSEssQ0FJdkIsR0FBSSxDQUFDRSxDQUFHLENBQUNDLE9BQUosQ0FBWSxHQUFaLENBQUwsQ0FBdUIsQ0FDckIsR0FBSUMsQ0FBQUEsQ0FBWSxDQUFHRixDQUFHLENBQUNHLEtBQUosQ0FBVSxHQUFWLENBQW5CLENBQ0FELENBQVksQ0FBR0EsQ0FBWSxDQUFDRSxHQUFiLENBQWlCLFNBQVVDLENBQVYsQ0FBYUMsQ0FBYixDQUFnQixDQUM5QyxNQUFXLEVBQUosQ0FBQUEsQ0FDUDtBQURRLENBRU5ELENBQUMsQ0FBQ0UsTUFBRixDQUFTLENBQVQsRUFBWUMsV0FBWixHQUE0QkgsQ0FBQyxDQUFDSSxNQUFGLENBQVMsQ0FBVCxDQUZ0QixDQUVvQ0osQ0FDN0MsQ0FKYyxDQUZNLENBT3JCTCxDQUFHLENBQUdFLENBQVksQ0FBQ1EsSUFBYixDQUFrQixFQUFsQixDQUNQLENBQ0RiLENBQU0sQ0FBQ0csQ0FBRCxDQUFOLENBQWNMLENBQThCLENBQUNILENBQUQsQ0FDN0MsQ0FDRCxNQUFPSyxDQUFBQSxDQUNSLEMsQ0FPR2MsZ0JBQWdCLENBQUcsUUFBU0EsQ0FBQUEsQ0FBVCxDQUEyQkMsQ0FBM0IsQ0FBb0MsQ0FDekQsR0FBSWhCLENBQUFBLENBQU0sQ0FBR2dCLENBQWIsQ0FDQSxJQUFLLEdBQUlaLENBQUFBLENBQVQsR0FBZ0JKLENBQUFBLENBQWhCLENBQ0UsR0FBSSxDQUFDSSxDQUFHLENBQUNDLE9BQUosQ0FBWSxJQUFaLENBQUwsQ0FBd0IsSUFDbEJZLENBQUFBLENBQVEsQ0FBR2IsQ0FBRyxDQUFDRyxLQUFKLENBQVUsSUFBVixDQURPLENBRWxCVyxDQUFTLENBQUdELENBQVEsQ0FBQyxDQUFELENBRkYsQ0FHbEJFLENBQU0sQ0FBR0YsQ0FBUSxDQUFDRyxLQUFULENBQWUsQ0FBZixFQUFrQk4sSUFBbEIsQ0FBdUIsSUFBdkIsQ0FIUyxDQUt0QmQsQ0FBTSxDQUFDa0IsQ0FBRCxDQUFOLENBQW9CbEIsQ0FBTSxDQUFDa0IsQ0FBRCxDQUFOLEVBQXFCLEVBTG5CLENBTXRCbEIsQ0FBTSxDQUFDa0IsQ0FBRCxDQUFOLENBQWtCQyxDQUFsQixFQUE0Qm5CLENBQU0sQ0FBQ0ksQ0FBRCxDQU5aLENBUWxCLENBQUNlLENBQU0sQ0FBQ2QsT0FBUCxDQUFlLElBQWYsQ0FSaUIsR0FVcEJMLENBQU0sQ0FBQ2tCLENBQUQsQ0FBTixDQUFvQkgsQ0FBZ0IsQ0FBQ2YsQ0FBTSxDQUFDa0IsQ0FBRCxDQUFQLENBVmhCLEVBYXRCLE1BQU9sQixDQUFBQSxDQUFNLENBQUNJLENBQUQsQ0FDZCxDQUVILE1BQU9KLENBQUFBLENBQ1IsQyxDQXpCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdUJBLFFBQVNGLENBQUFBLGdDQUFULENBQTJDdUIsQ0FBM0MsQ0FBc0QsQ0FDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLEdBQ0lDLENBQUFBLENBQWtCLENBQUl2Qiw4QkFBOEIsQ0FBQ3NCLENBQUQsQ0FEeEQsQ0FFSUUsQ0FBaUIsQ0FBS1IsZ0JBQWdCLENBQUNPLENBQUQsQ0FGMUMsQ0FJQSxNQUFPQyxDQUFBQSxDQUNSIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSlcbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybVRvTmVzdGVkRG9tU3R5bGVPYmplY3RzXG4vLyBmLmUuIGZvbnQtZmFtaWx5ID0+IGZvbnRGYW1pbHkgYm9yZGVyLXJhZGl1cyA9PiBib3JkZXJSYWRpdXNcbnZhciB0cmFuc2Zvcm1Qcm9wZXJ0aWVzVG9DYW1lbENhc2UgPSBmdW5jdGlvbiB0cmFuc2Zvcm1Qcm9wZXJ0aWVzVG9DYW1lbENhc2UgKG9iamVjdCkge1xuICB2YXIgb3V0cHV0ID0ge31cblxuICBmb3IgKHZhciBfa2V5IGluIG9iamVjdCkge1xuICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJykgeyByZXR1cm4gb2JqZWN0LnJlcGxhY2UoJyAhaW1wb3J0YW50JywgJycpIH1cbiAgICB2YXIga2V5ID0gX2tleVxuICAgIHZhciB2YWx1ZSA9IG9iamVjdFtfa2V5XVxuICAgIGlmICh+a2V5LmluZGV4T2YoJy0nKSkge1xuICAgICAgdmFyIHNwbGl0dGVkS2V5cyA9IGtleS5zcGxpdCgnLScpXG4gICAgICBzcGxpdHRlZEtleXMgPSBzcGxpdHRlZEtleXMubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgIHJldHVybiBpID4gMFxuICAgICAgICAvLyBVQ0ZJUlNUIGlmICEgZmlyc3QgZWxlbWVudFxuICAgICAgICA/IHYuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2LnN1YnN0cigxKSA6IHZcbiAgICAgIH0pXG4gICAgICBrZXkgPSBzcGxpdHRlZEtleXMuam9pbignJylcbiAgICB9XG4gICAgb3V0cHV0W2tleV0gPSB0cmFuc2Zvcm1Qcm9wZXJ0aWVzVG9DYW1lbENhc2UodmFsdWUpXG4gIH1cbiAgcmV0dXJuIG91dHB1dFxufVxuXG4vLyBvbmx5IGZvciBvbmUgbGV2ZWwgZG93blxuLy8gdGJkOiBtYWtlIGl0IHJlY3Vyc2l2ZVxuLy8gdHJhbnNmb3Jtc1xuLy8gICAge2NsYXNzTmFtZV9fc3ViQ2xhc3NOYW1lOiB7cHJvcGVydHk6IHZhbHVlfX1cbi8vIHRvIHtjbGFzc05hbWU6IHtzdWJDbGFzc05hbWU6IHtwcm9wZXJ0eTogdmFsdWV9fX1cbnZhciBpbmplY3RTdWJDbGFzc2VzID0gZnVuY3Rpb24gaW5qZWN0U3ViQ2xhc3NlcyAoX29iamVjdCkge1xuICB2YXIgb2JqZWN0ID0gX29iamVjdFxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKH5rZXkuaW5kZXhPZignX18nKSkge1xuICAgICAgdmFyIGtleVNwbGl0ID0ga2V5LnNwbGl0KCdfXycpXG4gICAgICB2YXIgcGFyZW50a2V5ID0ga2V5U3BsaXRbMF1cbiAgICAgIHZhciBuZXdLZXkgPSBrZXlTcGxpdC5zbGljZSgxKS5qb2luKCdfXycpXG5cbiAgICAgIG9iamVjdFtwYXJlbnRrZXldID0gb2JqZWN0W3BhcmVudGtleV0gfHwge31cbiAgICAgIG9iamVjdFtwYXJlbnRrZXldW25ld0tleV0gPSBvYmplY3Rba2V5XVxuXG4gICAgICBpZiAofm5ld0tleS5pbmRleE9mKCdfXycpKSB7XG4gICAgICAgIC8vIGRvIGl0IHJlY3Vyc2l2ZWx5XG4gICAgICAgIG9iamVjdFtwYXJlbnRrZXldID0gaW5qZWN0U3ViQ2xhc3NlcyhvYmplY3RbcGFyZW50a2V5XSlcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIG9iamVjdFtrZXldXG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Rcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtVG9OZXN0ZWREb21TdHlsZU9iamVjdHMgKGNzc09iamVjdCkge1xuICAvLyBUQkQ6IG91dHB1dFN0eWxlIG9wdGlvblxuICAvLyB2YXIgdHJhbnNmb3JtVG8gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAnanMnIDogYXJndW1lbnRzWzFdXG4gIC8vIGlmICh0cmFuc2Zvcm1UbyAhPT0gJ2pzJykge1xuICAvLyAgIHRocm93IEVycm9yKCdbdHJhbnNmb3JtVG9OZXN0ZWREb21TdHlsZU9iamVjdHNdIHRyYW5zZm9ybWluZyBqcyB0byBjc3MgaXMgbm90IHN1cHBvcnRlZCB5ZXQnKVxuICAvLyB9XG5cbiAgdmFyIG91dHB1dCAgICAgICAgICAgICAgPSB7fVxuICAsICAgY3NzT2JqZWN0Q2FtZWxDYXNlICA9IHRyYW5zZm9ybVByb3BlcnRpZXNUb0NhbWVsQ2FzZShjc3NPYmplY3QpXG4gICwgICBzcGxpdHRlZENzc09iamVjdCAgID0gaW5qZWN0U3ViQ2xhc3Nlcyhjc3NPYmplY3RDYW1lbENhc2UpXG5cbiAgcmV0dXJuIHNwbGl0dGVkQ3NzT2JqZWN0XG59XG4iXX0=