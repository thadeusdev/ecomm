<img src="https://github.com/thadeusdev/ecomm/blob/main/app/assets/images/banner.webp" alt="Ecomm Banner" height="200" width="100%">

# Ecomm

**Ecomm** is a full-stack Ruby on Rails 7 e-commerce application with seamless checkout functionality, user authentication, and modern styling. It is powered by Hotwire, Stimulus, and Tailwind CSS for interactivity and design. Stripe handles the payment processing, PostgreSQL serves as the database, and Devise manages user authentication.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Stripe Setup](#stripe-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **User Authentication:** Secure user sign-up and login using Devise.
- **Checkout:** Integrated Stripe payment gateway for handling transactions.
- **Real-time Updates:** Uses Hotwire with Turbo and Stimulus for dynamic updates without full page reloads.
- **Responsive Design:** Tailwind CSS ensures mobile-first responsive design.
- **PostgreSQL Database:** Efficient and scalable database for handling product and user data.

## Tech Stack
- **Backend:** Ruby on Rails 7
- **Frontend:** Hotwire (Turbo, Stimulus), Tailwind CSS
- **Database:** PostgreSQL
- **Authentication:** Devise
- **Payments:** Stripe

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Ruby 3.0+
- Rails 7.x
- PostgreSQL
- Node.js

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ecomm.git
   cd ecomm
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

### Database Setup

1. **Set up PostgreSQL:**
   - Make sure PostgreSQL is installed and running.
   - Create the database and run migrations:
     ```bash
     bin/rails db:create
     bin/rails db:migrate
     ```

2. **Seed the database** (optional):
   ```bash
   bin/rails db:seed
   ```

### Stripe Setup

1. **Edit Rails credentials** to store your Stripe API keys securely:
   ```bash
   EDITOR="code --wait" bin/rails credentials:edit
   ```

   This will open the credentials file in VSCode (or your preferred editor). Add your Stripe keys in the following format:
   ```yaml
   stripe:
     secret_key: your_stripe_secret_key
     public_key: your_stripe_public_key
   ```

2. Once the keys are added and saved, Rails will securely manage them using encrypted credentials.

## Usage

1. **Run the Rails server:**
   ```bash
   rails s
   ```

2. **Navigate to the app in your browser:**
   Open `http://localhost:3000` and `http://localhost:3000/admin` to see the application in action.

3. **User Authentication:**
   - You can sign up or log in to manage your account.
   - Admin users can manage products and orders.

4. **Checkout:**
   - Add products to the cart and proceed to checkout.
   - Complete the transaction through Stripe’s secure payment gateway.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, feel free to reach out:
- **Thadeus Maraga**
- [Your Email](mailto:thadeusmaraga@gmail.com)
- [GitHub Profile](https://github.com/thadeusdev)
- [LinkedIn Profile](https://www.linkedin.com/in/thadeus-maraga-30b200327/)
- [Website](https://www.thadeusnyariki.com/)
