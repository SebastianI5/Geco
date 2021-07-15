import jsPDF from 'jspdf';

export function pdf(template, data, name){

    var doc = new jsPDF('p', 'mm', 'a4');
    data.forEach((d, i) => {
        template.forEach(e => {
            if(e.type == 'barcode') draw_barcode(doc, d[e.key], e.x, e.y, e.w, e.h);
            if(e.type == 'text') draw_text(doc, d[e.key], e.x, e.y, e.size);
            if(e.type == 'table') draw_table(doc, d[e.key], e.x, e.y);
        });
        if(i < data.length - 1)doc.addPage();
    });

    doc.save(name + '.pdf');
}


function draw_barcode(doc, text, x, y, w, h, scale = 2.5, matrix = null) {
    if (x === undefined || y === undefined || w <= 0 || h <= 0) return;
    scale = Math.max(2, Math.min(+scale, 3));
    const Code39Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%";
    const Code39Bars =
      ["000110100", "100100001", "001100001", "101100000", "000110001", "100110000", "001110000", "000100101", "100100100", //0-8
        "001100100", "100001001", "001001001", "101001000", "000011001", "100011000", "001011000", "000001101", "100001100", //9-H
        "001001100", "000011100", "100000011", "001000011", "101000010", "000010011", "100010010", "001010010", "000000111", //I-Q
        "100000110", "001000110", "000010110", "110000001", "011000001", "111000000", "010010001", "110010000", "011010000", //R-Z
        "010000101", "110000100", "011000100", "010010100", "010101000", "010100010", "010001010", "000101010"]; // Symbols

    text = `*${text}*`.toUpperCase();
    const charCount = text.length, charWidth = w / charCount, lineWidth = charWidth / (7 + scale * 3);
    //console.log( `Code 39 "${text}" at [${x},${y}] height ${h} width ${w} (${charWidth} per char, ${lineWidth} per line}). Matrix ${matrix}.` );
    const spacing = [lineWidth, scale * lineWidth], d = lineWidth * (scale - 1) / 2;
    doc.setLineCap(2); // square cap
    for (let i = 0, draw = true; i < charCount; i++, draw = true) {
      let pos = Code39Chars.indexOf(text[i]), left = x + charWidth * i;
      for (let w of Code39Bars[pos].split("").map(e => +e)) {
        if (draw) {
          doc.setLineWidth(spacing[w]);
          let dw = w ? d : 0, x1 = left + dw, y1 = y + dw, x2 = left + dw, y2 = y + h - dw;
          if (matrix) {
            [x1, y1] = applyMatrix(x1, y1);
            [x2, y2] = applyMatrix(x2, y2);
          }
          doc.line(x1, y1, x2, y2);
        }
        left += spacing[w];
        draw = !draw;
      }
    }
    function applyMatrix(x, y) {
      return [x * matrix[0] + y * matrix[1] + matrix[2], x * matrix[3] + y * matrix[4] + matrix[5]];
    }
  };

  function draw_text(doc, text, x, y, size = 16){

    doc.setFontSize(size);
    doc.text(text, x, y);
  }

  function  draw_table(doc, data, x, y){
    let k = 4;
    let header_width = Math.max(...data.map(e => e.header.length))*doc.getFontSize()/k;
    let value_width = 190 - header_width;
    let i = 0;
    doc.setLineWidth(0.5);
    data.forEach((e) => {
        let h = 10;
        let l = e.value.length * doc.getFontSize()/k;
        while(l > value_width -1){ h += 10; l -= value_width;}
        // console.log(e.value.length * doc.getFontSize()/4, h, doc.getFontSize()/4, value_width, l);
        doc.rect(x, y + i, header_width, h);
        doc.rect(x+header_width, y + i, value_width, h);

        doc.text(e.header, x+2, y+7 + i, {maxWidth: header_width*0.9});
        doc.text(e.value, x+header_width+2, y+i+7, {maxWidth: value_width*0.9});

        i += h;
    });
  }
