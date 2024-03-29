function generateQRCode() {
    var websiteUrl = document.getElementById('websiteUrl').value;
    if (websiteUrl.trim() === '') {
      alert('Please enter a valid website URL.');
      return;
    }
  
    var qrCodeDiv = document.getElementById('qrcode');
    qrCodeDiv.innerHTML = '';
  
    var qr = qrcode(0, 'L'); // Create QRCode object
    qr.addData(websiteUrl); // Add website URL
    qr.make(); // Generate QR code
  
    var qrImage = qr.createImgTag(4); // Create image tag
    qrCodeDiv.innerHTML = qrImage; // Append image tag to div
  }