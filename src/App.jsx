import AppRouter from "./Routes/AppRouter";
// import LetterGlitch from "./Letter";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;

// import AppRouter from "./Routes/AppRouter";
// // import LetterGlitch from "./Letter";
// const getSubdomain = () => {
//   const host = window.location.hostname; // jhon.example.in
//   const parts = host.split(".");

//   if (parts.length >= 3) return parts[0]; // jhon from jhon.example.in
//   if (parts.length === 2 && parts[1] === "localhost") return parts[0]; // jhon from jhon.localhost
//   return null;
// };

// function App() {
//   const subdomain = getSubdomain();

//   if (subdomain === "www" || subdomain === "example" || subdomain === null) {
//     // Default routes (marketing/dashboard)
//     return <AppRouter />;
//   } else {
//     return (
//       <div>
//         <div>Hola!! {subdomain}</div>
//       </div>
//     );
//   }
// }

// export default App;
