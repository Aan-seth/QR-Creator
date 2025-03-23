import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

async function generateQRCode() {
  try {
    // Prompt user for URL and customization options
    const answers = await inquirer.prompt([
      {
        type: 'input',
        message: 'Type your URL:',
        name: 'URL',
      },
      {
        type: 'list',
        message: 'Select error correction level:',
        name: 'errorCorrectionLevel',
        choices: ['L (Low)', 'M (Medium)', 'Q (Quartile)', 'H (High)'],
      },
      {
        type: 'input',
        message: 'Enter foreground color (hex, e.g., #000000 for black):',
        name: 'foregroundColor',
        default: '#000000',
      },
      {
        type: 'input',
        message: 'Enter background color (hex, e.g., #FFFFFF for white):',
        name: 'backgroundColor',
        default: '#FFFFFF',
      },
    ]);

    const url = answers.URL;
    const errorCorrection = answers.errorCorrectionLevel[0]; // Extract the letter (L, M, Q, H)
    const foregroundColor = answers.foregroundColor;
    const backgroundColor = answers.backgroundColor;

    // Generate QR code with custom options
    const qr_svg = qr.image(url, {
      type: 'png',
      ec_level: errorCorrection,
    });

    const qrStream = fs.createWriteStream('qr_img.png');
    qr_svg.pipe(qrStream);

    qrStream.on('finish', () => console.log('QR code saved as qr_img.png'));

    // Save the URL to a text file
    await fs.promises.writeFile('URL.txt', url);
    console.log('URL saved to URL.txt');

    console.log(`✅ QR Code Generated with:
    - Error Correction: ${errorCorrection}
    - Foreground Color: ${foregroundColor}
    - Background Color: ${backgroundColor}`);

  } catch (error) {
    console.error('❌ An error occurred:', error.message);
  }
}

generateQRCode();
