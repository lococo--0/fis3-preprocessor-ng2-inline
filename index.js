module.exports = function (content, file, opts) {
  var templateUrlReg = /Component\(\{([\s\S]*?)templateUrl:\s*['"](.*?)['"]([\s\S]*?)\}\)/;
  var styleUrlsReg = /Component\(\{([\s\S]*?)styleUrls:\s*\[(.*?)\]([\s\S]*?)\}\)/;

  return content.replace(
    templateUrlReg, 'Component({$1template: __inline("$2")$3})'
  ).replace(
    styleUrlsReg, 'Component({$1styles: [__inline("$2")]$3})'
  );
}
