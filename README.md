# Gatherfusion 

Gatherfusion is an Event Management application built using **React** for the frontend and **Appwrite** as the Backend-as-a-Service (BAAS) platform. It allows users to create, manage, and participate in events seamlessly.

## Features

- **User Authentication:** Secure login and registration using Appwrite's authentication services.
- **Event Creation:** Users can create new events with details such as title, description, date, and location.
- **Event Listing:** Browse and search for upcoming events.
- **Event Participation:** Register or RSVP for events.
- **Event Management:** Edit or delete events (for event creators).
- **Real-time Updates:** Instant updates on event changes using Appwrite's real-time capabilities.

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **React Router:** For client-side routing and navigation.
- **Appwrite:** Provides authentication, storage, database, and messaging services for the application backend.
- **Tailwind CSS and shadcn/ui components:** Used for styling and building the user interface.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Appwrite instance (self-hosted or cloud)

### Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/your-username/event-management-app.git
  cd event-management-app
  ```

2. Install dependencies:
  ```bash
  npm install
  ```

3. Configure Appwrite:
  - Create a project in Appwrite.
  - Set up authentication and database collections for events.
  - Update the Appwrite endpoint and project ID in your React app's configuration.

4. Start the development server:
  ```bash
  npm start
  ```

