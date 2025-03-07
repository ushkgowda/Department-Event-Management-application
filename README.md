Department Event Management

Overview
The Department Event Management System is a web-based application designed to simplify the planning, organization, and execution of departmental events. 
It facilitates event scheduling, registration, communication, and reporting for faculty and students, ensuring efficient event management.

Features
- Event Creation & Management: Easily add, update, and remove events with relevant details such as date, venue, and description.
- Role-Based Access Control: Admins, faculty, and students have different levels of access and permissions.
- Online Registration: Users can seamlessly register for events through an intuitive interface.
- Automated Notifications: Email and SMS alerts keep participants informed about upcoming events.
- Attendance Tracking: Record and manage attendance digitally.
- Report Generation: Generate and export event participation reports.
- Responsive UI: Optimized for desktops, tablets, and mobile devices.

Tech Stack
- Frontend:HTML, CSS, JavaScript
- Backend:  Express.js
- Database: MongoDB
-Authentication: JWT-based authentication for secure user access

Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/department-event-management.git
   cd department-event-management
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables in a `.env` file:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the application:
   ```sh
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`



