# QR Creator

**QR Creator** is a simple Node.js application that allows users to generate QR codes from URLs with customizable options. Users can specify the error correction level, foreground color, and background color of the QR code. The project also saves the URL entered by the user in a text file for later use.

---

## Features:
- **URL to QR Code**: Converts a user-inputted URL into a scannable QR code.
- **Customization**: Customize the QR code’s error correction level, foreground, and background colors.
- **File Saving**: Saves the generated QR code as a PNG image and the URL in a text file.
- **Error Handling**: Includes error handling to ensure smooth execution and feedback.

---

## Demo

### **Customization Options:**
- Error correction levels: `L`, `M`, `Q`, `H`.
- Choose foreground and background colors.

---

## How to Use:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/QR-Creator.git
2. Navigate to the project directory:
   ```bash
   cd QR-Creator
3. Install the required dependencies:
   ```bash
   npm intall
4. Run the application:
   ```bash
   node index.js
5. When prompted, enter the URL you want to convert into a QR code. You will also be able to:
   - Select the error correction level (L, M, Q, H)
   - Choose the foreground and background colors of the QR code (in hex format)
        Example:

   ```bash
    Type your URL: https://example.com
    Select error correction level: H (High)
    Enter foreground color (hex, e.g., #000000 for black): #FF5733
    Enter background color (hex, e.g., #FFFFFF for white): #FFFFFF


6. The generated QR code will be saved as qr_img.png and the URL will be saved in URL.txt.

## Dependencies:

The following dependencies are used in this project:

- **inquirer**: For handling interactive command-line prompts.
- **qr-image**: For generating QR codes from URLs.
- **fs**: For file system operations (built-in Node.js module).

## Contributing:

Feel free to open issues or submit pull requests if you want to improve this project or add new features! Contributions are welcome.



   
