import React, { useState } from "react";

function App() {
  const [gender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [link, setLink] = useState("");

  // Reset link when gender changes
  function handleGenderChange(e) {
    const selectedGender = e.target.value;
    setGender(selectedGender);
    setAgeGroup(""); // Reset age group when gender changes
    setLink(""); // Hide link when selection changes
  }

  // Reset link when age group changes
  function handleAgeGroupChange(e) {
    setAgeGroup(e.target.value);
    setLink(""); // Hide link when age group changes
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (gender === "male" && ageGroup === "adult") {
      setLink("https://chat.whatsapp.com/E6aC7ifjLA5K7fkwDoAnN9?mode=ac_t");
    } else if (gender === "male" && ageGroup === "old") {
      setLink("https://chat.whatsapp.com/IBANeYkUgZx0uekjbNiqUz?mode=ac_t");
    } else if (gender === "female" && ageGroup === "adult") {
      setLink("https://chat.whatsapp.com/DymFEYbqFCRIHlOM5zMuYL?mode=ac_t");
    } else if (gender === "female" && ageGroup === "old") {
      setLink("https://chat.whatsapp.com/Llpexn7CSyzBo8q607Z6Wp?mode=ac_t");
    } else {
      alert("Please select both gender and age group.");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        {/* Gender Selection */}
        <div className="gender-div">
          <p>Select Gender:</p>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
            />
            Male
          </label>{" "}
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
            Female
          </label>
        </div>

        {/* Age Group Selection */}
        {gender && (
          <div className="age-group" style={{ marginTop: "10px" }}>
            <p>Select Age Group:</p>
            <select value={ageGroup} onChange={handleAgeGroupChange}>
              <option value="" disabled>
                -- Select Age Group --
              </option>
              {gender === "male" ? (
                <>
                  <option value="adult">17–35</option>
                  <option value="old">36 & above</option>
                </>
              ) : (
                <>
                  <option value="adult">17–29</option>
                  <option value="old">30 & above</option>
                </>
              )}
            </select>
          </div>
        )}

        {/* Submit Button */}
        <div style={{ marginTop: "15px" }}>
          <button type="submit" disabled={!gender || !ageGroup}>
            Submit
          </button>
        </div>
      </form>

      {/* WhatsApp Link Output */}
      {link && (
        <div style={{ marginTop: "20px" }}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            👉 Click here to join the WhatsApp group
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
