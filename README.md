# Angular and .NET Core CRUD Project

This repository contains a project that demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using Angular for the front end and .NET Core Web API for the back end.

## Getting Started

These instructions will help you get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) and npm (Node Package Manager)
- [.NET Core SDK](https://dotnet.microsoft.com/download)
- [Angular CLI](https://cli.angular.io/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AmitRathod07/My-Address_Projrct_with_Crud_Operation.git
cd angular-dotnet-crud
```

2. Frontend Setup:

```bash
cd ClientApp
npm install
```

3. Backend Setup:

```bash
# Navigate back to the project root
cd ..
dotnet restore
```

## Running the Application

1. Start the .NET Core Web API server:

```bash
dotnet run
```

2. Start the Angular development server:

```bash
cd ClientApp
ng serve
```

The Angular app will be accessible at `http://localhost:4200`.

## Usage

- Access the Angular app in your browser to interact with the CRUD operations.
- The API endpoints can be found in the `.NET Core Web API` project.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This project was inspired by [provide source or tutorial if applicable].
Thanks to [mention any contributors or resources].

