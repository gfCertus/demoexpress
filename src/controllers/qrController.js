const QRCode = require('qrcode');

exports.showForm = (req, res) => {
    res.render('qrGenerator');
};

exports.generateQr = async (req, res) => {
    const text = req.body.qrText;
    console.log("contenido del formulario: ", req.body.qrText);
    try {
        const qrCodeDataURL = await QRCode.toDataURL(text);
        res.render('qrGenerator', { qrCode: qrCodeDataURL, qrText: text });
        console.log("qrCode: " + qrCodeDataURL);
    } catch (err) {
        console.error(err);
        res.render('qrGenerator', { error: 'Error al generar el código QR.', inputText: text });
    }
};
