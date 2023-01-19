import React, { Component, useEffect, useState } from "react";
import Button from "./Button";
import "../CSS/Form.css";
import RadioInput from "./RadioInput";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";

const REG_URL_PREFIX = "https://bits-apogee.org/registrations";

const Form = () => {
  const [events, setEvents] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [submitCount, setSubmitCount] = useState(0);
  const years = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ];

  const [selEvents, setSelEvents] = useState([]);
  const [selCol, setSelCol] = useState(null);
  const [selYrs, setSelYrs] = useState(null);
  const [gen, setGen] = useState("M");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const getEvents = async () => {
    try {
      let eventRes = await fetch(`${REG_URL_PREFIX}/events/`, {
        method: "GET",
      });
      let events = await eventRes.json();
      setEvents(() => {
        let evt = [];
        events.data.forEach(evtCat => {
          evt = [
            ...evt,
            evtCat.map(evt => {
              return { value: evt.id, label: evt.name };
            }),
          ];
        });
      });
    } catch (err) {
      alert("Error in fetching data. Please check your network connection");
    }
  };

  const getColleges = async () => {
    try {
      let collegeRes = await fetch(`${REG_URL_PREFIX}/get_college/`, {
        method: "GET",
      });
      let colleges = await collegeRes.json();
      setColleges(
        colleges.data.map(col => {
          return { value: col.id, label: col.name };
        })
      );
    } catch (err) {
      alert("Error in fetching data. Please check your network connection");
    }
  };

  const getData = async () => {
    getEvents();
    getColleges();
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const submitData = {
      email_id: email,
      events: selEvents,
      phone: phone,
      year: selYrs,
      name: name,
      sex: gen,
      city: city,
      college_id: selCol,
    };
    try {
      let subRes = await fetch(`${REG_URL_PREFIX}/Register`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });
      let resJson = await subRes.json();
      alert(resJson.message);
      if (subRes.ok) {
        setSubmitCount(subCount => subCount + 1);
      }
    } catch (err) {
      alert("Error in submitting data. Please try again");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit} key={`form-${submitCount}`}>
      <div className="form-inputs-container">
        <div className="form-inputs" id="inputs-left">
          <TextInput type="text" field="name" name="name" valueSet={setName} />
          <TextInput
            type="email"
            field="email"
            name="email id"
            valueSet={setEmail}
          />
          <TextInput
            type="number"
            field="phone"
            name="phone number"
            valueSet={setPhone}
          />
          <RadioInput field="gender" name="gender" valueSet={setGen} />
        </div>

        <div className="form-inputs" id="inputs-right">
          <SelectInput
            options={events}
            field="events"
            name="events"
            isMulti={true}
            valueSet={setSelEvents}
          />
          <SelectInput
            options={colleges}
            field="college"
            name="college"
            isMulti={false}
            valueSet={setSelCol}
          />
          <SelectInput
            options={years}
            field="year"
            name="year of study"
            isMulti={false}
            valueSet={setSelYrs}
          />
          <TextInput type="text" field="city" name="city" valueSet={setCity} />
        </div>
      </div>

      <div className="btn-container">
        <Button type="submit" />
      </div>
    </form>
  );
};

export default Form;
