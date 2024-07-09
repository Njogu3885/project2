import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>GeeksforGeeks Form</h1>
      <script src=
    "https://cdn.tailwindcss.com">
      </script>
    
    <body class="bg-gray-100 font-sans">
      <div class="min-h-screen flex items-center 
            justify-center">
        <div class="bg-white p-8 rounded shadow-md w-96">
          <h2 class="text-2xl font-bold mb-6 
              text-center text-green-600">
            GeeksforGeeks
          </h2>
          <h4 class="font-bold mb-4 text-center 
              text-black-600">
            Enter your login credentials
          </h4>
          <form id="loginForm">
            <div class="mb-4">
              <label for="username"
                class="block text-sm font-bold 
                    font-medium text-black-600">
                Username:
              </label>
              <input type="text" id="username"
                placeholder="Enter your username"
                required name="username"
                class="mt-1 p-2 w-full border rounded-md"></input>
            </div>
            <div class="mb-4 relative">
              <label for="password"
                class="block text-sm font-bold 
                    font-medium text-black-800">
                Password:
              </label>
              <div class="flex items-center">
                <input type="password" id="password"
                  placeholder="Enter your Password"
                  required name="password"
                  class="mt-1 p-2 w-full border rounded-md pr-10"></input>
                <button type="button" id="togglePassword"
                    class="focus:outline-none -ml-8">
                  <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20240227164304/visible.png"
                    alt="" class="w-4"></img>
                </button>
              </div>
            </div>
            <button type="submit"
                class="w-full bg-green-500 text-white 
                  p-2 rounded-md hover:bg-green-600">
              Submit
            </button>
            <p class="text-center mt-2">
              Not registered? 
              <span class="text-purple-500">
                Create an account
              </span>
            </p>
          </form>
        </div>
      </div>
      <script src="app.js"></script>
    </body>
    
    </header>
    
  );
}

export default App;

    
