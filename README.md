# Dip Spray - An Aptos Faucet

Dip Spray is a simple, user-friendly faucet application for the Aptos blockchain. It allows developers to request Aptos DevNet tokens for testing and development purposes with just a few clicks.

## Features
- 🎯 **Request Aptos DevNet Tokens:** Deposit tokens directly to your account.  
- 🔢 **Customizable Quantity:** Specify the number of tokens (up to 10) you need.  
- 🚀 **Real-Time Notifications:** Get instant feedback on request submission and completion.  
- 💡 **Clean and Responsive UI:** User-friendly design optimized for desktop and mobile devices.

## Tech Stack
- **Frontend:** React.TS, CSS, HTML  
- **Backend:** Aptos SDK for TypeScript  
- **Notifications:** React Toastify  

## Installation

1. **Clone the Repository**  
```bash
git clone https://github.com/jAnubhav/dip-spray.git
cd dip-spray
```

2. **Install Dependencies**
```bash
npm install
```

3. Start the Development Server
```bash
npm start
```

Open http://localhost:3000 in your browser to view the app.

## Usage

1. Enter your **Aptos account address** in the "Account Address" field.  
2. Specify the **number of tokens** you need (1–10) in the quantity field.  
3. Click the **"Fuel It"** button to submit your request.  
4. Receive a notification upon successful token transfer.

## Project Structure

```bash
.
├── src
│   ├── assets
│   │   └── funder.ts     # Logic for funding accounts using the Aptos SDK
│   ├── css
│   │   ├── App.css       # Main styles
│   │   └── Resp.css      # Responsive styles
│   ├── img
│   │   └── logo.svg      # App logo
│   ├── App.tsx           # Main React component
│   ├── index.tsx         # Entry Point of the Application
│   └── index.css         # CSS for Common
├── public
│   └── index.html        # HTML template
└── README.md             # Documentation
```

## Environment Setup

The project uses the Aptos DevNet. Ensure you have the following:
1. **Node.js** (v14 or higher)  
2. **NPM** (v6 or higher)  
3. **Aptos SDK for JavaScript/TypeScript** (installed as part of dependencies)

## Screenshots

### 1. Main Screen
*Show a screenshot of the input fields and the "Fuel It" button.*
![Fueling It](./img/Fueling%20It.png "Fueling It")

### 2. Success Notification
*Show the success toast after a request is completed.*
![Task Completed](./img/Task%20Completed.png "Task Completed")

## Contributing

Contributions are welcome!  
- Fork the repository.  
- Create a feature branch: `git checkout -b feature-name`.  
- Commit your changes: `git commit -m "Add new feature"`.  
- Push to the branch: `git push origin feature-name`.  
- Submit a pull request.  

## Credits

Made with ❤️ by [jAnubhav](https://github.com/jAnubhav).  
