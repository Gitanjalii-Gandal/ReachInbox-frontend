# ReachInbox-frontend
#ReachInbox.ai Frontend Application Introduction ReachInbox.ai is a cutting-edge AI-driven platform designed to revolutionize outbound marketing. This project represents the frontend of the ReachInbox.ai application, built with Next.js, React, and Tailwind CSS. It provides a dynamic and intuitive interface for managing cold email campaigns and interacting with the system's features.

Features Login Page: Secure login functionality to access the application. Onebox Screen: Displays a list of email threads with options to delete or reply. Custom Text Editor: Includes buttons for saving and inserting variables. Dark Mode: Toggle between light and dark themes for user comfort. Keyboard Shortcuts: Use 'D' to delete threads and 'R' to open the reply box. Getting Started Prerequisites Node.js (v14 or later) npm or yarn Installation Clone the Repository

bash git clone https://github.com/yourusername/reachinbox-frontend.git cd reachinbox-frontend Install Dependencies

bash npm install

or
yarn install Create a .env.local File

Create a file named .env.local in the root directory and add the following content:

plaintext NEXT_PUBLIC_API_BASE_URL=https://api.reachinbox.ai Run the Development Server

bash npm run dev

or
yarn dev The application will be available at http://localhost:3000.

Usage Login: Access the login page and enter your credentials. Onebox Screen: After logging in, you'll be redirected to the Onebox screen where you can view and manage email threads. Custom Text Editor: Use the editor to compose replies, insert variables, and save drafts. Toggle Dark Mode: Switch between light and dark themes using the provided toggle. API Endpoints GET /onebox/list: Fetch a list of email threads. GET /onebox/:thread_id: Fetch details for a specific thread. DELETE /onebox/:thread_id: Delete a specific thread. POST /reply/:thread_id: Send a reply to a specific thread. Contributing We welcome contributions to improve this project. Please follow these steps to contribute:

Fork the Repository and clone it to your local machine.

Create a Feature Branch

bash git checkout -b feature/your-feature-name Make Changes and test them locally.

Commit Your Changes

bash git add . git commit -m "Add a descriptive commit message" Push to Your Fork

bash git push origin feature/your-feature-name Create a Pull Request from your fork to the main repository.
