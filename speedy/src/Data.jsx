import "./Data.css";
function Data() {
  const countries = [
    { name: "India", capital: "Delhi" },
    { name: "China", capital: "beijing" },
    { name: "London", capital: "Paris" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
    { name: "Pakistan", capital: "Lahore" },
  ];

  return (
    <div className="container">
      {countries.map((country) => {
        return (
          <div className="card" key={country.name}>
            <h1>{country.name}</h1>
            <h1>{country.capital}</h1>
          </div>
        );
      })}
    </div>
  );
}
export default Data;
