const fs = require("fs").promises;
const path = require("path");
const pdfLib = require("pdf-lib");
const fontKit = require("@pdf-lib/fontkit");
const QRCode = require("qrcode");

const fonts = {
    LEAGUE_GOTHIC: "leaguegothic",
    GLACIAL_INDIFFERENCE: "glacialindifference"
};

const loadDocument = async name => {
    const uint8Array = await fs.readFile(path.join(__dirname, "../../assets/", name + ".pdf"));
    const pdfDocument = await pdfLib.PDFDocument.load(uint8Array);
    pdfDocument.registerFontkit(fontKit);
    return pdfDocument;
};

const loadFont = async (document, fontName) => {
    const uint8Array = await fs.readFile(path.join(__dirname, "../../assets/", fontName + ".otf"));
    return document.embedFont(uint8Array);
};

const getColor = (r, g, b) => pdfLib.rgb(r / 255, g / 255, b / 255);

const drawCenteredText = (page, text, {x, y, size, font, vertical, ...otherOptions}) => {
    const textWidth = font.widthOfTextAtSize(text, size);
    const textHeight = font.heightAtSize(size);
    page.drawText(text, {
        x: x - (vertical === true ? -textHeight : textWidth) / 2,
        y: y - (vertical === true ? textWidth : textHeight) / 2,
        size,
        font,
        rotate: (vertical === true ? pdfLib.degrees(90) : undefined),
        ...otherOptions
    });
};

const drawCenteredPNG = async (document, page, png, {x, y, ...otherOptions}) => {
    const image = await document.embedPng(png);
    page.drawImage(image, {
        x: x - image.width / 2,
        y: y - image.height / 2,
        width: image.width,
        height: image.height,
        ...otherOptions
    });
};

exports.createTicket = async (code, artist, date, area) => {
    const ticketDocument = await loadDocument("ticket");
    const fontLeague = await loadFont(ticketDocument, fonts.LEAGUE_GOTHIC);
    const fontGlacial = await loadFont(ticketDocument, fonts.GLACIAL_INDIFFERENCE);
    const ticketPage = ticketDocument.getPages()[0];
    // PDF ticket dimensions are 612 x 214 (height has 8 top and 8 bottom margin taken into account)
    // Draw QRCode
    const qrCode = await QRCode.toDataURL(code, {
        errorCorrectionLevel: "H",
        scale: 3,
        margin: 0,
        color: {
            dark: "#333333ff",
            light: "#11111100"
        }
    });
    await drawCenteredPNG(ticketDocument, ticketPage, qrCode, {
        x: 529,
        y: 107
    });
    // Draw text
    const color = getColor(51, 51, 51);
    drawCenteredText(ticketPage, artist.toUpperCase(), {
        x: 612 / 2,
        y: 215 / 2 + 5,
        size: 36,
        font: fontLeague,
        color
    });
    drawCenteredText(ticketPage, `${date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? "PM" : "AM"}`, {
        x: 612 / 2,
        y: 50,
        size: 10,
        font: fontGlacial,
        color
    });
    drawCenteredText(ticketPage, area.charAt(0).toUpperCase() + area.slice(1), {
        x: 64,
        y: 107,
        size: 16,
        font: fontGlacial,
        color,
        vertical: true
    });
    drawCenteredText(ticketPage, `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`, {
        x: 102,
        y: 107,
        size: 28,
        font: fontLeague,
        color,
        vertical: true
    });
    return ticketDocument.save();
};
