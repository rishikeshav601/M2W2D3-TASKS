import React, { useState } from "react";

//task1:Basic text input
function BasicTextInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Text:{text}</p>
    </div>
  );
}

//task2:Multiple inputs 
function MultipleInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <p>{name} - {email}</p>
    </div>
  );
}

//task3:Textarea handling
function TextareaHandling() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <p>Preview:{text}</p>
    </div>
  )
}


//task4:Checkbox handling
function CheckboxHandling() {
  const [check, setCheck] = useState("");

  return (
    <div>
      <label>
        <input type="checkbox" checked={check} onChange={(e) => setCheck(e.target.checked)} />I agree
      </label>
      <p>{check ? "Checked" : "Not Checked"}</p>

    </div>
  )
}

//task5:Radio buttons
function RadioButtons() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <label>
        <input type="radio" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} /> Male
      </label>
      <label>
        <input type="radio" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} /> Female
      </label>
      <p>Gender:{gender}</p>
    </div>
  );
}

//task6:Select dropdown 
function SelectDropdown() {
  const [country, setCountry] = useState("");

  return (
    <div>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">--Select Country--</option>
        <option value="India">India</option>
        <option value="Russia">Russia</option>
        <option value="Srilanka">SriLanka</option>
      </select>
      <p>Selected:{country}</p>
    </div>
  );
}

//task7:Form submit
function FormSubmit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name:${name}, Age:${age}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Age" type="num" value={age} onChange={(e) => setAge(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

//task8:Password input 
function PasswordInput() {
  const [Password, setPassword] = useState("");

  return (
    <div>
      <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
      <p>Length:{Password.length}</p>
    </div>
  );
}

//task9:Disable submit
function DisableSubmit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <form>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit" disabled={!name || !email}>Submit</button>
    </form>
  );
}

//task10:Reset form
function ResetForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const reset = () => setForm({ name: "", email: "" });
  return (
    <div>
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <button onClick={reset}>Reset</button>
    </div>
  );
}


//task11:Character counter
function CharCounter() {
  const [bio, setBio] = useState("");
  return (
    <div>
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      <p>Characters: {bio.length}</p>
    </div>
  );
}

// task12:Default values
function DefaultValues() {
  const [form, setForm] = useState({ name: "Rishi", email: "rishi@example.com" });
  return (
    <div>
      <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
    </div>
  );
}


//task13:Email validation
function EmailValidation() {
  const [email, setEmail] = useState("");
  const isValid = email.includes("@");
  return (
    <div>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {!isValid && email && <p style={{ color: "red" }}>Invalid email</p>}
    </div>
  );
}

//task14:Number input
function NumberInput() {
  const [age, setAge] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) setAge(value);
  };
  return (
    <div>
      <input placeholder="Age" value={age} onChange={handleChange} />
      <p>{age && isNaN(age) ? "Not a number" : ""}</p>
    </div>
  );
}

//task15:Live preview form
function LivePreviewForm() {
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  return (
    <div>
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Age" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
      <p>
        Preview: {form.name} | {form.email} | {form.age}
      </p>
    </div>
  );
}


function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>M2W2D3 TASKS</h1>

      <h2>1.Basic text input</h2>
      <BasicTextInput />

      <h2>2.Multiple inputs </h2>
      <MultipleInputs />

      <h2>3. Textarea handling</h2>
      <TextareaHandling />

      <h2>4. Checkbox handling</h2>
      <CheckboxHandling />

      <h2>5. Radio buttons</h2>
      <RadioButtons />

      <h2>6. Select dropdown </h2>
      <SelectDropdown />

      <h2>7.Form submit</h2>
      <FormSubmit />

      <h2>8.Password input </h2>
      <PasswordInput />

      <h2>9.Disable submit</h2>
      <DisableSubmit />

      <h2>10.Reset form</h2>
      <ResetForm />

      <h2>11:Character counter</h2>
      <CharCounter />

      <h2>12. DefaultValues</h2>
      <DefaultValues />

      <h2>13.EmailValidation</h2>
      <EmailValidation />

      <h2>14.NumberInput</h2>
      <NumberInput />

      <h2>15.LivePreviewForm</h2>
      <LivePreviewForm />


    </div>
  );
}

export default App;